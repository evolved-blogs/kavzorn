import AppHeader from "../components/AppHeader";
import ImageResize from "../components/ImageResize";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AppHeader />

      <main className="flex-1 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Image Resizer Online
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Resize and scale images quickly with Kavzorn's free online image
              resizer. Upload a photo, set new dimensions or percentage, and
              download the resized image instantly. Perfect for web
              optimization, social media, and professional use. All processing
              happens locally in your browser.
            </p>
          </div>

          <ImageResize />

          {/* SEO Content Section */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              How to Use Our Online Image Resizer
            </h2>
            <p className="text-slate-600 mb-6">
              Our image resizer online tool makes it easy to change image
              dimensions. Simply upload your photo, enter the desired width and
              height in pixels or choose a percentage to scale, then download
              your resized image. The tool maintains image quality while
              optimizing file size for faster loading.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-slate-600 mb-6">
              Whether you need to resize image files for social media posts,
              website optimization, or email attachments, our photo resizer
              handles it all. Resize images for Instagram (1080x1080), Facebook
              covers (820x312), website thumbnails, or any custom dimensions.
              The resized images download instantly in the same format as your
              original.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Privacy-Focused Image Processing
            </h2>
            <p className="text-slate-600">
              Unlike other online image resizers, all processing happens
              directly in your browser. Your photos never leave your device,
              ensuring complete privacy and security. Our image resizer online
              works with JPG, PNG, GIF, and other common formats, delivering
              professional results without compromising your data privacy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
