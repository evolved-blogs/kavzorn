import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Kavzorn Logo"
                width={120}
                height={32}
                className="rounded"
              />
            </div>
            <p className="text-sm text-slate-400">
              Fast, privacy-friendly utilities for everyone.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://digitalclock.kavzorn.click"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Digital Clock
                </a>
              </li>
              <li>
                <a
                  href="https://analog.kavzorn.click"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Analog Clock
                </a>
              </li>
              <li>
                <a
                  href="https://netfast.kavzorn.click"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Net Speed Test
                </a>
              </li>
              <li>
                <a
                  href="https://bg.kavzorn.click"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Background Removal
                </a>
              </li>
              <li>
                <a
                  href="https://resize.kavzorn.click"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Image Resize
                </a>
              </li>
              <li>
                <a
                  href="https://format.kavzorn.click"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Format Changer
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-slate-400 hover:text-white no-underline transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} Kavzorn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://kavzon.click"
              className="text-slate-400 hover:text-white text-sm no-underline transition-colors"
            >
              kavzon.click
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
