import "./globals.css";

export const metadata = {
  title: "Background Removal • Kavzorn",
  description:
    "Remove backgrounds from images easily and quickly. Privacy-focused, client-side image processing tool.",
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
    url: "https://bg.kavzorn.click",
    title: "Background Removal • Kavzorn",
    description:
      "Remove backgrounds from images easily and quickly. Privacy-focused, client-side image processing tool.",
    siteName: "Kavzorn Background Remover",
  },
  twitter: {
    card: "summary_large_image",
    title: "Background Removal • Kavzorn",
    description:
      "Remove backgrounds from images easily and quickly. Privacy-focused, client-side tool.",
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
