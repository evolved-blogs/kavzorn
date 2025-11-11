import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://analog.kavzorn.click"),
  alternates: {
    canonical: "/",
  },
  title: "Free Online Analog Clock – Live Time Display | Kavzorn",
  description:
    "View the current time on Kavzorn's free online analog clock. Enjoy a classic clock face with live updates – no installation or signup needed.",
  manifest: "/manifest.json",
  keywords:
    "online analog clock, analog clock, classic clock, live time, clock face",
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
    url: "https://analog.kavzorn.click",
    siteName: "Kavzorn Tools",
    title: "Free Online Analog Clock – Live Time Display | Kavzorn",
    description:
      "View the current time on Kavzorn's free online analog clock. Enjoy a classic clock face with live updates – no installation or signup needed.",
    images: [
      {
        url: "https://analog.kavzorn.click/logo.png",
        width: 1200,
        height: 630,
        alt: "Kavzorn Online Analog Clock with classic clock face",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kavzorn",
    creator: "@kavzorn",
    title: "Free Online Analog Clock – Live Time Display | Kavzorn",
    description:
      "View the current time on Kavzorn's free online analog clock. Enjoy a classic clock face with live updates – no installation or signup needed.",
    images: ["https://analog.kavzorn.click/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const analogClockSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kavzorn Online Analog Clock",
    description:
      "A free online analog clock with a classic clock face displaying current time.",
    applicationCategory: "ClockApplication",
    url: "https://analog.kavzorn.click",
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
            __html: JSON.stringify(analogClockSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
