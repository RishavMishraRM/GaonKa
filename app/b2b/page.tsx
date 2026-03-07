import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Building, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Corporate Gifting & Bulk Orders - Organic Village Food",
    description: "GaonKa B2B: Premium organic corporate gifting and bulk orders. Plastic-free, preservative-free food hampers sourced directly from Indian villages. Perfect for Diwali gifts, employee wellness programs, and client appreciation.",
    keywords: ["organic corporate gifting", "bulk organic food orders", "diwali gift hampers organic", "corporate food hampers india", "village food wholesale"],
    alternates: {
        canonical: "https://gaonka.shop/b2b",
    },
    openGraph: {
        title: "GaonKa B2B - Corporate Organic Gifting from Indian Villages",
        description: "Elevate corporate gifting with 100% organic, plastic-free food hampers. Direct from village to boardroom.",
        url: "https://gaonka.shop/b2b",
        type: "website",
    },
};

export default function B2BPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gaonka.shop" },
            { "@type": "ListItem", "position": 2, "name": "Corporate & B2B", "item": "https://gaonka.shop/b2b" },
        ]
    };

    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <section className="pt-28 md:pt-40 pb-16 md:pb-24 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h1 className="text-4xl md:text-8xl font-serif font-black tracking-tighter leading-none mb-6 md:mb-10">
                                Village Integrity, <br />
                                <span className="text-cta">Corporate Scales.</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-secondary/70 font-serif italic mb-8 md:mb-12 max-w-xl">
                                GaonKa Gifting: Plastic-free, preservative-free, and directly sourced from Indian villages. Elevate your corporate gifting with food that has a soul.
                            </p>

                            <div className="space-y-8 mb-12">
                                <div className="flex gap-6 items-start">
                                    <div className="p-4 bg-primary/5 rounded-sharp text-primary border border-primary/10">
                                        <Building size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif font-bold mb-1">Bulk Harvest Orders</h3>
                                        <p className="text-sm text-secondary/60">Secure entire harvests for your employees or clients at village-direct pricing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="p-4 bg-primary/5 rounded-sharp text-primary border border-primary/10">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif font-bold mb-1">Custom Branding</h3>
                                        <p className="text-sm text-secondary/60">Handcrafted wooden boxes with your corporate identity, maintaining rural aesthetics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 md:p-10 bg-white border border-primary/10 rounded-sharp shadow-2xl relative">
                            <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
                            <h2 className="text-3xl font-serif font-bold mb-8">Corporate Inquiry</h2>
                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Full Name</label>
                                        <input type="text" className="w-full bg-primary/5 border border-primary/10 rounded-sharp px-4 py-3 focus:outline-none focus:border-cta transition-colors font-sans text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Email</label>
                                        <input type="email" className="w-full bg-primary/5 border border-primary/10 rounded-sharp px-4 py-3 focus:outline-none focus:border-cta transition-colors font-sans text-sm" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Company Name</label>
                                    <input type="text" className="w-full bg-primary/5 border border-primary/10 rounded-sharp px-4 py-3 focus:outline-none focus:border-cta transition-colors font-sans text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Estimated Quantity</label>
                                    <select className="w-full bg-primary/5 border border-primary/10 rounded-sharp px-4 py-3 focus:outline-none focus:border-cta transition-colors font-sans text-sm appearance-none">
                                        <option>50 - 100 Gift Boxes</option>
                                        <option>100 - 500 Gift Boxes</option>
                                        <option>500+ Gift Boxes</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/50">Requirement Details</label>
                                    <textarea rows={4} className="w-full bg-primary/5 border border-primary/10 rounded-sharp px-4 py-3 focus:outline-none focus:border-cta transition-colors font-sans text-sm resize-none"></textarea>
                                </div>
                                <button className="w-full bg-primary text-white py-5 rounded-sharp font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-cta transition-all duration-300 shadow-xl shadow-primary/10">
                                    <span>Send Proposal Request</span>
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-16">Trusted by Conscious Cultures</h2>
                    <div className="flex flex-wrap justify-center gap-20 opacity-30 grayscale contrast-125">
                        <div className="font-serif text-3xl font-black italic tracking-tighter">CORPORATE CO.</div>
                        <div className="font-serif text-3xl font-black italic tracking-tighter">DESIGN STUDIO</div>
                        <div className="font-serif text-3xl font-black italic tracking-tighter">TECH HUB</div>
                        <div className="font-serif text-3xl font-black italic tracking-tighter">LUXURY RESORT</div>
                    </div>
                </div>
            </section>

            <Footer text="GaonKa: Integrity in every harvest. Village-direct corporate gifting solutions." />
        </main>
    );
}
