import SpeedTest from "../components/SpeedTest";
import { KavzornHeader } from "@kavzorn/ui";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <KavzornHeader />
      <main className="container mx-auto px-4 py-8">
        {/* SEO Content Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Internet Speed Test Online
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Check your network performance with NetFast, Kavzorn's free internet
            speed test online. Get instant upload/download speeds and latency
            metrics without downloading software.
          </p>
        </div>

        {/* Speed Test Component */}
        <SpeedTest />

        {/* SEO Content */}
        <div className="mt-12 max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use Our Online Speed Test
          </h2>
          <p className="text-gray-700 mb-6">
            NetFast provides accurate internet speed measurements in just
            seconds. Click the "Start Test" button to begin measuring your
            connection speed. Our tool automatically detects your download
            speed, upload speed, and ping latency without requiring any software
            installation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Use NetFast Speed Test
          </h2>
          <p className="text-gray-700 mb-6">
            Our internet speed test online is completely free and works on any
            device – desktop, mobile, or tablet. NetFast uses multiple test
            servers to ensure accurate results and provides detailed metrics
            including download speed (Mbps), upload speed (Mbps), and ping
            response time (ms). The test typically completes in under 30 seconds
            and displays results in an easy-to-understand format.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Understanding Your Speed Test Results
          </h2>
          <p className="text-gray-700">
            Download speed measures how fast you can receive data from the
            internet, important for streaming, downloading files, and browsing.
            Upload speed shows how quickly you can send data, crucial for video
            calls and file uploads. Ping measures network responsiveness, with
            lower values indicating better performance for gaming and real-time
            applications.
          </p>
        </div>
      </main>
    </div>
  );
}
