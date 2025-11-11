import AppHeader from "../components/AppHeader";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AppHeader />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 sm:p-12 text-center">
            <div className="text-6xl mb-6">🖼️</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Background Remover Online
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Remove photo backgrounds instantly with Kavzorn's free online
              background remover. No software needed—just upload your image and
              get a transparent PNG. All processing happens locally in your
              browser for complete privacy.
            </p>
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg px-6 py-3">
              <p className="text-blue-800 font-medium">🚧 Coming Soon</p>
              <p className="text-sm text-blue-600 mt-1">
                We're working hard to bring you this feature!
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              How Our Background Remover Works
            </h2>
            <p className="text-slate-600 mb-4">
              Our online background remover uses advanced AI technology to
              automatically detect and remove backgrounds from your photos.
              Simply upload any image – portrait, product photo, or object – and
              our tool will instantly create a transparent background version
              ready for download.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-6">
              Why Choose Kavzorn Background Remover
            </h2>
            <p className="text-slate-600 mb-4">
              Unlike other online background removers, all image processing
              happens directly in your browser. This means your photos never
              leave your device, ensuring complete privacy and security. Our
              background remover online tool supports JPG, PNG, and other common
              image formats, delivering high-quality results in seconds.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 mt-6">
              Perfect for Professional Use
            </h2>
            <p className="text-slate-600">
              Whether you're creating product listings, professional headshots,
              or design projects, our photo background remover delivers
              studio-quality results. The transparent background images work
              perfectly for e-commerce, presentations, and social media
              graphics.
            </p>
          </div>

          {/* Feature Preview */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Privacy First
              </h3>
              <p className="text-sm text-slate-600">
                All processing in your browser
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-slate-900 mb-1">AI Powered</h3>
              <p className="text-sm text-slate-600">Advanced ML algorithms</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
              <div className="text-2xl mb-2">🆓</div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Completely Free
              </h3>
              <p className="text-sm text-slate-600">No limits, no watermarks</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
