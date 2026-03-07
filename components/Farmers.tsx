"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const farmers = [
    {
        name: "Ram Kaka",
        role: "The Guardian",
        desc: "Preserving 60-year-old seeds.",
        image: "/images/Image8_Farmer_Elder.png",
        alt: "Ram Kaka - Elder Indian Organic Farmer Preserving Heritage Seeds in Bihar Village",
    },
    {
        name: "Sunita Didi",
        role: "The Nurturer",
        desc: "Expert in natural pest control.",
        image: "/images/Image11_Farmer_Woman.png",
        alt: "Sunita Didi - Woman Farmer Expert in Natural Organic Pest Control Methods",
    },
    {
        name: "Vikram",
        role: "The Innovator",
        desc: "Bringing modern organic tech.",
        image: "/images/Image9_Farmer_Young.png",
        alt: "Vikram - Young Indian Farmer Innovating Organic Agriculture Technology",
    },
];

interface FarmersContent {
    title: string;
    text: string;
}

export default function Farmers({ content }: { content?: FarmersContent }) {
    if (!content) return null;

    return (
        <section id="farmers" className="py-16 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-7xl font-serif font-black text-primary mb-4 md:mb-6">{content.title}</h2>
                    <p className="max-w-xl mx-auto text-secondary/70 font-sans tracking-wide uppercase text-xs">
                        {content.text}
                    </p>
                    <div className="h-[2px] w-20 bg-cta mx-auto mt-6" />
                </motion.div>

                <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-10 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0">
                    {farmers.map((farmer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="min-w-[85vw] md:min-w-0 snap-center hover-lift"
                        >
                            <div className="relative group overflow-hidden rounded-[3rem] h-[420px] md:h-[550px] shadow-2xl border border-primary/5">
                                <Image
                                    src={farmer.image}
                                    alt={farmer.alt}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                    sizes="(max-width: 768px) 90vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                                    <p className="text-cta text-xs font-bold uppercase tracking-[0.3em] mb-3">
                                        {farmer.role}
                                    </p>
                                    <h3 className="text-3xl font-serif font-bold mb-3 tracking-tight">{farmer.name}</h3>
                                    <p className="text-white/60 font-sans text-sm italic">{farmer.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {[
                        { quote: "\u201cIs batch ka tel kal nikla.\u201d", author: "Ramesh, Farmer", color: "border-cta" },
                        { quote: "\u201cHum 3 din ke andar packing kar dete hain.\u201d", author: "Savita, Partner", color: "border-primary" }
                    ].map((q, i) => (
                        <div key={i} className={`bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-l-4 ${q.color} shadow-xl shadow-primary/5 liquid-glass`}>
                            <p className="text-2xl italic text-primary font-serif font-bold mb-6">
                                {q.quote}
                            </p>
                            <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-[0.3em]">
                                — {q.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
