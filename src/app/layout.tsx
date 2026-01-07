import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const neueMontrealBold = localFont({
  src: "../../public/fonts/NeueMontreal/PPNeueMontreal-Bold.otf",
  weight: "700",
  variable: "--font-neue-montreal-bold",
});

const neueMontrealMedium = localFont({
  src: "../../public/fonts/NeueMontreal/PPNeueMontreal-Medium.otf",
  weight: "500",
  variable: "--font-neue-montreal-medium",
});

const neueMontrealBook = localFont({
  src: "../../public/fonts/NeueMontreal/PPNeueMontreal-Book.otf",
  weight: "400",
  variable: "--font-neue-montreal-book",
});

const neueMontrealThin = localFont({
  src: "../../public/fonts/NeueMontreal/PPNeueMontreal-Thin.otf",
  weight: "100",
  variable: "--font-neue-montreal-thin",
});

// Metadata font - using system monospace (Metadata font file not found, will use CSS fallback)

export const metadata: Metadata = {
  title: "Studio Signal - Research-Led Design Studio",
  description: "An intervention at the intersection of biological life and digital cyberspace, investigating the Human-Tech Enigma",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontrealBold.variable} ${neueMontrealMedium.variable} ${neueMontrealBook.variable} ${neueMontrealThin.variable} ${GeistMono.variable} font-sans antialiased bg-foundation text-inky`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
