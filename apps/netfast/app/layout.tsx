import './globals.css';

export const metadata = {
    title: "Net Speed Test • Kavzorn",
    description: "Simple network speed test in the browser."
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



