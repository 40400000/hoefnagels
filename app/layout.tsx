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
    default: "Hoefnagels",
    template: "%s | Hoefnagels"
  },
  description: "Hoefnagels is hét aanspreekpunt voor iedere liefhebber en verzamelaar met het exclusieve autohart op de juiste plaats. Ontdek onze collectie in Heeze.",
  keywords: ["luxe auto's", "exclusieve voertuigen", "autohandel", "Hoefnagels", "Heeze", "Nederland"],
  authors: [{ name: "Hoefnagels" }],
  creator: "Hoefnagels",
  publisher: "Hoefnagels",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://hoefnagels.nl",
    title: "Hoefnagels",
    description: "Hoefnagels is hét aanspreekpunt voor iedere liefhebber en verzamelaar met het exclusieve autohart op de juiste plaats.",
    siteName: "Hoefnagels",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoefnagels - Exclusiviteit is bij mij altijd inclusief",
    description: "Hoefnagels is hét aanspreekpunt voor iedere liefhebber en verzamelaar met het exclusieve autohart op de juiste plaats.",
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
