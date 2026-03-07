import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Farmers from "@/components/Farmers";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import GaonKaCircle from "@/components/GaonKaCircle";

import DailyUpdate from "@/components/DailyUpdate";
import MicroProcess from "@/components/MicroProcess";
import AntiMarketing from "@/components/AntiMarketing";
import WhoNotFor from "@/components/WhoNotFor";
import QuietFAQ from "@/components/QuietFAQ";
import { getSiteContent, getProducts } from "@/lib/db";

export default async function Home() {
  const content = await getSiteContent();
  const productsList = await getProducts();
  const { sections } = content;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "GaonKa Organic Products",
    "description": "100% Organic, Preservative-Free Food Direct from Indian Villages.",
    "itemListElement": productsList.filter((p: any) => p.enabled !== false).slice(0, 3).map((product: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.desc,
        "image": `https://gaonka.shop${product.image}`,
        "brand": { "@type": "Brand", "name": "GaonKa" },
        "offers": {
          "@type": "Offer",
          "price": product.price.replace(/[^0-9]/g, ''),
          "priceCurrency": "INR",
          "availability": product.stockLeft && product.stockLeft > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "url": "https://gaonka.shop/products"
        }
      }
    }))
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-cta selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero content={content.hero} />
      {sections.dailyUpdate && <DailyUpdate />}
      <Story content={content.story} />
      {sections.process && (
        <>
          <Process content={content.process} />
          <MicroProcess />
        </>
      )}
      <GaonKaCircle />
      {sections.farmers && <Farmers content={content.farmers} />}
      <Products products={productsList} sourceText={content.source.text} />
      {sections.whoNotFor && <WhoNotFor content={content.whoNotFor} />}
      {sections.faq && <QuietFAQ faqs={content.faqs} />}
      {sections.antiMarketing && <AntiMarketing content={content.antiMarketing} />}
      <Footer text={content.footer.text} />
    </main>
  );
}
