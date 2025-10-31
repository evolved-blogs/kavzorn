import "./globals.css";
import "@kavzorn/ui/src/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Kavzorn • Fast, Privacy-Friendly Utilities",
  description:
    "Kavzorn enterprise tools: clocks, net speed test, background removal, image utilities and more. All free, all privacy-focused.",
  manifest: "/manifest.json",
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
    title: "Kavzorn • Fast, Privacy-Friendly Utilities",
    description:
      "A suite of fast, privacy-friendly utilities including clocks, image tools, and network testing.",
    siteName: "Kavzorn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavzorn • Fast, Privacy-Friendly Utilities",
    description:
      "A suite of fast, privacy-friendly utilities including clocks, image tools, and network testing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-slate-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
