"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Gift, Smartphone } from "lucide-react";

export default function GaonKaCircle() {
    return (
        <section className="py-14 md:py-20 bg-primary text-white overflow-hidden relative border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header Compact Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 border-b border-white/10 pb-8">
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 text-cta text-[10px] font-black uppercase tracking-[0.3em] mb-2"
                            >
                                <Sparkles size={12} />
                                Join the Inner Circle
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tighter leading-none">
                                The GaonKa <span className="text-cta">Circle.</span>
                            </h2>
                        </div>

                        <div className="text-left md:text-right max-w-sm">
                            <p className="text-sm md:text-base text-white/60 font-serif italic leading-relaxed">
                                "Secure your harvest before it's even processed. Authenticity for the few."
                            </p>
                        </div>
                    </div>

                    {/* Features Grid - Compact */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Zap size={20} className="text-cta" />,
                                title: "Priority Harvest",
                                desc: "First access to limited batches like Raw Honey & Winter Ghee."
                            },
                            {
                                icon: <Gift size={20} className="text-cta" />,
                                title: "Member Gifting",
                                desc: "Curated, plastic-free gift sets available only to members."
                            },
                            {
                                icon: <Smartphone size={20} className="text-cta" />,
                                title: "Direct Stream",
                                desc: "Exclusive farm-to-phone updates from our village kitchens."
                            }
                        ].map((item, i) => (
                            <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cta/20 hover:bg-white/[0.07] transition-all duration-300">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-2 bg-black/20 rounded-lg">{item.icon}</div>
                                    <h3 className="text-lg font-serif font-bold group-hover:text-cta transition-colors">{item.title}</h3>
                                </div>
                                <p className="text-xs text-white/40 leading-relaxed font-sans pl-[3.25rem]">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Compact CTA */}
                    <div className="mt-10 text-center">
                        <button className="bg-white text-primary px-8 py-3 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-cta hover:text-white transition-all shadow-lg hover:shadow-cta/20">
                            Apply for Membership
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cta/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </section>
    );
}
