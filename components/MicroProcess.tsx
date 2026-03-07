"use client";

import { motion } from "framer-motion";
import { Wheat, CookingPot, PackageCheck, Truck, ArrowRight } from "lucide-react";

const items = [
    {
        step: "01",
        text: "Grown in Village Fields",
        icon: Wheat,
        desc: "Heritage seeds nurtured by generational farmers without chemicals."
    },
    {
        step: "02",
        text: "Traditional Processing",
        icon: CookingPot,
        desc: "Cold-pressed and stone-ground to retain 100% of natural nutrients."
    },
    {
        step: "03",
        text: "Small Batch Packing",
        icon: PackageCheck,
        desc: "Hand-sealed inspections ensuring zero contamination."
    },
    {
        step: "04",
        text: "Direct to Home",
        icon: Truck,
        desc: "From the village cluster straight to your kitchen table."
    }
];

export default function MicroProcess() {
    return (
        <section className="py-24 bg-[#FAFAF9] relative overflow-hidden">
            {/* Connecting Line - Absolute Positioned */}
            <div className="hidden lg:block absolute top-[55%] left-0 w-full h-px bg-primary/5 -z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cta/30 to-transparent w-1/2 mx-auto" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header Narrative */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 border-b border-primary/5 pb-6 md:pb-8">
                    <div>
                        <h3 className="text-3xl md:text-5xl font-serif font-black text-primary mb-3 md:mb-4 italic">
                            The Honest <span className="text-cta">Journey.</span>
                        </h3>
                        <p className="text-secondary/60 max-w-md font-sans text-sm leading-relaxed">
                            A transparent supply chain where every step adds value, not cost.
                            From the soil of Siwan to the soul of your home.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/20">
                            Gaon Se Ghar Tak
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8 }}
                            className="group relative bg-[#FAFAF9]"
                        >
                            {/* Connector for Mobile */}
                            {idx !== items.length - 1 && (
                                <div className="lg:hidden absolute left-8 top-24 bottom-[-2rem] w-px bg-primary/10" />
                            )}

                            {/* Icon Stage */}
                            <div className="relative mb-8">
                                <div className="w-16 h-16 bg-white border border-primary/5 rounded-2xl flex items-center justify-center text-cta shadow-sm group-hover:scale-110 group-hover:border-cta/20 transition-all duration-500 z-10 relative">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>

                                {/* Step Number Watermark */}
                                <span className="absolute -top-6 -right-4 text-8xl font-black text-primary/[0.03] font-serif select-none pointer-events-none group-hover:text-cta/[0.05] transition-colors duration-500">
                                    {item.step}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="pr-4">
                                <h4 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-cta transition-colors">
                                    {item.text}
                                </h4>
                                <p className="text-sm text-secondary/60 leading-relaxed font-sans border-l-2 border-transparent group-hover:border-cta/30 pl-0 group-hover:pl-4 transition-all duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
