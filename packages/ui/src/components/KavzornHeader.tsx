import * as React from "react";
import { Button } from "./ui/button";

interface KavzornHeaderProps {
  currentApp?:
    | "bg"
    | "format"
    | "resize"
    | "netfast"
    | "digital-clock"
    | "analog-clock"
    | "web";
  showBackToHome?: boolean;
  Link?: React.ComponentType<any>;
  Image?: React.ComponentType<any>;
  logoSrc?: string;
}

export default function KavzornHeader({
  currentApp,
  showBackToHome = true,
  Link: LinkComponent,
  Image: ImageComponent,
  logoSrc = "/logo.png",
}: KavzornHeaderProps) {
  // Fallback components if not provided
  const DefaultLink: React.FC<{
    href: string;
    className?: string;
    children: React.ReactNode;
  }> = ({ href, className, children }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );

  const DefaultImage: React.FC<{
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }> = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={className} />
  );

  const ActualLink = LinkComponent || DefaultLink;
  const ActualImage = ImageComponent || DefaultImage;

  const navigationItems = [
    {
      label: "Products",
      href: showBackToHome ? "https://kavzorn.click/products" : "/products",
    },
    {
      label: "BG Remove",
      href: "https://bg.kavzorn.click",
      isActive: currentApp === "bg",
    },
    {
      label: "Resize",
      href: "https://resize.kavzorn.click",
      isActive: currentApp === "resize",
    },
    {
      label: "Format",
      href: "https://format.kavzorn.click",
      isActive: currentApp === "format",
    },
    {
      label: "Net Speed",
      href: "https://netfast.kavzorn.click",
      isActive: currentApp === "netfast",
    },
  ];

  const homeUrl = showBackToHome ? "https://kavzorn.click" : "/";

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <ActualLink
            href={homeUrl}
            className="flex items-center gap-2 no-underline group"
          >
            <ActualImage
              src={logoSrc}
              alt="Kavzorn Logo"
              width={150}
              height={40}
              className="rounded transition-transform group-hover:scale-105"
            />
          </ActualLink>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navigationItems.map((item) => (
              <ActualLink
                key={item.label}
                href={item.href}
                className={`text-slate-700 hover:text-blue-600 hover:bg-blue-50 no-underline transition-all px-4 py-2 rounded-lg font-medium ${
                  item.isActive ? "text-blue-600 bg-blue-50" : ""
                }`}
              >
                {item.label}
              </ActualLink>
            ))}

            <Button
              asChild
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ActualLink
                href="https://kavzorn.click/contact"
                className="no-underline"
              >
                Contact
              </ActualLink>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-slate-700">
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
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
