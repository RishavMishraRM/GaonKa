"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "1. The Gaon",
        desc: "Sourced directly from organic soil.",
        image: "/images/Image4_Process_Gaon.png",
        alt: "Step 1 - Organic crops growing in Indian village fields without chemicals",
    },
    {
        id: 2,
        title: "2. The Craft",
        desc: "Traditional processing. No machines.",
        image: "/images/Image5_Process_Processing.png",
        alt: "Step 2 - Traditional cold-pressing and stone-grinding in village",
    },
    {
        id: 3,
        title: "3. Small Batches",
        desc: "Cleanly packed by hand.",
        image: "/images/Image6_Process_Packing.png",
        alt: "Step 3 - Hand-packed small batch organic food, chemical-free",
    },
    {
        id: 4,
        title: "4. Your Ghar",
        desc: "Delivered fresh to your doorstep.",
        image: "/images/Image7_Process_Ghar.png",
        alt: "Step 4 - Fresh organic food delivery to your home from village",
    },
];

interface ProcessContent {
    title: string;
    subtitle: string;
}

export default function Process({ content }: { content?: ProcessContent }) {
    if (!content) return null;

    return (
        <section id="process" className="py-32 bg-background overflow-hidden relative">
            <div className="container mx-auto px-6 mb-20 text-center">
                <h2 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6">
                    {content.title}
                </h2>
                <p className="text-lg text-secondary/70 font-sans tracking-[0.2em] uppercase text-xs">
                    {content.subtitle}
                </p>
                <div className="h-[2px] w-20 bg-cta mx-auto mt-6" />
            </div>

            {/* Responsive Grid Layout - Horizontal Scroll on Mobile, Grid on Desktop */}
            <div className="container mx-auto px-0 md:px-6 max-w-[1920px]">
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-10 md:pb-0 px-6 md:px-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group cursor-default min-w-[85vw] md:min-w-0 snap-center"
                        >
                            <div className="relative aspect-[3/5] md:aspect-[3/4] lg:aspect-[3/5] w-full rounded-[2rem] overflow-hidden mb-6 shadow-2xl border border-primary/5 hover:border-cta/20 transition-all duration-500">
                                <Image
                                    src={step.image}
                                    alt={step.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] grayscale-[30%] group-hover:grayscale-0"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="absolute -top-16 -right-4 opacity-10 font-serif font-black text-9xl leading-none select-none">
                                        {step.id}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mobile-visible-perm">
                                            <div className="h-[1px] w-8 bg-cta" />
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-cta">Step 0{step.id}</span>
                                        </div>

                                        <h3 className="text-3xl font-serif font-bold mb-3 leading-none tracking-tight">
                                            {step.title.split('. ')[1]}
                                        </h3>

                                        <p className="text-white/70 text-sm font-sans leading-relaxed max-w-[90%] opacity-80 group-hover:opacity-100 transition-opacity duration-500 mobile-visible-perm">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
