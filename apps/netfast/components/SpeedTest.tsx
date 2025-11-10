"use client";

import { useState, useEffect, useRef } from "react";

interface NetworkInfo {
  ip?: string;
  city?: string;
  country?: string;
  isp?: string;
}

export default function SpeedTest() {
  const [testStage, setTestStage] = useState<"idle" | "testing" | "complete">("idle");
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({});
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [finalSpeed, setFinalSpeed] = useState(0);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [latency, setLatency] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    fetchNetworkInfo();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const fetchNetworkInfo = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setNetworkInfo({
        ip: data.ip,
        city: data.city,
        country: data.country_name,
        isp: data.org,
      });
    } catch (error) {
      console.error("Failed to fetch network info:", error);
    }
  };

  const measureLatency = async () => {
    const measurements: number[] = [];
    for (let i = 0; i < 5; i++) {
      const start = performance.now();
      try {
        await fetch("https://www.google.com/generate_204", {
          method: "HEAD",
          cache: "no-cache",
        });
        const end = performance.now();
        measurements.push(end - start);
      } catch (error) {
        console.error("Latency test failed:", error);
      }
    }
    const avgLatency = measurements.reduce((a, b) => a + b, 0) / measurements.length;
    setLatency(Math.round(avgLatency));
  };

  const animateSpeed = (targetSpeed: number, duration: number = 500) => {
    const startSpeed = currentSpeed;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newSpeed = startSpeed + (targetSpeed - startSpeed) * easeOutCubic;
      
      setCurrentSpeed(newSpeed);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  const measureDownloadSpeed = async () => {
    const testUrls = [
      "https://proof.ovh.net/files/1Mb.dat",
      "https://proof.ovh.net/files/10Mb.dat",
      "https://proof.ovh.net/files/100Mb.dat",
    ];

    let maxSpeed = 0;
    const allSpeeds: number[] = [];

    for (const url of testUrls) {
      try {
        const startTime = performance.now();
        const response = await fetch(url, { 
          cache: "no-cache",
          mode: "cors"
        });
        
        const reader = response.body?.getReader();
        if (!reader) continue;

        let receivedBytes = 0;
        let lastUpdate = startTime;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          receivedBytes += value?.length || 0;
          const currentTime = performance.now();
          
          if (currentTime - lastUpdate > 100) {
            const elapsed = (currentTime - startTime) / 1000;
            const megabits = (receivedBytes * 8) / (1024 * 1024);
            const speedMbps = megabits / elapsed;
            
            allSpeeds.push(speedMbps);
            maxSpeed = Math.max(maxSpeed, speedMbps);
            animateSpeed(speedMbps, 200);
            lastUpdate = currentTime;
          }
        }

        const endTime = performance.now();
        const totalSeconds = (endTime - startTime) / 1000;
        const totalMegabits = (receivedBytes * 8) / (1024 * 1024);
        const avgSpeed = totalMegabits / totalSeconds;
        
        maxSpeed = Math.max(maxSpeed, avgSpeed);
        animateSpeed(avgSpeed, 200);
        
      } catch (error) {
        console.error("Download test error:", error);
      }
    }

    const topSpeeds = allSpeeds.sort((a, b) => b - a).slice(0, 10);
    const avgTopSpeed = topSpeeds.length > 0 
      ? topSpeeds.reduce((a, b) => a + b, 0) / topSpeeds.length 
      : maxSpeed;

    return avgTopSpeed;
  };

  const measureUploadSpeed = async () => {
    const testSizes = [1, 5, 10]; // MB
    let maxSpeed = 0;

    for (const sizeMB of testSizes) {
      try {
        const data = new Blob([new ArrayBuffer(sizeMB * 1024 * 1024)]);
        const formData = new FormData();
        formData.append("file", data, "test.bin");

        const startTime = performance.now();
        await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });
        const endTime = performance.now();

        const durationSeconds = (endTime - startTime) / 1000;
        const speedMbps = (sizeMB * 8) / durationSeconds;
        
        maxSpeed = Math.max(maxSpeed, speedMbps);
        setUploadSpeed(speedMbps);
        
      } catch (error) {
        console.error("Upload test error:", error);
      }
    }

    return maxSpeed;
  };

  const startTest = async () => {
    setTestStage("testing");
    setCurrentSpeed(0);
    setFinalSpeed(0);
    setUploadSpeed(0);
    setShowUpload(false);

    try {
      await measureLatency();
      const downloadResult = await measureDownloadSpeed();
      setFinalSpeed(downloadResult);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setShowUpload(true);
      await measureUploadSpeed();
      
      setTestStage("complete");
    } catch (error) {
      console.error("Speed test failed:", error);
      setTestStage("idle");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Main Speed Display */}
        <div className="mb-12">
          {testStage === "idle" && (
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-7xl font-bold mb-2">
                Speed Test
              </h1>
              <p className="text-gray-400 text-lg">
                Test your internet connection speed
              </p>
            </div>
          )}

          {(testStage === "testing" || testStage === "complete") && (
            <div className="space-y-4">
              <div className="relative">
                <div className="text-8xl sm:text-9xl font-bold mb-2 transition-all duration-300">
                  {testStage === "complete" ? finalSpeed.toFixed(0) : currentSpeed.toFixed(0)}
                </div>
                <div className="text-2xl sm:text-3xl text-gray-400 font-medium">
                  Mbps
                </div>
              </div>
              
              <div className="text-gray-400 text-sm">
                {testStage === "testing" ? "Testing download speed..." : "Download complete"}
              </div>
            </div>
          )}
        </div>

        {/* Upload Speed & Latency */}
        {showUpload && (
          <div className="mb-8 space-y-4 animate-fadeIn">
            <div className="flex justify-center gap-12 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">
                  {uploadSpeed.toFixed(1)}
                </div>
                <div className="text-sm text-gray-400 mt-1">Upload Mbps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  {latency}
                </div>
                <div className="text-sm text-gray-400 mt-1">Latency ms</div>
              </div>
            </div>
          </div>
        )}

        {/* Start/Restart Button */}
        <div className="mb-12">
          {testStage === "idle" && (
            <button
              onClick={startTest}
              className="bg-white text-black px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Test
            </button>
          )}
          
          {testStage === "complete" && (
            <button
              onClick={startTest}
              className="bg-gray-800 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all duration-200 border border-gray-700"
            >
              Test Again
            </button>
          )}
        </div>

        {/* Network Info */}
        {networkInfo.isp && (
          <div className="border-t border-gray-800 pt-8 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Provider</span>
              <span className="text-gray-300 font-medium">{networkInfo.isp}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Location</span>
              <span className="text-gray-300 font-medium">
                {networkInfo.city}, {networkInfo.country}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">IP Address</span>
              <span className="text-gray-300 font-medium">{networkInfo.ip}</span>
            </div>
            {testStage === "complete" && latency > 0 && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Latency</span>
                <span className="text-gray-300 font-medium">{latency} ms</span>
              </div>
            )}
          </div>
        )}

        {/* Testing Indicator */}
        {testStage === "testing" && (
          <div className="mt-8">
            <div className="flex justify-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
