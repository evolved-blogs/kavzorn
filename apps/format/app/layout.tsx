import "./globals.css";

export const metadata = {
  title: "Format Changer • Kavzorn",
  description:
    "Convert image formats (PNG, JPG, WebP, etc.) quickly in your browser. Privacy-focused, client-side image conversion tool.",
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
    url: "https://format.kavzorn.click",
    title: "Format Changer • Kavzorn",
    description:
      "Convert image formats (PNG, JPG, WebP, etc.) quickly in your browser. Privacy-focused, client-side image conversion tool.",
    siteName: "Kavzorn Format Changer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Format Changer • Kavzorn",
    description:
      "Convert image formats quickly in your browser. Privacy-focused, client-side tool.",
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
