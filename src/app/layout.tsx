
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PinkCart - Modern Shopping Experience",
  description: "Discover handpicked products with the best quality and value. Shop trending items across diverse categories with a seamless, modern shopping experience.",
  keywords: "ecommerce, shopping, online store, modern retail, quality products",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "PinkCart - Modern Shopping Experience",
    description: "Discover handpicked products with the best quality and value",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
