import AppHeader from "../components/AppHeader";
import ImageFormatChanger from "../components/ImageFormatChanger";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AppHeader />

      <main className="flex-1 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Image Format Converter Online
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Convert image file formats for free on Kavzorn. Easily change JPG
              to PNG, PNG to JPG, or other formats using our online image format
              converter – no software required. All processing happens securely
              in your browser.
            </p>
          </div>

          <ImageFormatChanger />

          {/* SEO Content Section */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Convert Any Image Format Instantly
            </h2>
            <p className="text-slate-600 mb-6">
              Our image format converter online supports all popular formats
              including JPG, PNG, GIF, BMP, and WebP. Convert JPG to PNG for
              transparent backgrounds, change PNG to JPG to reduce file size, or
              switch to WebP for modern web optimization. The conversion process
              is instant and maintains image quality.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Why Use Our Online Image Converter
            </h2>
            <p className="text-slate-600 mb-6">
              Unlike desktop software, our image format converter works directly
              in your browser without downloads or installations. Convert single
              images or batch process multiple files quickly. Whether you need
              to convert images for web use, print, or compatibility with
              specific applications, our tool handles all common conversion
              needs efficiently.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Secure and Private Conversion
            </h2>
            <p className="text-slate-600">
              Your images stay completely private during conversion. All image
              processing happens locally in your browser – no files are uploaded
              to servers. This ensures maximum security and privacy while
              delivering fast conversion results. The converted images download
              immediately in your chosen format, ready for use in your projects.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
