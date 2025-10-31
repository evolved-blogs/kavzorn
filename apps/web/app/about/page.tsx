export const metadata = {
  title: "About Us • Kavzorn",
  description:
    "Learn about Kavzorn and our mission to provide fast, privacy-friendly utilities.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">About Kavzorn</h1>

      <div className="prose prose-slate max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-700 mb-4">
            At Kavzorn, we believe that powerful digital tools should be
            accessible to everyone, without compromising privacy or requiring
            expensive subscriptions. Our mission is to create fast, efficient,
            and privacy-focused utilities that empower users to accomplish their
            tasks with ease.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            What We Do
          </h2>
          <p className="text-slate-700 mb-4">
            Kavzorn offers a suite of web-based tools designed to handle common
            tasks quickly and efficiently. From time-keeping utilities to image
            processing tools, each service is built with three core principles
            in mind:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <strong>Privacy First:</strong> All processing happens in your
              browser - your data never leaves your device
            </li>
            <li>
              <strong>Lightning Fast:</strong> Optimized code and modern web
              technologies ensure instant results
            </li>
            <li>
              <strong>Free Forever:</strong> No subscriptions, no paywalls, no
              hidden costs
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Our Tools
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Digital & Analog Clocks
              </h3>
              <p className="text-slate-700">
                Beautiful, customizable clocks perfect for presentations,
                streaming, or daily use.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Net Speed Test
              </h3>
              <p className="text-slate-700">
                Measure your internet connection speed with accuracy and ease.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Image Processing Tools
              </h3>
              <p className="text-slate-700">
                Remove backgrounds, resize images, and convert between formats -
                all in your browser.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Our Technology
          </h2>
          <p className="text-slate-700 mb-4">
            Built with modern web technologies including React, Next.js, and
            WebAssembly, our tools leverage the full power of your browser to
            deliver desktop-class performance without requiring any downloads or
            installations.
          </p>
          <p className="text-slate-700 mb-4">
            We use client-side processing to ensure your data stays on your
            device, providing both better privacy and faster performance
            compared to traditional server-based tools.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Privacy Commitment
          </h2>
          <p className="text-slate-700 mb-4">
            In an era where data privacy is increasingly important, we've built
            Kavzorn from the ground up with privacy as a fundamental feature,
            not an afterthought. We don't track your usage, we don't sell your
            data, and we don't require you to create an account.
          </p>
          <p className="text-slate-700 mb-4">
            Your files and data are processed entirely in your browser and never
            uploaded to our servers. What happens in your browser, stays in your
            browser.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Open Source
          </h2>
          <p className="text-slate-700 mb-4">
            We believe in transparency and community-driven development. Many of
            our tools are built using open-source technologies, and we
            contribute back to the open-source community whenever possible.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Future Plans
          </h2>
          <p className="text-slate-700 mb-4">
            We're constantly working on new tools and improvements to existing
            ones. Our roadmap includes:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Additional image processing tools</li>
            <li>Document conversion utilities</li>
            <li>Productivity tools for developers and creators</li>
            <li>Enhanced mobile support</li>
            <li>Accessibility improvements</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-slate-700 mb-4">
            We'd love to hear from you! Whether you have feedback, suggestions,
            or just want to say hello:
          </p>
          <p className="text-slate-700">
            Email: hello@kavzorn.click
            <br />
            Website:{" "}
            <a
              href="https://kavzon.click"
              className="text-blue-600 hover:underline"
            >
              kavzon.click
            </a>
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <p className="text-slate-900 font-semibold mb-2">
            Join Our Community
          </p>
          <p className="text-slate-700">
            Follow us on social media to stay updated on new tools, features,
            and updates. We appreciate every user who chooses Kavzorn for their
            daily tasks.
          </p>
        </div>
      </div>
    </div>
  );
}
