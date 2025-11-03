import "./globals.css";

export const metadata = {
  title: "Net Speed Test • Kavzorn",
  description:
    "Test your internet connection speed quickly and accurately. Simple, fast, privacy-focused network speed test.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://netfast.kavzorn.click",
    title: "Net Speed Test • Kavzorn",
    description:
      "Test your internet connection speed quickly and accurately. Simple, fast, privacy-focused network speed test.",
    siteName: "Kavzorn Speed Test",
  },
  twitter: {
    card: "summary_large_image",
    title: "Net Speed Test • Kavzorn",
    description:
      "Test your internet connection speed. Simple, fast, privacy-focused.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
