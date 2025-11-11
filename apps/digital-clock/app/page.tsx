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
          {/* Page Title for SEO */}
          <h1 className="sr-only">Online Digital Clock</h1>

          {/* Digital Clock Display */}
          <div className="flex flex-col items-center justify-center overflow-visible px-2">
            <div
              className="font-bold tabular-nums tracking-tight bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm"
              style={{
                fontSize: "clamp(2.5rem, 12vw, 9rem)",
                lineHeight: "1.1",
              }}
              aria-label={`Current time: ${time}`}
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

      {/* SEO Content Section */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Online Digital Clock
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Welcome to Kavzorn's online digital clock – your free, easy-to-use
              time display in the browser. This digital clock shows the current
              time in real-time without needing any downloads. By using our
              online digital clock, you can keep track of time for free on any
              device.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                How to Use the Digital Clock
              </h3>
              <ul className="text-slate-700 space-y-2">
                <li>
                  • Open the Digital Clock page and see the accurate local time
                  instantly
                </li>
                <li>• The clock updates every second automatically</li>
                <li>
                  • Works on Windows, macOS, Linux, iOS, and Android devices
                </li>
                <li>• Press F11 for fullscreen mode during presentations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                Clock Features & Settings
              </h3>
              <ul className="text-slate-700 space-y-2">
                <li>• 24-hour format display with seconds</li>
                <li>• Large, easy-to-read digital display</li>
                <li>• Clean interface with no ads or pop-ups</li>
                <li>• Responsive design for all screen sizes</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 text-center">
              Why Use Our Online Clock
            </h3>
            <p className="text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              The clock automatically syncs to your computer's time settings,
              ensuring it's always accurate. If your device is online, the
              analog clock will continue to show real-time updates. Many people
              use this free digital clock as a desktop dashboard widget, a timer
              during presentations, or simply as a handy reference while
              working. Since it's an online digital clock, you can bookmark it
              and open it anytime to instantly check the time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
