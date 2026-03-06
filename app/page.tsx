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

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-cta selection:text-white">
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
