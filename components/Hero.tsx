"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface HeroContent {
    title: string;
    subtitle: string;
    quote: string;
}

export default function Hero({ content }: { content: HeroContent }) {
    const ref = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);

    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    // Parallax fade out at the very end to smooth transition
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    // Reveal on scroll or tap
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20 && !isRevealed) {
            setIsRevealed(true);
        }
    });

    return (
        <section
            ref={ref}
            className="relative h-screen w-full overflow-hidden cursor-pointer"
            onClick={() => setIsRevealed(true)}
        >
            {/* Background Image with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/images/Image1_Hero_Main.png"
                    alt="GaonKa Village Field"
                    fill
                    priority
                    className="object-cover transition-transform duration-[2s] hover:scale-105"
                    sizes="100vw"
                />
                {/* Overlay - Darkens when revealed for better contrast */}
                <div className={`absolute inset-0 bg-black/10 transition-colors duration-1000 ${isRevealed ? "bg-black/40" : "bg-black/0"}`} />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-0">
                <motion.div
                    style={{ opacity }} // Apply scroll fade-out
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={isRevealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl liquid-glass p-12 md:p-20 rounded-[4rem] border-white/30 backdrop-blur-md shadow-2xl"
                >
                    <h1 className="text-5xl md:text-9xl font-serif font-bold text-primary mb-6 tracking-tighter">
                        {content.title}
                    </h1>
                    <p className="text-xl md:text-3xl text-secondary font-sans font-light tracking-[0.2em] uppercase mb-10">
                        {content.subtitle}
                    </p>
                    <div className="h-[1px] w-32 bg-cta mx-auto mb-10 opacity-60" />
                    <p className="text-xl md:text-2xl text-primary/80 max-w-2xl mx-auto leading-relaxed font-serif italic">
                        {content.quote}
                    </p>
                </motion.div>

                {/* Interaction Prompt (Only visible if NOT revealed) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isRevealed ? 0 : 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/90 flex flex-col items-center gap-4 pointer-events-none"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-black/20 backdrop-blur px-4 py-2 rounded-full">Tap or Scroll to Explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-px h-16 bg-gradient-to-b from-white to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
