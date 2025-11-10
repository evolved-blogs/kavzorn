import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://analogclock.kavzorn.click"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Analog Clock - Kavzorn",
    template: "%s | Kavzorn Analog Clock",
  },
  description:
    "Beautiful analog clock in your browser. Classic design with smooth animations. Perfect for time display.",
  manifest: "/manifest.json",
  keywords: [
    "analog clock",
    "clock",
    "time",
    "watch",
    "classic clock",
    "browser clock",
  ],
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
    url: "https://analogclock.kavzorn.click",
    siteName: "Kavzorn Analog Clock",
    title: "Analog Clock • Kavzorn",
    description:
      "Smooth analog clock with hour, minute and second hands. Minimal, offline-first, privacy-focused analog clock application.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analog Clock • Kavzorn",
    description:
      "Smooth analog clock with hour, minute and second hands. Minimal, offline-first, privacy-focused.",
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
