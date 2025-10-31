export const metadata = {
  title: "Our Products • Kavzorn",
  description: "Browse all Kavzorn products and tools.",
};

const products = [
  {
    name: "Digital Clock",
    href: "https://digitalclock.kavzorn.click",
    description: "Modern digital clock with customizable display options",
    category: "Time & Productivity",
    icon: "🕐",
    features: ["Multiple time zones", "Custom formats", "Full-screen mode"],
  },
  {
    name: "Analog Clock",
    href: "https://analog.kavzorn.click",
    description: "Classic analog clock with smooth animations",
    category: "Time & Productivity",
    icon: "⏰",
    features: ["Smooth animations", "Custom designs", "Responsive sizing"],
  },
  {
    name: "Net Speed Test",
    href: "https://netfast.kavzorn.click",
    description: "Test your internet connection speed accurately",
    category: "Network Tools",
    icon: "🚀",
    features: ["Download/Upload speed", "Ping measurement", "Multiple servers"],
  },
  {
    name: "Background Removal",
    href: "https://bg.kavzorn.click",
    description: "Remove backgrounds from images using AI",
    category: "Image Processing",
    icon: "🖼️",
    features: ["AI-powered", "High quality", "Batch processing"],
  },
  {
    name: "Image Resize",
    href: "https://resize.kavzorn.click",
    description: "Resize images to any dimension",
    category: "Image Processing",
    icon: "📐",
    features: ["Custom dimensions", "Aspect ratio", "Batch resize"],
  },
  {
    name: "Format Changer",
    href: "https://format.kavzorn.click",
    description: "Convert images between different formats",
    category: "Image Processing",
    icon: "🔄",
    features: ["Multiple formats", "Quality control", "Web optimization"],
  },
];

const categories = [...new Set(products.map((p) => p.category))];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Explore our complete suite of free, privacy-focused tools designed to
          enhance your productivity
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {products.length}
          </div>
          <div className="text-slate-700">Available Tools</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
          <div className="text-slate-700">Free Forever</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
          <div className="text-slate-700">Data Collected</div>
        </div>
      </div>

      {/* Products by Category */}
      {categories.map((category) => (
        <section key={category} className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <a
                  key={product.href}
                  href={product.href}
                  className="group bg-white border border-slate-200 rounded-xl p-6 no-underline hover:shadow-xl hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{product.icon}</div>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="text-xs text-slate-500 flex items-center gap-2"
                      >
                        <span className="text-green-500">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-blue-600 text-sm font-medium group-hover:underline">
                      Try it now →
                    </span>
                    <span className="text-xs text-slate-400">
                      {product.href.replace("https://", "")}
                    </span>
                  </div>
                </a>
              ))}
          </div>
        </section>
      ))}

      {/* Coming Soon */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          More Tools Coming Soon
        </h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          We're constantly developing new tools to help you work smarter. Stay
          tuned for updates!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white rounded-lg px-4 py-2 text-sm text-slate-700">
            📄 PDF Tools
          </div>
          <div className="bg-white rounded-lg px-4 py-2 text-sm text-slate-700">
            🎨 Color Picker
          </div>
          <div className="bg-white rounded-lg px-4 py-2 text-sm text-slate-700">
            📊 Data Converters
          </div>
          <div className="bg-white rounded-lg px-4 py-2 text-sm text-slate-700">
            🔐 Password Generator
          </div>
          <div className="bg-white rounded-lg px-4 py-2 text-sm text-slate-700">
            📝 Text Tools
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Why Choose Kavzorn Products?
        </h2>
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4 text-slate-900 font-semibold">
                  Feature
                </th>
                <th className="text-center p-4 text-slate-900 font-semibold">
                  Kavzorn
                </th>
                <th className="text-center p-4 text-slate-500 font-semibold">
                  Others
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-4 text-slate-700">Privacy-First Processing</td>
                <td className="p-4 text-center text-green-600 font-bold">✓</td>
                <td className="p-4 text-center text-slate-400">✗</td>
              </tr>
              <tr>
                <td className="p-4 text-slate-700">Completely Free</td>
                <td className="p-4 text-center text-green-600 font-bold">✓</td>
                <td className="p-4 text-center text-yellow-600">Limited</td>
              </tr>
              <tr>
                <td className="p-4 text-slate-700">No Account Required</td>
                <td className="p-4 text-center text-green-600 font-bold">✓</td>
                <td className="p-4 text-center text-slate-400">✗</td>
              </tr>
              <tr>
                <td className="p-4 text-slate-700">No Ads</td>
                <td className="p-4 text-center text-green-600 font-bold">✓</td>
                <td className="p-4 text-center text-slate-400">✗</td>
              </tr>
              <tr>
                <td className="p-4 text-slate-700">Fast Performance</td>
                <td className="p-4 text-center text-green-600 font-bold">✓</td>
                <td className="p-4 text-center text-yellow-600">Varies</td>
              </tr>
              <tr>
                <td className="p-4 text-slate-700">Open Source Friendly</td>
                <td className="p-4 text-center text-green-600 font-bold">✓</td>
                <td className="p-4 text-center text-slate-400">✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
