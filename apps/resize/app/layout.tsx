import "./globals.css";
import { SEOHead } from "@kavzorn/ui";

export const metadata = SEOHead.getMetadata("imageResizer");

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
