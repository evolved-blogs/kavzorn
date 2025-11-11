import "./globals.css";

export const metadata = {
  title: "Online Digital Clock – Free Time Utility | Kavzorn Tools",
  description:
    "Use Kavzorn's free online digital clock to display the current time on your browser. Customizable formats, no ads, and works on all devices.",
  keywords:
    "online digital clock, digital clock, current time, free clock, browser clock",
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
    url: "https://digitalclock.kavzorn.click",
    title: "Online Digital Clock – Free Time Utility | Kavzorn Tools",
    description:
      "Use Kavzorn's free online digital clock to display the current time on your browser. Customizable formats, no ads, and works on all devices.",
    siteName: "Kavzorn Tools",
    images: [
      {
        url: "https://digitalclock.kavzorn.click/logo.png",
        width: 1200,
        height: 630,
        alt: "Kavzorn Online Digital Clock screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kavzorn",
    creator: "@kavzorn",
    title: "Online Digital Clock – Free Time Utility | Kavzorn Tools",
    description:
      "Use Kavzorn's free online digital clock to display the current time on your browser. Customizable formats, no ads, and works on all devices.",
    images: ["https://digitalclock.kavzorn.click/logo.png"],
  },
  alternates: {
    canonical: "https://digitalclock.kavzorn.click",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const digitalClockSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kavzorn Online Digital Clock",
    description:
      "A free online digital clock showing the current time, customizable 12/24-hour format.",
    operatingSystem: "Web",
    applicationCategory: "ClockApplication",
    url: "https://digitalclock.kavzorn.click",
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(digitalClockSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
