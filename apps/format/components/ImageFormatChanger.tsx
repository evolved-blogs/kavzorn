"use client";

import { useState, useRef, useCallback } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Badge,
  Progress,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Input,
  Label,
} from "@kavzorn/ui";

interface ConvertedImage {
  id: string;
  file: File;
  originalFormat: string;
  targetFormat: string;
  originalSize: number;
  convertedSize: number;
  quality: number;
  dataUrl: string;
}

const SUPPORTED_FORMATS = [
  { value: "png", label: "PNG", extension: ".png" },
  { value: "jpeg", label: "JPEG", extension: ".jpg" },
  { value: "webp", label: "WebP", extension: ".webp" },
];

const QUALITY_PRESETS = {
  low: { value: 60, label: "Low (Smaller file)" },
  medium: { value: 80, label: "Medium (Balanced)" },
  high: { value: 95, label: "High (Best quality)" },
};

export default function ImageFormatChanger() {
  const [images, setImages] = useState<File[]>([]);
  const [convertedImages, setConvertedImages] = useState<ConvertedImage[]>([]);
  const [targetFormat, setTargetFormat] = useState<string>("webp");
  const [quality, setQuality] = useState<number>(80);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = useCallback((files: FileList) => {
    const validImages = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );
    setImages((prev) => [...prev, ...validImages]);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      if (e.dataTransfer.files) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  }, []);

  const convertImage = useCallback(
    (file: File, format: string, quality: number): Promise<ConvertedImage> => {
      return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);

          const mimeType = `image/${format === "jpeg" ? "jpeg" : format}`;
          const qualityValue = format === "png" ? undefined : quality / 100;

          canvas.toBlob(
            (blob) => {
              if (blob) {
                const convertedFile = new File([blob], `converted.${format}`, {
                  type: mimeType,
                });

                canvas.toDataURL(mimeType, qualityValue);

                const convertedImage: ConvertedImage = {
                  id: Math.random().toString(36).substr(2, 9),
                  file: convertedFile,
                  originalFormat: file.type.split("/")[1] || "unknown",
                  targetFormat: format,
                  originalSize: file.size,
                  convertedSize: blob.size,
                  quality: format === "png" ? 100 : quality,
                  dataUrl: canvas.toDataURL(mimeType, qualityValue),
                };

                resolve(convertedImage);
              } else {
                reject(new Error("Conversion failed"));
              }
            },
            mimeType,
            qualityValue
          );
        };

        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = URL.createObjectURL(file);
      });
    },
    []
  );

  const handleConvert = useCallback(async () => {
    if (images.length === 0) return;

    setIsConverting(true);
    setProgress(0);
    setConvertedImages([]);

    try {
      const converted: ConvertedImage[] = [];

      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        if (image) {
          const result = await convertImage(image, targetFormat, quality);
          converted.push(result);
          setProgress(((i + 1) / images.length) * 100);
        }
      }

      setConvertedImages(converted);
    } catch (error) {
      console.error("Conversion failed:", error);
    } finally {
      setIsConverting(false);
    }
  }, [images, targetFormat, quality, convertImage]);

  const downloadImage = useCallback((convertedImage: ConvertedImage) => {
    const link = document.createElement("a");
    link.href = convertedImage.dataUrl;
    link.download = `converted_${Date.now()}.${convertedImage.targetFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const downloadAll = useCallback(() => {
    convertedImages.forEach((image, index) => {
      setTimeout(() => downloadImage(image), index * 100);
    });
  }, [convertedImages, downloadImage]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getSavingsPercentage = (original: number, converted: number) => {
    const savings = ((original - converted) / original) * 100;
    return savings > 0
      ? `${savings.toFixed(1)}% smaller`
      : `${Math.abs(savings).toFixed(1)}% larger`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
            🔄 Image Format Converter
          </CardTitle>
          <p className="text-muted-foreground">
            Convert images between PNG, JPEG, and WebP formats with quality
            control
          </p>
        </CardHeader>
      </Card>

      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div className="space-y-4">
              <div className="text-4xl">📁</div>
              <div>
                <p className="text-lg font-medium">
                  Drop images here or click to browse
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports PNG, JPEG, WebP, and other image formats
                </p>
              </div>
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
              >
                Browse Files
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
                className="hidden"
              />
            </div>
          </div>

          {images.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">
                Selected Images ({images.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {images.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="text-2xl">🖼️</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                    <Badge variant="outline">
                      {(file.type.split("/")[1] || "unknown").toUpperCase()}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={() => setImages([])}
                className="mt-3"
              >
                Clear All
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Conversion Settings */}
      {images.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Conversion Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic Settings</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="format-select">Target Format</Label>
                    <Select
                      value={targetFormat}
                      onValueChange={setTargetFormat}
                    >
                      <SelectTrigger id="format-select">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        {SUPPORTED_FORMATS.map((format) => (
                          <SelectItem key={format.value} value={format.value}>
                            {format.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {targetFormat !== "png" && (
                    <div className="space-y-2">
                      <Label htmlFor="quality-slider">
                        Quality: {quality}%
                      </Label>
                      <Slider
                        id="quality-slider"
                        value={[quality]}
                        onValueChange={(value) => setQuality(value[0] || 80)}
                        max={100}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Smaller file</span>
                        <span>Better quality</span>
                      </div>
                    </div>
                  )}
                </div>

                {targetFormat !== "png" && (
                  <div className="space-y-2">
                    <Label>Quality Presets</Label>
                    <div className="flex gap-2">
                      {Object.entries(QUALITY_PRESETS).map(([key, preset]) => (
                        <Button
                          key={key}
                          variant={
                            quality === preset.value ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setQuality(preset.value)}
                        >
                          {preset.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Batch Operations</h4>
                    <p className="text-sm text-muted-foreground">
                      All images will be converted with the same settings
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="pt-6 border-t">
              <Button
                onClick={handleConvert}
                disabled={images.length === 0 || isConverting}
                className="w-full"
              >
                {isConverting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Converting...
                  </div>
                ) : (
                  `Convert ${images.length} Image${images.length > 1 ? "s" : ""} to ${targetFormat.toUpperCase()}`
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Conversion Progress */}
      {isConverting && (
        <Card>
          <CardHeader>
            <CardTitle>Converting Images...</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">
              {Math.round(progress)}% complete
            </p>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {convertedImages.length > 0 && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Converted Images ({convertedImages.length})</CardTitle>
            <Button onClick={downloadAll} variant="outline">
              Download All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {convertedImages.map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            {image.originalFormat.toUpperCase()}
                          </Badge>
                          <span className="text-muted-foreground">→</span>
                          <Badge>{image.targetFormat.toUpperCase()}</Badge>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Original size:</span>
                            <span>{formatFileSize(image.originalSize)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Converted size:</span>
                            <span>{formatFileSize(image.convertedSize)}</span>
                          </div>
                          <div className="flex justify-between text-sm font-medium">
                            <span>Savings:</span>
                            <span
                              className={
                                image.convertedSize < image.originalSize
                                  ? "text-green-600"
                                  : "text-orange-600"
                              }
                            >
                              {getSavingsPercentage(
                                image.originalSize,
                                image.convertedSize
                              )}
                            </span>
                          </div>
                          {image.quality < 100 && (
                            <div className="flex justify-between text-sm">
                              <span>Quality:</span>
                              <span>{image.quality}%</span>
                            </div>
                          )}
                        </div>

                        <Button
                          onClick={() => downloadImage(image)}
                          size="sm"
                          className="w-full"
                        >
                          Download
                        </Button>
                      </div>

                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={image.dataUrl}
                          alt="Converted"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
