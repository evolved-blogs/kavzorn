export const metadata = {
  title: "Privacy Policy • Kavzorn",
  description: "Learn how Kavzorn protects your privacy and handles your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">
        Last updated: October 31, 2025
      </p>

      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Introduction
          </h2>
          <p className="text-slate-700 mb-4">
            At Kavzorn, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Data Processing
          </h2>
          <p className="text-slate-700 mb-4">
            <strong>Client-Side Processing:</strong> All our tools process data
            directly in your browser. This means:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Your files and data never leave your device</li>
            <li>
              We do not upload, store, or transmit your personal data to our
              servers
            </li>
            <li>
              All processing happens locally using your browser's capabilities
            </li>
            <li>You maintain complete control over your data at all times</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Information We Collect
          </h2>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Analytics Data
          </h3>
          <p className="text-slate-700 mb-4">
            We may collect anonymous usage statistics to improve our services,
            including:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Pages visited and features used</li>
            <li>Browser type and version</li>
            <li>Device information (screen size, operating system)</li>
            <li>General location data (country/region level only)</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">Cookies</h3>
          <p className="text-slate-700 mb-4">
            We use essential cookies to ensure our website functions properly.
            We do not use tracking cookies for advertising purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-slate-700 mb-4">
            The limited information we collect is used to:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Improve and optimize our services</li>
            <li>Understand how users interact with our tools</li>
            <li>Fix bugs and technical issues</li>
            <li>Ensure the security and stability of our platform</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Data Security
          </h2>
          <p className="text-slate-700 mb-4">
            We implement appropriate technical and organizational measures to
            protect the security of any information we process. However, please
            note that no method of transmission over the Internet or electronic
            storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Third-Party Services
          </h2>
          <p className="text-slate-700 mb-4">
            We may use third-party service providers to help us operate our
            services. These third parties have access to your information only
            to perform specific tasks on our behalf and are obligated not to
            disclose or use it for any other purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Your Rights
          </h2>
          <p className="text-slate-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of analytics tracking</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Children's Privacy
          </h2>
          <p className="text-slate-700 mb-4">
            Our services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-slate-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-slate-700 mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-slate-700">
            Email: privacy@kavzorn.click
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
      </div>
    </div>
  );
}
