import Link from "next/link";
import Image from "next/image";

interface ClockHeaderProps {
  currentApp: "digital" | "analog";
}

export default function ClockHeader({ currentApp }: ClockHeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="https://kavzorn.click"
            className="flex items-center gap-2 no-underline group"
          >
            <Image
              src="/logo.png"
              alt="Kavzorn Logo"
              width={150}
              height={40}
              className="rounded transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="https://kavzorn.click/products"
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 no-underline transition-all px-4 py-2 rounded-lg font-medium"
            >
              Products
            </Link>
            <Link
              href="https://digitalclock.kavzorn.click"
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 no-underline transition-all px-4 py-2 rounded-lg font-medium"
            >
              Digital Clock
            </Link>
            <Link
              href="https://analogclock.kavzorn.click"
              className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 no-underline transition-all px-4 py-2 rounded-lg font-medium"
            >
              Analog Clock
            </Link>
            <Link
              href="https://kavzorn.click/contact"
              className="text-white bg-blue-600 hover:bg-blue-700 no-underline transition-all px-5 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md ml-2"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
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
