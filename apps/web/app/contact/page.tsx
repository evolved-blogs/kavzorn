export const metadata = {
  title: "Contact Us • Kavzorn",
  description: "Get in touch with Kavzorn. We'd love to hear from you.",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                <a
                  href="mailto:hello@kavzorn.click"
                  className="text-blue-600 hover:underline"
                >
                  hello@kavzorn.click
                </a>
                <p className="text-sm text-slate-600 mt-1">
                  We'll respond within 24-48 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-lg p-3">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Website</h3>
                <a
                  href="https://kavzon.click"
                  className="text-blue-600 hover:underline"
                >
                  kavzon.click
                </a>
                <p className="text-sm text-slate-600 mt-1">
                  Visit our main website
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-lg p-3">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Support</h3>
                <a
                  href="mailto:support@kavzorn.click"
                  className="text-blue-600 hover:underline"
                >
                  support@kavzorn.click
                </a>
                <p className="text-sm text-slate-600 mt-1">
                  For technical support and bug reports
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 mb-2">
              Business Inquiries
            </h3>
            <p className="text-slate-600 mb-2">
              For partnership opportunities, enterprise solutions, or custom
              development:
            </p>
            <a
              href="mailto:business@kavzorn.click"
              className="text-blue-600 hover:underline font-medium"
            >
              business@kavzorn.click
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Send us a Message
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                placeholder="Tell us more about your inquiry..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>

            <p className="text-sm text-slate-500 text-center">
              By submitting this form, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              Are your tools really free?
            </h3>
            <p className="text-slate-600 text-sm">
              Yes! All our tools are completely free to use with no hidden
              costs, subscriptions, or paywalls.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              How do you handle my data?
            </h3>
            <p className="text-slate-600 text-sm">
              All processing happens locally in your browser. We don't upload,
              store, or have access to your files.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              Can I suggest a new tool?
            </h3>
            <p className="text-slate-600 text-sm">
              Absolutely! We'd love to hear your ideas. Send us an email with
              your suggestion.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              Do you offer enterprise solutions?
            </h3>
            <p className="text-slate-600 text-sm">
              Yes! Contact us at business@kavzorn.click for custom development
              and enterprise packages.
            </p>
          </div>
        </div>
      </div>

      {/* Response Time Notice */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <h3 className="font-semibold text-blue-900 mb-2">
          Quick Response Time
        </h3>
        <p className="text-blue-800">
          We typically respond to all inquiries within 24-48 hours during
          business days. For urgent matters, please mark your email subject with
          [URGENT].
        </p>
      </div>
    </div>
  );
}
