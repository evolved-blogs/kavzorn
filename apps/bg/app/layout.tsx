import './globals.css';

export const metadata = {
    title: "Background Removal • Kavzorn",
    description: "Remove backgrounds from images easily (client-first)."
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



