"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  Button,
  Input,
  Label,
  Checkbox,
  Slider,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
} from "@kavzorn/ui";
import {
  Upload,
  Download,
  RotateCcw,
  Image as ImageIcon,
  Zap,
  Settings,
  Monitor,
  Smartphone,
  Camera,
} from "lucide-react";

interface ImageDimensions {
  width: number;
  height: number;
}

interface ResizeSettings {
  width: string;
  height: string;
  maintainAspectRatio: boolean;
  quality: number;
  format: "png" | "jpeg" | "webp";
}

export default function ImageResize() {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalDimensions, setOriginalDimensions] =
    useState<ImageDimensions | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [resizedPreviewUrl, setResizedPreviewUrl] = useState<string>("");
  const [settings, setSettings] = useState<ResizeSettings>({
    width: "",
    height: "",
    maintainAspectRatio: true,
    quality: 90,
    format: "png",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files && files.length > 0) {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        handleImageUpload(file);
      }
    }
  }, []);

  const handleImageUpload = (file: File) => {
    setOriginalImage(file);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    // Get original dimensions
    const img = new Image();
    img.onload = () => {
      setOriginalDimensions({ width: img.width, height: img.height });
      setSettings((prev) => ({
        ...prev,
        width: img.width.toString(),
        height: img.height.toString(),
      }));
    };
    img.src = url;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const calculateAspectRatio = (
    width: number,
    height: number,
    newWidth: number
  ): number => {
    return Math.round((newWidth * height) / width);
  };

  const handleDimensionChange = (
    dimension: "width" | "height",
    value: string
  ) => {
    if (!originalDimensions) return;

    const numValue = parseInt(value) || 0;

    if (settings.maintainAspectRatio && numValue > 0) {
      if (dimension === "width") {
        const newHeight = calculateAspectRatio(
          originalDimensions.width,
          originalDimensions.height,
          numValue
        );
        setSettings((prev) => ({
          ...prev,
          width: value,
          height: newHeight.toString(),
        }));
      } else {
        const newWidth = calculateAspectRatio(
          originalDimensions.height,
          originalDimensions.width,
          numValue
        );
        setSettings((prev) => ({
          ...prev,
          height: value,
          width: newWidth.toString(),
        }));
      }
    } else {
      setSettings((prev) => ({ ...prev, [dimension]: value }));
    }
  };

  const resizeImage = async () => {
    if (!originalImage || !canvasRef.current) return;

    setIsProcessing(true);

    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = new Image();
      img.onload = () => {
        const targetWidth =
          parseInt(settings.width) || originalDimensions?.width || 0;
        const targetHeight =
          parseInt(settings.height) || originalDimensions?.height || 0;

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // Use high-quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // Draw the resized image
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        // Generate preview
        const quality = settings.quality / 100;
        let mimeType = "image/png";
        if (settings.format === "jpeg") mimeType = "image/jpeg";
        if (settings.format === "webp") mimeType = "image/webp";

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              setResizedPreviewUrl(url);
            }
            setIsProcessing(false);
          },
          mimeType,
          quality
        );
      };

      img.src = previewUrl;
    } catch (error) {
      console.error("Error resizing image:", error);
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const quality = settings.quality / 100;
    let mimeType = "image/png";
    let extension = "png";

    if (settings.format === "jpeg") {
      mimeType = "image/jpeg";
      extension = "jpg";
    } else if (settings.format === "webp") {
      mimeType = "image/webp";
      extension = "webp";
    }

    canvas.toBlob(
      (blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = `resized_${settings.width}x${settings.height}.${extension}`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }
      },
      mimeType,
      quality
    );
  };

  const resetApp = () => {
    setOriginalImage(null);
    setOriginalDimensions(null);
    setPreviewUrl("");
    setResizedPreviewUrl("");
    setSettings({
      width: "",
      height: "",
      maintainAspectRatio: true,
      quality: 90,
      format: "png",
    });
    setIsProcessing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Upload Area */}
      {!originalImage && (
        <Card className="relative overflow-hidden">
          <div
            className={`border-2 border-dashed rounded-lg p-16 text-center transition-all duration-300 cursor-pointer group ${
              dragActive
                ? "border-primary bg-primary/5 scale-[1.02]"
                : "border-border hover:border-primary/50 hover:bg-accent/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div
                  className={`p-6 rounded-full transition-all duration-300 ${
                    dragActive
                      ? "bg-primary/20 scale-110"
                      : "bg-accent group-hover:bg-primary/10 group-hover:scale-105"
                  }`}
                >
                  <Upload
                    className={`h-12 w-12 transition-colors ${
                      dragActive
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-primary"
                    }`}
                  />
                </div>
                {dragActive && (
                  <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping"></div>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Drop your image here</h3>
                <p className="text-muted-foreground max-w-md">
                  Drag and drop an image file, or click to browse your files
                </p>
              </div>

              <Button
                size="lg"
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg border-0"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImageIcon className="h-4 w-4" />
                Choose Image
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary" className="">
                  JPG
                </Badge>
                <Badge variant="secondary" className="">
                  PNG
                </Badge>
                <Badge variant="secondary" className="">
                  WebP
                </Badge>
                <Badge variant="secondary" className="">
                  GIF
                </Badge>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </Card>
      )}

      {/* Main Interface */}
      {originalImage && originalDimensions && (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6 xl:col-span-1">
            {/* Settings Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Resize Settings
                </CardTitle>
                <CardDescription>
                  Customize the output dimensions and quality
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Original Info */}
                <div className="bg-accent/50 rounded-lg p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Original</span>
                    <Badge variant="outline" className="">
                      {(originalImage.size / 1024 / 1024).toFixed(2)} MB
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {originalDimensions.width} × {originalDimensions.height}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {originalImage.name}
                  </div>
                </div>

                {/* Dimensions */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Dimensions</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (px)</Label>
                      <Input
                        id="width"
                        type="number"
                        value={settings.width}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleDimensionChange("width", e.target.value)
                        }
                        min="1"
                        placeholder="Width"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (px)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={settings.height}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleDimensionChange("height", e.target.value)
                        }
                        min="1"
                        placeholder="Height"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="aspectRatio"
                      checked={settings.maintainAspectRatio}
                      onCheckedChange={(checked: boolean) =>
                        setSettings((prev) => ({
                          ...prev,
                          maintainAspectRatio: checked,
                        }))
                      }
                    />
                    <Label htmlFor="aspectRatio" className="text-sm">
                      Maintain aspect ratio
                    </Label>
                  </div>
                </div>

                {/* Quality */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">Quality</Label>
                    <Badge variant="outline" className="">
                      {settings.quality}%
                    </Badge>
                  </div>
                  <Slider
                    value={[settings.quality]}
                    onValueChange={(value: number[]) =>
                      setSettings((prev) => ({
                        ...prev,
                        quality: value[0] || 90,
                      }))
                    }
                    min={10}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Format */}
                <div className="space-y-2">
                  <Label className="text-base font-medium">Output Format</Label>
                  <Select
                    value={settings.format}
                    onValueChange={(value: "png" | "jpeg" | "webp") =>
                      setSettings((prev) => ({ ...prev, format: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="png">PNG (Lossless)</SelectItem>
                      <SelectItem value="jpeg">JPEG (Compressed)</SelectItem>
                      <SelectItem value="webp">WebP (Modern)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={resizeImage}
                    disabled={
                      isProcessing || !settings.width || !settings.height
                    }
                    className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400 disabled:text-gray-200"
                    size="lg"
                  >
                    <Zap className="h-4 w-4" />
                    {isProcessing ? "Processing..." : "Resize Image"}
                  </Button>
                  <Button
                    onClick={resetApp}
                    variant="outline"
                    size="lg"
                    className="gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Presets */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Quick Presets
                </CardTitle>
                <CardDescription>
                  Popular sizes for different platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      name: "Instagram Square",
                      width: 1080,
                      height: 1080,
                      icon: Camera,
                      category: "Social",
                    },
                    {
                      name: "Instagram Story",
                      width: 1080,
                      height: 1920,
                      icon: Smartphone,
                      category: "Social",
                    },
                    {
                      name: "Facebook Cover",
                      width: 1200,
                      height: 630,
                      icon: Monitor,
                      category: "Social",
                    },
                    {
                      name: "Twitter Header",
                      width: 1500,
                      height: 500,
                      icon: Monitor,
                      category: "Social",
                    },
                    {
                      name: "Profile Picture",
                      width: 400,
                      height: 400,
                      icon: Camera,
                      category: "Avatar",
                    },
                    {
                      name: "Thumbnail",
                      width: 200,
                      height: 200,
                      icon: ImageIcon,
                      category: "Web",
                    },
                  ].map((preset) => {
                    const IconComponent = preset.icon;
                    return (
                      <Button
                        key={preset.name}
                        variant="outline"
                        onClick={() => {
                          setSettings((prev) => ({
                            ...prev,
                            width: preset.width.toString(),
                            height: preset.height.toString(),
                            maintainAspectRatio: false,
                          }));
                        }}
                        className="h-auto p-4 justify-start group hover:bg-primary/5"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent group-hover:bg-primary/10">
                            <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                          </div>
                          <div className="flex-1 text-left space-y-1">
                            <div className="font-medium text-sm">
                              {preset.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {preset.width}×{preset.height} • {preset.category}
                            </div>
                          </div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Area */}
          <div className="xl:col-span-2 space-y-6">
            {/* Original Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Original Image</CardTitle>
                <CardDescription>
                  {originalDimensions.width} × {originalDimensions.height}{" "}
                  pixels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-accent/30 rounded-lg overflow-hidden border-2 border-dashed border-border">
                  <img
                    src={previewUrl}
                    alt="Original"
                    className="w-full h-auto max-h-80 object-contain bg-checkered"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Resized Preview */}
            {resizedPreviewUrl && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-green-600">
                        Resized Image
                      </CardTitle>
                      <CardDescription>
                        {settings.width} × {settings.height} pixels •{" "}
                        {settings.format.toUpperCase()}
                      </CardDescription>
                    </div>
                    <Button
                      onClick={downloadImage}
                      className="gap-2 bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-accent/30 rounded-lg overflow-hidden border-2 border-dashed border-green-200">
                    <img
                      src={resizedPreviewUrl}
                      alt="Resized"
                      className="w-full h-auto max-h-80 object-contain bg-checkered"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-200"
                    >
                      Processed
                    </Badge>
                    <span>Quality: {settings.quality}%</span>
                    <span>Format: {settings.format.toUpperCase()}</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Hidden Canvas */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Background Pattern */}
      <style jsx>{`
        .bg-checkered {
          background-image: linear-gradient(45deg, #f1f5f9 25%, transparent 25%),
            linear-gradient(-45deg, #f1f5f9 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #f1f5f9 75%),
            linear-gradient(-45deg, transparent 75%, #f1f5f9 75%);
          background-size: 20px 20px;
          background-position:
            0 0,
            0 10px,
            10px -10px,
            -10px 0px;
        }
      `}</style>
    </div>
  );
}
