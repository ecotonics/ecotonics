import type { Metadata } from "next";
import { Ubuntu, Playwrite_AR } from "next/font/google";
import "./globals.css";

// Ubuntu font
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

// Playwrite font
const playwrite = Playwrite_AR({
  // subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-playwrite",
});

export const metadata: Metadata = {
  title: "ecotonics",
  description: "Ecotonic Automation Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body
        className={`${ubuntu.className} ${playwrite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
