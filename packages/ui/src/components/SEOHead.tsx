import React from "react";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  type?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: object;
}

// Predefined SEO configurations for each app
export const seoConfigs = {
  landing: {
    title: "Free Online Tools & Utilities | Kavzorn Tools",
    description:
      "Access Kavzorn's free online tools – digital clock, analog clock, speed test, background remover, image resizer, and more. No signup required, 100% free.",
    keywords:
      "free online tools, utilities, digital clock, analog clock, speed test, background remover, image resizer, format converter",
    url: "https://kavzorn.click",
    structuredData: {
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
    },
  },

  digitalClock: {
    title: "Online Digital Clock – Free Time Utility | Kavzorn Tools",
    description:
      "Use Kavzorn's free online digital clock to display the current time on your browser. Customizable formats, no ads, and works on all devices.",
    keywords:
      "online digital clock, digital clock, current time, free clock, browser clock",
    url: "https://digitalclock.kavzorn.click",
    structuredData: {
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
    },
  },

  analogClock: {
    title: "Free Online Analog Clock – Live Time Display | Kavzorn",
    description:
      "View the current time on Kavzorn's free online analog clock. Enjoy a classic clock face with live updates – no installation or signup needed.",
    keywords:
      "online analog clock, analog clock, classic clock, live time, clock face",
    url: "https://analog.kavzorn.click",
    structuredData: {
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
    },
  },

  netfast: {
    title: "Internet Speed Test Online – NetFast | Kavzorn Tools",
    description:
      "Check your network performance with NetFast, Kavzorn's free internet speed test online. Get instant upload/download speeds and latency metrics without downloading software.",
    keywords:
      "internet speed test online, speed test, network speed, bandwidth test, ping test",
    url: "https://netfast.kavzorn.click",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "NetFast Internet Speed Test",
      description:
        "Free online tool to measure your internet download/upload speed and latency.",
      applicationCategory: "Utilities",
      url: "https://netfast.kavzorn.click",
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
      },
    },
  },

  backgroundRemover: {
    title:
      "Background Remover Online – Free Photo Background Remover | Kavzorn",
    description:
      "Remove photo backgrounds instantly with Kavzorn's free online background remover. No software needed—just upload your image and get a transparent PNG.",
    keywords:
      "background remover online, remove background, photo background remover, transparent background",
    url: "https://bg.kavzorn.click",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Kavzorn Background Remover",
      description:
        "Free online tool to automatically remove backgrounds from photos and create transparent images.",
      applicationCategory: "ImageProcessing",
      url: "https://bg.kavzorn.click",
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
      },
    },
  },

  imageResizer: {
    title: "Image Resizer Online – Free Photo Resize Tool | Kavzorn",
    description:
      "Resize and scale images quickly with Kavzorn's free online image resizer. Upload a photo, set new dimensions or percentage, and download the resized image instantly.",
    keywords:
      "image resizer online, resize image, photo resizer, scale image, image dimensions",
    url: "https://resize.kavzorn.click",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Kavzorn Image Resizer",
      description:
        "Free online tool to resize images by specifying new dimensions or percentage.",
      applicationCategory: "ImageProcessing",
      url: "https://resize.kavzorn.click",
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
      },
    },
  },

  formatConverter: {
    title: "Online Image Format Converter – Convert JPG, PNG & More | Kavzorn",
    description:
      "Convert image file formats for free on Kavzorn. Easily change JPG to PNG, PNG to JPG, or other formats using our online image format converter – no software required.",
    keywords:
      "image format converter online, convert jpg to png, convert png to jpg, image converter",
    url: "https://format.kavzorn.click",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Kavzorn Image Format Converter",
      description:
        "Free online tool to convert images between formats (JPG, PNG, GIF, BMP, etc.).",
      applicationCategory: "ImageProcessing",
      url: "https://format.kavzorn.click",
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
      },
    },
  },
};

// Type export for use in Next.js apps
export type { SEOConfig };

// Utility function to get metadata for Next.js apps
export const SEOHead = {
  getMetadata: (appKey: keyof typeof seoConfigs) => {
    const config = seoConfigs[appKey];

    return {
      title: config.title,
      description: config.description,
      keywords: config.keywords,
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
        url: config.url,
        title: config.title,
        description: config.description,
        siteName: "Kavzorn Tools",
      },
      twitter: {
        card: "summary_large_image",
        title: config.title,
        description: config.description,
      },
      other: {
        "application-ld+json": JSON.stringify(config.structuredData),
      },
    };
  },
};
