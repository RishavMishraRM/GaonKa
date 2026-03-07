import { getProducts } from "@/lib/db";
import ProductsPageClient from "@/app/products/ProductsPageClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/db";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "100% Organic Products | Cold Pressed Oils & Stone Ground Atta - GaonKa",
    description: "Browse GaonKa's complete range of farm-fresh, preservative-free village products. Shop 100% pure organic cold-pressed mustard oil, hand-pounded spices, and stone-ground chakki atta delivered to your door.",
    keywords: ["buy organic products online", "cold pressed mustard oil", "stone ground chakki atta", "natural village food", "organic spices online", "preservative free food india"],
};

export default async function ProductsPage() {
    const products = await getProducts();
    const content = await getSiteContent();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "GaonKa Organic Products",
        "description": "100% Organic, Preservative-Free Food Direct from Indian Villages.",
        "itemListElement": products.map((product: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.desc,
                "image": `https://gaonka.shop${product.image}`, // Updated Domain
                "brand": {
                    "@type": "Brand",
                    "name": "GaonKa"
                },
                "offers": {
                    "@type": "Offer",
                    "price": product.price.replace(/[^0-9]/g, ''),
                    "priceCurrency": "INR",
                    "availability": product.stockLeft > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                    "url": `https://gaonka.shop/products`
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
