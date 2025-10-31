export const metadata = {
  title: "Our Services • Kavzorn",
  description: "Explore the services and solutions offered by Kavzorn.",
};

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Comprehensive digital solutions designed to simplify your workflow and
          enhance productivity
        </p>
      </div>

      <div className="space-y-16">
        {/* Development Services */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">💻</div>
            <h2 className="text-3xl font-bold text-slate-900">
              Development Services
            </h2>
          </div>
          <p className="text-slate-600 mb-6">
            We build cutting-edge applications using the latest technologies to
            bring your ideas to life with speed and precision.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Web Applications
              </h3>
              <p className="text-slate-600 mb-4">
                Modern, responsive web applications built with the latest
                frameworks and best practices for optimal performance.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ React & Next.js development</li>
                <li>✓ Progressive Web Apps (PWA)</li>
                <li>✓ Responsive design</li>
                <li>✓ API integration</li>
                <li>✓ Cloud deployment</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Mobile Applications
              </h3>
              <p className="text-slate-600 mb-4">
                Cross-platform and native mobile apps that deliver exceptional
                user experiences on iOS and Android.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ React Native development</li>
                <li>✓ iOS & Android apps</li>
                <li>✓ Cross-platform solutions</li>
                <li>✓ App Store deployment</li>
                <li>✓ Push notifications</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Native Applications
              </h3>
              <p className="text-slate-600 mb-4">
                High-performance native applications optimized for specific
                platforms to maximize speed and user experience.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ Swift for iOS</li>
                <li>✓ Kotlin for Android</li>
                <li>✓ Maximum performance</li>
                <li>✓ Platform-specific features</li>
                <li>✓ Native UI/UX</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚀</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Latest Technology & Fast Development
                </h3>
                <p className="text-slate-700 mb-4">
                  We leverage cutting-edge technologies and agile methodologies
                  to deliver high-quality solutions rapidly without compromising
                  on quality.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Modern Tech Stack:
                    </h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• TypeScript & JavaScript</li>
                      <li>• React, Next.js, Vue.js</li>
                      <li>• Node.js & Express</li>
                      <li>• MongoDB, PostgreSQL</li>
                      <li>• Docker & Kubernetes</li>
                      <li>• AWS, Vercel, Azure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Fast Development:
                    </h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Agile methodology</li>
                      <li>• Rapid prototyping</li>
                      <li>• CI/CD pipelines</li>
                      <li>• Automated testing</li>
                      <li>• Weekly sprints</li>
                      <li>• Continuous deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Time & Productivity */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">⏰</div>
            <h2 className="text-3xl font-bold text-slate-900">
              Time & Productivity Tools
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Digital Clock
              </h3>
              <p className="text-slate-600 mb-4">
                A modern, customizable digital clock perfect for presentations,
                streaming overlays, or simply keeping time. Features multiple
                time zones, formats, and display options.
              </p>
              <ul className="text-sm text-slate-700 space-y-2 mb-4">
                <li>✓ Multiple time zone support</li>
                <li>✓ Customizable colors and fonts</li>
                <li>✓ 12/24 hour formats</li>
                <li>✓ Full-screen mode</li>
              </ul>
              <a
                href="https://digitalclock.kavzorn.click"
                className="text-blue-600 hover:underline font-medium"
              >
                Try Digital Clock →
              </a>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Analog Clock
              </h3>
              <p className="text-slate-600 mb-4">
                Classic analog clock with smooth animations and customizable
                designs. Perfect for those who prefer traditional timekeeping
                with modern aesthetics.
              </p>
              <ul className="text-sm text-slate-700 space-y-2 mb-4">
                <li>✓ Smooth second-hand movement</li>
                <li>✓ Multiple clock face designs</li>
                <li>✓ Customizable colors</li>
                <li>✓ Responsive sizing</li>
              </ul>
              <a
                href="https://analog.kavzorn.click"
                className="text-blue-600 hover:underline font-medium"
              >
                Try Analog Clock →
              </a>
            </div>
          </div>
        </section>

        {/* Network & Connectivity */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🚀</div>
            <h2 className="text-3xl font-bold text-slate-900">
              Network & Connectivity
            </h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Net Speed Test
            </h3>
            <p className="text-slate-600 mb-4">
              Quickly and accurately test your internet connection speed.
              Measure download, upload speeds, and latency with detailed results
              and historical tracking.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ Download speed testing</li>
                <li>✓ Upload speed testing</li>
                <li>✓ Ping/latency measurement</li>
              </ul>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ Detailed results breakdown</li>
                <li>✓ Multiple server locations</li>
                <li>✓ Shareable results</li>
              </ul>
            </div>
            <a
              href="https://netfast.kavzorn.click"
              className="text-blue-600 hover:underline font-medium"
            >
              Test Your Speed →
            </a>
          </div>
        </section>

        {/* Image Processing */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🖼️</div>
            <h2 className="text-3xl font-bold text-slate-900">
              Image Processing
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Background Removal
              </h3>
              <p className="text-slate-600 mb-4">
                Remove backgrounds from images instantly using advanced AI.
                Perfect for product photos, profile pictures, and creative
                projects.
              </p>
              <ul className="text-sm text-slate-700 space-y-2 mb-4">
                <li>✓ AI-powered removal</li>
                <li>✓ High-quality results</li>
                <li>✓ Batch processing</li>
                <li>✓ Privacy-focused</li>
              </ul>
              <a
                href="https://bg.kavzorn.click"
                className="text-blue-600 hover:underline font-medium"
              >
                Remove Background →
              </a>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Image Resize
              </h3>
              <p className="text-slate-600 mb-4">
                Resize images to any dimension while maintaining quality.
                Perfect for web optimization, social media, and more.
              </p>
              <ul className="text-sm text-slate-700 space-y-2 mb-4">
                <li>✓ Custom dimensions</li>
                <li>✓ Maintain aspect ratio</li>
                <li>✓ Batch resize</li>
                <li>✓ Quality control</li>
              </ul>
              <a
                href="https://resize.kavzorn.click"
                className="text-blue-600 hover:underline font-medium"
              >
                Resize Images →
              </a>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Format Changer
              </h3>
              <p className="text-slate-600 mb-4">
                Convert images between different formats (PNG, JPG, WebP, etc.)
                with ease. Optimize for web or preserve quality.
              </p>
              <ul className="text-sm text-slate-700 space-y-2 mb-4">
                <li>✓ Multiple formats</li>
                <li>✓ Quality settings</li>
                <li>✓ Batch conversion</li>
                <li>✓ Size optimization</li>
              </ul>
              <a
                href="https://format.kavzorn.click"
                className="text-blue-600 hover:underline font-medium"
              >
                Convert Format →
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Why Choose Kavzorn Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                🔒
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Privacy-First Approach
              </h3>
              <p className="text-slate-600">
                All processing happens locally in your browser. Your data never
                leaves your device.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-slate-600">
                Optimized code and modern technologies ensure instant results
                every time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                🆓
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Always Free
              </h3>
              <p className="text-slate-600">
                No subscriptions, no paywalls, no limits. All services are
                completely free.
              </p>
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section>
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise Solutions</h2>
            <p className="text-slate-300 mb-6 max-w-3xl">
              Need custom tools or integrations for your business? We offer
              enterprise solutions tailored to your specific needs with
              dedicated support and SLAs.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6 text-slate-300">
              <li>✓ Custom tool development</li>
              <li>✓ API integrations</li>
              <li>✓ White-label solutions</li>
              <li>✓ Priority support</li>
              <li>✓ On-premise deployment options</li>
              <li>✓ Dedicated infrastructure</li>
            </ul>
            <a
              href="mailto:enterprise@kavzorn.click"
              className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
