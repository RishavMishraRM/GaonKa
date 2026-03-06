"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StoryContent {
    title: string;
    content: string;
}

export default function Story({ content }: { content: StoryContent }) {
    return (
        <section id="story" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cta font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Authenticity</span>
                        <h2 className="text-4xl md:text-7xl font-serif font-black text-primary mb-10 tracking-tighter">
                            {content.title}
                        </h2>
                        <div className="space-y-8 text-xl text-secondary/80 leading-relaxed font-serif italic">
                            <p>
                                {content.content}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cta/5 rounded-full blur-3xl" />

                        <div className="relative border-[1px] border-primary/10 p-4 rounded-[4rem] liquid-glass">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/images/Image3_Story.png"
                                    alt="Village Scene"
                                    className="w-full grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
