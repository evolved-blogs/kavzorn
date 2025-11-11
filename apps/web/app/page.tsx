import { Button } from "@kavzorn/ui";
import Link from "next/link";

const tools = [
  {
    name: "Online Digital Clock",
    href: "https://digitalclock.kavzorn.click",
    description:
      "Free online digital clock showing current time with customizable 12/24-hour format",
    icon: "🕐",
  },
  {
    name: "Online Analog Clock",
    description:
      "Free analog clock with classic clock face design and live time updates",
    icon: "🕐",
    href: "https://analogclock.kavzorn.click",
  },
  {
    name: "Internet Speed Test Online",
    href: "https://netfast.kavzorn.click",
    description:
      "NetFast speed test - measure your internet download/upload speed and latency",
    icon: "🚀",
  },
  {
    name: "Background Remover Online",
    href: "https://bg.kavzorn.click",
    description:
      "Remove photo backgrounds instantly with our free online background remover tool",
    icon: "🖼️",
  },
  {
    name: "Image Resizer Online",
    href: "https://resize.kavzorn.click",
    description:
      "Free online image resizer to resize photos and images to any dimensions",
    icon: "📐",
  },
  {
    name: "Image Format Converter Online",
    href: "https://format.kavzorn.click",
    description:
      "Convert images between JPG, PNG, GIF, and other formats online for free",
    icon: "🔄",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Free Online Tools
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Access Kavzorn's free online tools – digital clock, analog clock,
            speed test, background remover, image resizer, and more. No signup
            required, 100% free.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#tools">
              <Button size="lg">Explore Tools</Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Kavzorn offers a suite of free online tools that make everyday
              tasks quick and easy. Whether you need to check the time, test
              your Internet speed, or edit images, Kavzorn has you covered. Our
              collection includes a digital clock and analog clock for accurate
              timekeeping, an Internet speed test to check your connection
              quality, a background remover for photos, an image resizer for
              resizing pictures, and an image format converter to change file
              types.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              All tools are 100% free and require no downloads or installations
              – just visit the site and start using them. Each tool is designed
              with simplicity in mind. For example, our online digital clock
              shows the current time at a glance, while the online analog clock
              offers a classic clock face you can customize.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With Kavzorn's free tools, you can accomplish these tasks on any
              device – desktop or mobile – without installing software. We
              continually update and improve our tools based on user feedback.
              Try out our free online tools today and see how easy it is to get
              results in just a few clicks.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Use Kavzorn Free Tools
            </h2>
            <p className="text-xl text-slate-600">
              Our free online utilities are designed with your needs in mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-slate-600">
                All processing happens in your browser. Your data never leaves
                your device.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-slate-600">
                Optimized for speed and performance. Get results instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="text-xl font-semibold mb-2">Free Forever</h3>
              <p className="text-slate-600">
                All our tools are completely free to use. No subscriptions, no
                hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Top Free Online Tools
            </h2>
            <p className="text-xl text-slate-600">
              Choose from our collection of powerful free online utilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="bg-white border border-slate-200 rounded-xl p-6 no-underline hover:shadow-lg hover:border-blue-300 transition-all group"
                aria-label={`Access ${tool.name} - ${tool.description}`}
              >
                <div className="text-4xl mb-3" aria-label={`${tool.name} icon`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  {tool.description}
                </p>
                <span className="text-blue-600 text-xs font-medium">
                  {tool.href.replace("https://", "")} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How to Use Our Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Choose a Tool</h3>
              <p className="text-slate-600">
                Select from our collection of free online tools
              </p>
            </div>
            <div>
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Start Using</h3>
              <p className="text-slate-600">
                No downloads or installations required
              </p>
            </div>
            <div>
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Get Results</h3>
              <p className="text-slate-600">Instant results, completely free</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Using Free Online Tools Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Pick any tool and start using it right away. No sign-up required,
            100% free forever.
          </p>
          <Link href="#tools">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Browse All Free Tools
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
