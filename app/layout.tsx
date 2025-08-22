import type { Metadata } from "next";
import { DM_Sans, League_Spartan, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const fontSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const fontSpartan = League_Spartan({
  variable: "--font-spartan",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const fontCormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "RTO Exclusive",
    template: "%s | RTO Exclusive"
  },
  description: "RTO Exclusive biedt exclusieve auto's met persoonlijke aandacht. Ontdek onze premium collectie luxe voertuigen en ervaar onze professionele service.",
  keywords: ["luxe auto's", "exclusieve voertuigen", "premium auto's", "autohandel", "RTO Exclusive", "Nederland"],
  authors: [{ name: "RTO Exclusive" }],
  creator: "RTO Exclusive",
  publisher: "RTO Exclusive",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://rto-exclusive.nl",
    title: "RTO Exclusive",
    description: "RTO Exclusive biedt exclusieve auto's met persoonlijke aandacht. Ontdek onze premium collectie luxe voertuigen.",
    siteName: "RTO Exclusive",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTO Exclusive - Exclusieve Auto's & Persoonlijke Aandacht",
    description: "RTO Exclusive biedt exclusieve auto's met persoonlijke aandacht. Ontdek onze premium collectie luxe voertuigen.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${fontSans.variable} ${fontSpartan.variable} ${fontCormorant.variable} antialiased bg-black`}
      >
        {children}
        

      </body>
    </html>
  );
}
