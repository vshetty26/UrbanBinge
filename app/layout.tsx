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
  metadataBase: new URL('https://urbanbinge.vercel.app'),
  title: "Urban Binge | Pure Veg Indian & Asian Cuisine | Mumbai",
  description: "Urban Binge - Pure vegetarian restaurant in Mumbai serving authentic South Indian, Indian, and Asian cuisine. Free home delivery available.",
  openGraph: {
    title: "Urban Binge | Pure Veg Indian & Asian Cuisine",
    description: "Experience authentic South Indian, Indian, and Asian vegetarian cuisine at Urban Binge, Mumbai. Premium quality ingredients, free home delivery.",
    url: 'https://urbanbinge.vercel.app',
    siteName: 'Urban Binge',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Urban Binge | Pure Veg Indian & Asian Cuisine",
    description: "Authentic vegetarian cuisine in Mumbai. South Indian, Indian & Asian specialties.",
  },
};

import { CartProvider } from "@/context/CartContext";
import Toast from "@/components/ui/Toast";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-accent`}
      >
        <CartProvider>
          {children}
          <WhatsAppFloat />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
