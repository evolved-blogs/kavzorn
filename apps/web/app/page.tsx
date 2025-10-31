import { Button } from "@kavzorn/ui";
import Link from "next/link";

const tools = [
  {
    name: "Digital Clock",
    href: "https://digitalclock.kavzorn.click",
    description: "Modern digital clock with customizable display",
    icon: "🕐",
  },
  {
    name: "Analog Clock",
    href: "https://analog.kavzorn.click",
    description: "Classic analog clock with smooth animations",
    icon: "⏰",
  },
  {
    name: "Net Speed Test",
    href: "https://netfast.kavzorn.click",
    description: "Test your internet connection speed",
    icon: "🚀",
  },
  {
    name: "Background Removal",
    href: "https://bg.kavzorn.click",
    description: "Remove backgrounds from images instantly",
    icon: "🖼️",
  },
  {
    name: "Image Resize",
    href: "https://resize.kavzorn.click",
    description: "Resize images to any dimension",
    icon: "📐",
  },
  {
    name: "Format Changer",
    href: "https://format.kavzorn.click",
    description: "Convert images between different formats",
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
            Welcome to Kavzorn
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto">
            A suite of fast, privacy-friendly utilities designed to make your
            life easier. All tools run locally in your browser - no data leaves
            your device.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#tools">
              <Button size="lg">Explore Tools</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section id="tools" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Tools
            </h2>
            <p className="text-xl text-slate-600">
              Choose from our collection of powerful utilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="bg-white border border-slate-200 rounded-xl p-6 no-underline hover:shadow-lg hover:border-blue-300 transition-all group"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Pick a tool and start using it right away. No sign-up required.
          </p>
          <Link href="#tools">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Browse All Tools
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
