import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandundilini.vercel.app"),

  title: "Sandun & Dilini",

  description:
    "Welcome to our Home coming • Find your table number",

  openGraph: {
    title: "Sandun & Dilini",
    description:
      "Find your table number",
    url: "https://sandundilini.vercel.app",
    siteName: "Sandun & Dilini",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sandun & Dilini Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sandun & Dilini",
    description:
      "Welcome to our Home coming • Find your table number",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}