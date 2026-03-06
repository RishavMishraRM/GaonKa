import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  metadataBase: new URL("https://gaonka.shop"),
  title: "GaonKa | 100% Organic, Pure & Farm-Fresh Food Direct from Villages",
  description: "Get 100% natural, organic, and preservative-free food delivered from Indian villages. GaonKa offers cold-pressed oils, stone-ground wood-pressed chakki atta, and pure organic groceries in Delhi, NCR, Mumbai, Bangalore, Pune, and all big cities across India.",
  keywords: ["organic food india", "organic groceries online", "farm to home organic", "cold pressed oil pure", "stone ground atta organic", "gaonka", "buy organic food delhi mumbai pune ncr", "village food delivery", "no preservatives organic food"],
  authors: [{ name: "GaonKa Farm & Village Team" }],
  openGraph: {
    title: "GaonKa | Pure Organic Farm-Fresh Food - Gaon Se Ghar Tak",
    description: "Shop 100% Organic, Chemical-free & Real food. No preservatives. From villages straight to your home across major cities.",
    url: "https://gaonka.shop",
    siteName: "GaonKa Organic Food Delivery",
    images: [
      {
        url: "/images/Image1_Hero_Main.png",
        width: 1200,
        height: 630,
        alt: "GaonKa Organic Village Fields & Harvest",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GaonKa | 100% Organic Farm-to-Home Food",
    description: "Honest, pure organic food from Indian villages. Delivered across all major cities. No middlemen, absolutely zero preservatives.",
    images: ["/images/Image1_Hero_Main.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
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
                "url": "https://gaonka.shop",
                "logo": "https://gaonka.shop/images/logo.png",
                "description": "Direct farm-to-home food delivery service in India. 100% Preservative Free.",
                "areaServed": "IN",
                "knowsAbout": ["Cold Pressed Oils", "Stone Ground Atta", "Organic Farming", "Village Economies"]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "GaonKa",
                "url": "https://gaonka.shop",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://gaonka.shop/products?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
