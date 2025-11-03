"use client";

import { useEffect, useState } from "react";
import ClockHeader from "../components/ClockHeader";

function format(now: Date) {
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export default function Page() {
  const [time, setTime] = useState<string>(format(new Date()));
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(format(now));
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateDateTime();
    const id = setInterval(updateDateTime, 250);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-dvh flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <ClockHeader currentApp="digital" />

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="text-center">
          {/* Digital Clock Display */}
          <div className="flex flex-col items-center justify-center overflow-visible px-2">
            <div
              className="font-bold tabular-nums tracking-tight bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm"
              style={{
                fontSize: "clamp(2.5rem, 12vw, 9rem)",
                lineHeight: "1.1",
              }}
            >
              {time}
            </div>
            <div className="mt-4 text-slate-600 text-base sm:text-lg md:text-xl font-medium">
              {date}
            </div>
          </div>

          {/* Info */}
          <p className="mt-6 text-slate-500 text-xs sm:text-sm">
            Press F11 for fullscreen mode
          </p>
        </div>
      </div>
    </main>
  );
}
