import './globals.css';

export const metadata = {
    title: "Image Resize • Kavzorn",
    description: "Resize and compress images in your browser."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}



