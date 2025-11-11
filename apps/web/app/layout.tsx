import "./globals.css";
import "@kavzorn/ui/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Free Online Tools & Utilities | Kavzorn Tools",
  description:
    "Access Kavzorn's free online tools – digital clock, analog clock, speed test, background remover, image resizer, and more. No signup required, 100% free.",
  keywords:
    "free online tools, utilities, digital clock, analog clock, speed test, background remover, image resizer, format converter",
  manifest: "/manifest.json",
  authors: [{ name: "Kavzorn Tools" }],
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavzorn.click",
    title: "Free Online Tools & Utilities | Kavzorn Tools",
    description:
      "Access Kavzorn's free online tools – digital clock, analog clock, speed test, background remover, image resizer, and more. No signup required, 100% free.",
    siteName: "Kavzorn Tools",
    images: [
      {
        url: "https://kavzorn.click/logo.png",
        width: 1200,
        height: 630,
        alt: "Kavzorn Free Online Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kavzorn",
    creator: "@kavzorn",
    title: "Free Online Tools & Utilities | Kavzorn Tools",
    description:
      "Access Kavzorn's free online tools – digital clock, analog clock, speed test, background remover, image resizer, and more. No signup required, 100% free.",
    images: ["https://kavzorn.click/logo.png"],
  },
  alternates: {
    canonical: "https://kavzorn.click",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "WebSite"],
    name: "Kavzorn Tools",
    description:
      "Suite of free online utilities including clock, speed test, and image editors.",
    url: "https://kavzorn.click",
    logo: "https://kavzorn.click/logo.png",
    sameAs: ["https://twitter.com/kavzorn"],
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://kavzorn.click/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
