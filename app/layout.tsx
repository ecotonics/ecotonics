import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Ecotonics",
    description: "Ecotonics Automation Solutions",
    icons: {
        icon: "/logo-white.png",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${sora.variable} ${spaceGrotesk.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}