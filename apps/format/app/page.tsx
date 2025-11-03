import AppHeader from "../components/AppHeader";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AppHeader currentApp="format" />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 sm:p-12 text-center">
            <div className="text-6xl mb-6">🔄</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Format Changer
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Convert images between different formats (PNG, JPG, WebP, AVIF)
              with ease. Optimize for web or preserve quality - all in your
              browser.
            </p>
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg px-6 py-3">
              <p className="text-blue-800 font-medium">🚧 Coming Soon</p>
              <p className="text-sm text-blue-600 mt-1">
                We're working hard to bring you this feature!
              </p>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
              <div className="text-2xl mb-2">📁</div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Multiple Formats
              </h3>
              <p className="text-sm text-slate-600">
                PNG, JPG, WebP, AVIF & more
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Quality Control
              </h3>
              <p className="text-sm text-slate-600">
                Adjust compression settings
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200 text-center">
              <div className="text-2xl mb-2">📦</div>
              <h3 className="font-semibold text-slate-900 mb-1">
                Batch Convert
              </h3>
              <p className="text-sm text-slate-600">Process multiple images</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
