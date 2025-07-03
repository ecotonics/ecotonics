import type { Metadata } from "next";
import {Playfair_Display} from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecotonics",
  description: "Ecotonic Automation Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body
        className={`${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
