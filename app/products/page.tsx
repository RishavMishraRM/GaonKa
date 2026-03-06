import { getProducts } from "@/lib/db";
import ProductsPageClient from "@/app/products/ProductsPageClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/db";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Products - GaonKa",
    description: "Browse our complete range of farm-fresh, preservative-free village products including cold-pressed oils, hand-pounded spices, and stone-ground flours.",
};

export default async function ProductsPage() {
    const products = await getProducts();
    const content = await getSiteContent();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products.map((product: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.desc,
                "image": `https://gaonka.com${product.image}`,
                "offers": {
                    "@type": "Offer",
                    "price": product.price.replace(/[^0-9]/g, ''),
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                }
            }
        }))
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <ProductsPageClient initialProducts={products} />
            <Footer text={content.footer.text} />
        </main>
    );
}
