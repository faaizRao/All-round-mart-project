import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "All Round Mart - Your One-Stop Shopping Destination",
  description: "Shop electronics, fashion, home & kitchen, beauty, sports, and kids toys at All Round Mart. Quality products with fast delivery across Germany.",
  keywords: "ecommerce, shopping, electronics, fashion, home, kitchen, beauty, sports, toys, Germany",
  authors: [{ name: "Seema Rehman" }],
  openGraph: {
    title: "All Round Mart - Your One-Stop Shopping Destination",
    description: "Shop electronics, fashion, home & kitchen, beauty, sports, and kids toys at All Round Mart.",
    url: "https://allroundmart.com",
    siteName: "All Round Mart",
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
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}