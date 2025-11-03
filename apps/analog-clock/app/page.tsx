"use client";

import { useEffect, useRef, useState } from "react";
import ClockHeader from "../components/ClockHeader";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let raf = 0;
    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));

    function draw() {
      if (!canvas) return;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.scale(DPR, DPR);
      ctx.clearRect(0, 0, w, h);

      const r = Math.min(w, h) / 2 - 16;
      const cx = w / 2;
      const cy = h / 2;
      const now = new Date();

      // Update date display
      setDateStr(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );

      const sec = now.getSeconds() + now.getMilliseconds() / 1000;
      const min = now.getMinutes() + sec / 60;
      const hr = (now.getHours() % 12) + min / 60;

      ctx.lineCap = "round";

      // Clock face with gradient
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0, "#1e293b");
      gradient.addColorStop(1, "#0f172a");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Hour markers and ticks
      for (let i = 0; i < 60; i++) {
        const angle = (i / 60) * Math.PI * 2;
        const isHourMarker = i % 5 === 0;
        const len = isHourMarker ? 16 : 8;
        const x1 = cx + Math.cos(angle) * (r - len);
        const y1 = cy + Math.sin(angle) * (r - len);
        const x2 = cx + Math.cos(angle) * (r - 6);
        const y2 = cy + Math.sin(angle) * (r - 6);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = isHourMarker ? "#60a5fa" : "#64748b";
        ctx.lineWidth = isHourMarker ? 3 : 1.5;
        ctx.stroke();
      }

      function hand(
        angle: number,
        length: number,
        width: number,
        color: string
      ) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(
          cx + Math.cos(angle) * length,
          cy + Math.sin(angle) * length
        );
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
      }

      // Hour hand
      hand((hr / 12) * Math.PI * 2 - Math.PI / 2, r * 0.5, 6, "#e2e8f0");
      // Minute hand
      hand((min / 60) * Math.PI * 2 - Math.PI / 2, r * 0.72, 4, "#cbd5e1");
      // Second hand with gradient effect
      hand((sec / 60) * Math.PI * 2 - Math.PI / 2, r * 0.84, 2, "#60a5fa");

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#60a5fa";
      ctx.fill();
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 2;
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main className="h-dvh flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <ClockHeader currentApp="analog" />

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center">
            {/* Analog Clock */}
            <div className="w-full aspect-square max-w-[min(85vw,400px)] mx-auto rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-gradient-to-br from-white to-slate-50">
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>

            {/* Date Display */}
            <div className="mt-6 text-slate-700 text-xs sm:text-sm md:text-base font-medium">
              {dateStr}
            </div>

            {/* Info */}
            <p className="mt-4 text-slate-500 text-xs sm:text-sm">
              Press F11 for fullscreen mode
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
