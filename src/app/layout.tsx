import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "A cinema-inspired boutique hotel on the seafront. Forty-two rooms and suites, a rooftop pool, and a private beach — ninety metres from your pillow.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hotel-site-omega-two.vercel.app"),
  title: "Hotel Adriano — Adriatic Dolce Vita",
  description,
  keywords: [
    "Hotel Adriano",
    "Adriatic coast hotel",
  ],
  openGraph: {
    type: "website",
    siteName: "Hotel Adriano",
    title: "Hotel Adriano — Adriatic Dolce Vita",
    description,
    images: ["/images/hero-twilight-coast.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Adriano — Adriatic Dolce Vita",
    description,
    images: ["/images/hero-twilight-coast.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0b09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-full bg-paper text-ink antialiased">
        <SmoothScroll>
          <Preloader />
          <div className="grain-overlay" aria-hidden />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
