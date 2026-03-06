import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});


export const metadata: Metadata = {
  title: "GaonKa – Real Farm-to-Home Food | No Preservatives",
  description: "GaonKa delivers 100% natural, preservative-free food directly from Indian villages to your home. Cold-pressed oils, stone-ground atta, and more.",
  keywords: ["farm to home", "organic food india", "cold pressed oil", "chakki atta", "village food", "gaonka", "natural groceries"],
  authors: [{ name: "GaonKa Team" }],
  openGraph: {
    title: "GaonKa – Gaon Se Ghar Tak",
    description: "Real food. No preservatives. From villages you can trust.",
    url: "https://gaonka.com",
    siteName: "GaonKa",
    images: [
      {
        url: "/images/Image1_Hero_Main.png",
        width: 1200,
        height: 630,
        alt: "GaonKa Village Fields",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GaonKa – Real Farm-to-Home Food",
    description: "Honest food from Indian villages. No middlemen, no preservatives.",
    images: ["/images/Image1_Hero_Main.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${bodoni.variable} ${jost.variable} antialiased font-sans bg-background text-foreground overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "GaonKa",
                "url": "https://gaonka.com",
                "logo": "https://gaonka.com/images/logo.png",
                "description": "Direct farm-to-home food delivery service in India. 100% Preservative Free.",
                "areaServed": "IN",
                "knowsAbout": ["Cold Pressed Oils", "Stone Ground Atta", "Organic Farming", "Village Economies"]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "GaonKa",
                "url": "https://gaonka.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://gaonka.com/products?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
