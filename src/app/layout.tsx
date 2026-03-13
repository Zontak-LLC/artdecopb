import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Art Deco Society of the Palm Beaches",
  description:
    "Promoting education, preservation and awareness of Twentieth Century Art, Architecture & Design in the Palm Beaches. A 501(c)3 Historic Preservation Organization since 1987.",
  keywords: [
    "Art Deco",
    "Palm Beaches",
    "historic preservation",
    "architecture",
    "Florida",
    "ADSPB",
  ],
  openGraph: {
    title: "Art Deco Society of the Palm Beaches",
    description:
      "Celebrating 39 years of Art Deco preservation in the Palm Beaches.",
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
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased bg-cream text-charcoal`}
      >
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
