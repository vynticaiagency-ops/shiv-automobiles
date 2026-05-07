import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/shared/FloatingButtons";
import { businessInfo } from "@/data/business";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Shiv Automobiles | Authorized Swaraj Tractor Dealer in Junagadh",
    template: "%s | Shiv Automobiles Junagadh",
  },
  description: "Authorized Swaraj Tractor Dealer in Junagadh. Founded 2025. 100+ tractors sold. Best price, easy finance, genuine service. Serving Junagadh, Mendarda, Visavadar & Bhesan.",
  keywords: ["Swaraj tractor dealer Junagadh", "Swaraj tractors Junagadh", "tractor dealer Junagadh", "buy tractor Junagadh", "Shiv Automobiles"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shivautomobiles.in",
    siteName: "Shiv Automobiles",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shiv Automobiles - Authorized Swaraj Dealer",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
