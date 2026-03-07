import type { Metadata, Viewport } from "next";
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


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2A1B12",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gaonka.shop"),
  title: {
    default: "GaonKa | 100% Organic, Pure & Farm-Fresh Food Direct from Indian Villages",
    template: "%s | GaonKa - Gaon Se Ghar Tak",
  },
  description: "Get 100% natural, organic, and preservative-free food delivered from Indian villages. GaonKa offers cold-pressed mustard oil, stone-ground wood-pressed chakki atta, pure desi ghee, and organic groceries in Delhi, NCR, Mumbai, Bangalore, Pune, and all major cities across India. No middlemen, no chemicals.",
  keywords: ["organic food india", "organic groceries online", "farm to home organic", "cold pressed mustard oil", "stone ground atta organic", "gaonka", "buy organic food delhi ncr mumbai pune bangalore", "village food delivery", "preservative free food", "desi ghee pure", "organic spices online india", "chemical free food"],
  authors: [{ name: "GaonKa Farm & Village Team" }],
  creator: "GaonKa",
  publisher: "GaonKa",
  alternates: {
    canonical: "https://gaonka.shop",
  },
  openGraph: {
    title: "GaonKa | Pure Organic Farm-Fresh Food - Gaon Se Ghar Tak",
    description: "Shop 100% Organic, Chemical-free & Real food. No preservatives. From villages straight to your home across major cities. Cold-pressed oils, stone-ground atta, pure desi ghee.",
    url: "https://gaonka.shop",
    siteName: "GaonKa - Organic Food from Indian Villages",
    images: [
      {
        url: "/images/Image1_Hero_Main.png",
        width: 1200,
        height: 630,
        alt: "GaonKa - 100% Organic Farm-Fresh Food from Indian Villages",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Food & Beverage",
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
                "description": "100% organic, preservative-free food delivered directly from Indian villages. Cold-pressed oils, stone-ground atta, and pure desi ghee.",
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "foundingDate": "2024",
                "knowsAbout": ["Cold Pressed Mustard Oil", "Stone Ground Chakki Atta", "Organic Farming", "Village Economies", "Preservative Free Food", "Desi Ghee"],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+918507886461",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://www.instagram.com/gaonka.shop"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "GaonKa - Organic Farm Food Delivery",
                "description": "Farm-to-home organic food delivery from Indian villages. Cold-pressed oils, stone-ground atta, pure ghee.",
                "url": "https://gaonka.shop",
                "telephone": "+918507886461",
                "priceRange": "$$",
                "image": "https://gaonka.shop/images/Image1_Hero_Main.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN",
                  "addressRegion": "Bihar"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "26.22",
                  "longitude": "84.35"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
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
