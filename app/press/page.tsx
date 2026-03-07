import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/db";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Press & Media Coverage - Our Story from Village to Home",
    description: "Read about GaonKa's journey from Bihar villages to homes across India. Founder's note, media coverage, and our mission to deliver 100% organic, preservative-free food. For journalists, creators, and honest eaters.",
    keywords: ["gaonka story", "organic food company india", "farm to home startup", "bihar organic farming", "village food delivery press"],
    alternates: {
        canonical: "https://gaonka.shop/press",
    },
};

export default async function Press() {
    const content = await getSiteContent();

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gaonka.shop" },
            { "@type": "ListItem", "position": 2, "name": "Press & Media", "item": "https://gaonka.shop/press" },
        ]
    };

    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <Navbar />

            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <h1 className="text-3xl md:text-4xl font-bold text-brown-700 mb-2 italic tracking-tight">
                        Our Story · Press · Media
                    </h1>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-12 opacity-60">
                        For journalists, creators, and honest eaters.
                    </p>

                    {/* Founder Story */}
                    <div className="mb-16">
                        <h2 className="text-xl font-bold text-brown-700 mb-4 border-b border-brown-700/10 pb-2 italic">
                            The Founder's Note
                        </h2>
                        <div className="prose text-gray-700 leading-relaxed space-y-4 font-medium italic">
                            <p>
                                {content.story.content}
                            </p>
                        </div>
                    </div>

                    {/* Image 1: Field */}
                    <div className="relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden mb-16 bg-gray-100 border border-brown-700/5">
                        <Image
                            src="/images/Image1_Hero_Main.png"
                            alt="GaonKa Fields"
                            fill
                            className="object-cover grayscale-0 hover:grayscale transition-all duration-1000"
                        />
                        <p className="absolute bottom-4 left-6 text-xs text-white/90 font-mono bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                            The Source: Actual fields, no filters.
                        </p>
                    </div>

                    {/* Why GaonKa Exists */}
                    <div className="mb-16">
                        <h2 className="text-xl font-bold text-brown-700 mb-4 border-b border-brown-700/10 pb-2 italic">
                            Why We Exist
                        </h2>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            The current food system prioritizes shelf-life over real life.
                            Crops are harvested unripe and chemicals are added to simulate freshness.
                            GaonKa removes the layers. We source directly from small batches in the village
                            and deliver it before the freshness fades. It is a return to common sense.
                        </p>
                    </div>

                    {/* Media Coverage */}
                    {content.press && content.press.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-xl font-bold text-brown-700 mb-6 italic border-b border-brown-700/10 pb-2">
                                Shared Stories
                            </h2>
                            <div className="space-y-4">
                                {content.press.map((item: any) => (
                                    <a key={item.id} href={item.link} target="_blank" className="block p-6 bg-white border border-brown-700/5 rounded-2xl hover:border-brown-700/20 transition-all group shadow-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 font-black">{item.source} · {item.date}</p>
                                        </div>
                                        <h3 className="text-lg font-bold text-brown-900 group-hover:text-green-800 transition-colors tracking-tight">{item.title}</h3>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Core Principles */}
                    <div className="mb-16 bg-cream-100/50 p-8 rounded-[2rem] border border-brown-700/5 shadow-inner">
                        <h3 className="text-lg font-bold text-brown-700 mb-6 italic tracking-tight">Core Principles</h3>
                        <ul className="space-y-4 text-brown-700/80 font-bold">
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-green-800 rounded-full border-2 border-white shadow-sm"></span>
                                Direct from farmers
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-green-800 rounded-full border-2 border-white shadow-sm"></span>
                                No middlemen
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-green-800 rounded-full border-2 border-white shadow-sm"></span>
                                Fresh + transparent
                            </li>
                        </ul>
                    </div>

                    {/* Image 2: Hands */}
                    <div className="relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden mb-16 bg-gray-100">
                        <Image
                            src="/images/Image13_Trust_Handover.png"
                            alt="Hands exchanging honest food"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Contact for Media */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-brown-700 mb-4 border-b border-brown-700/10 pb-2 italic">
                            Contact for Media
                        </h2>
                        <div className="text-gray-700 font-mono text-sm space-y-2 bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm">
                            <p>Email: {content.contact?.email || "hello@gaonka.shop"}</p>
                            <p>WhatsApp: {content.contact?.phone || "+91 8507886461"}</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer text={content.footer.text} />
        </main>
    );
}
