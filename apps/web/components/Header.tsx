import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <Image
              src="/logo.png"
              alt="Kavzorn Logo"
              width={150}
              height={40}
              className="rounded"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-slate-700 hover:text-slate-900 no-underline transition-colors"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-slate-700 hover:text-slate-900 no-underline transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-slate-900 no-underline transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
