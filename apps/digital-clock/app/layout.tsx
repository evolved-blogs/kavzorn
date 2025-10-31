import './globals.css';

export const metadata = {
    title: "Digital Clock • Kavzorn",
    description: "Large, high-contrast digital clock. Minimal, offline-first."
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



