"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowLeft, Star, Leaf } from "lucide-react";
import Link from "next/link";

export default function ProductsPageClient({ initialProducts }: { initialProducts: any[] }) {
    const [activeFilter, setActiveFilter] = useState("All");

    // Only show products that are enabled
    const activeProducts = initialProducts.filter(p => p.enabled !== false);

    // Derive unique filter categories
    const uniqueCategories = Array.from(new Set(activeProducts.map(p => p.category))).filter(c => c && c !== "All");
    const filters = ["All", ...uniqueCategories];

    const filteredProducts = activeFilter === "All"
        ? activeProducts
        : activeProducts.filter(p => p.category === activeFilter);

    const handleOrder = (productName: string) => {
        const text = encodeURIComponent(`Namaste GaonKa, I wish to acquire ${productName}.`);
        window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
    };

    return (
        <section className="min-h-screen bg-[#FDFCFB] text-primary selection:bg-cta selection:text-white">
            {/* Immersive Header */}
            <div className="pt-40 pb-20 px-6 md:px-12 lg:px-24 border-b border-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cta/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="max-w-[1800px] mx-auto relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 text-secondary/40 hover:text-cta mb-12 transition-colors duration-300 group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase tracking-[0.4em] text-[9px]">Return Home</span>
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 relative">
                        {/* Left: Branding */}
                        <div className="relative z-10">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-7xl md:text-9xl font-serif font-black text-primary tracking-tighter italic leading-[0.85] mb-6"
                            >
                                Village <br />
                                <span className="text-cta">Pantry.</span>
                            </motion.h1>
                            <p className="text-xl md:text-2xl text-secondary/60 font-serif italic max-w-xl leading-relaxed">
                                Honest harvests from the heart of the village. <br />
                                <span className="text-cta/80 not-italic text-sm font-bold uppercase tracking-widest mt-2 block">100% Traceable • Chemical Free</span>
                            </p>
                        </div>

                        {/* Right: Live Harvest Stats (Fills the void) */}
                        <div className="hidden lg:flex flex-col items-end relative z-10">
                            {/* Decorative Background Element */}
                            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-64 h-64 bg-cta/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

                            <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-right p-8 border-r border-primary/5 bg-white/50 backdrop-blur-sm rounded-l-sharp">
                                <div className="flex flex-col items-end group cursor-default">
                                    <span className="text-5xl font-serif font-black text-primary group-hover:text-cta transition-colors duration-300">100<span className="text-2xl align-top">%</span></span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary/40 mt-1">Single Origin</span>
                                </div>
                                <div className="flex flex-col items-end group cursor-default">
                                    <span className="text-5xl font-serif font-black text-primary group-hover:text-cta transition-colors duration-300">0<span className="text-2xl align-top">%</span></span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary/40 mt-1">Middlemen</span>
                                </div>
                                <div className="flex flex-col items-end group cursor-default">
                                    <span className="text-5xl font-serif font-black text-primary group-hover:text-cta transition-colors duration-300">12</span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary/40 mt-1">Active Clusters</span>
                                </div>
                                <div className="flex flex-col items-end group cursor-default">
                                    <span className="text-5xl font-serif font-black text-primary group-hover:text-cta transition-colors duration-300">A+</span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary/40 mt-1">Export Grade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto relative">
                <div className="flex flex-col lg:flex-row">

                    {/* Sticky Sidebar Filters */}
                    <div className="lg:w-80 lg:shrink-0 lg:border-r border-primary/5">
                        <div className="lg:sticky lg:top-8 p-6 md:p-12 overflow-x-auto lg:overflow-visible">
                            <span className="hidden lg:block text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 mb-8">
                                Curated Aisles
                            </span>

                            <div className="flex lg:flex-col gap-4 lg:gap-2 min-w-max lg:min-w-0">
                                {filters.map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`group flex items-center justify-between w-full text-left py-2 transition-all duration-300 ${activeFilter === filter ? "opacity-100" : "opacity-40 hover:opacity-100"
                                            }`}
                                    >
                                        <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${activeFilter === filter ? "text-cta" : "text-primary"
                                            }`}>
                                            {filter}
                                        </span>
                                        {activeFilter === filter && (
                                            <motion.div
                                                layoutId="sidebar-dot"
                                                className="hidden lg:block w-1.5 h-1.5 bg-cta rounded-full"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Expansive Product Grid */}
                    <div className="flex-1 p-6 md:p-12 lg:p-20 bg-[#FDFCFB]">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-20"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product, idx) => {
                                    const isHighDemand = (product.stockLeft || 0) < 10;

                                    return (
                                        <motion.div
                                            layout
                                            key={product.id}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                            className="group flex flex-col"
                                        >
                                            {/* Image Stage */}
                                            <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F4F2] mb-8 cursor-pointer group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-shadow duration-700">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-12 mix-blend-multiply transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />

                                                {/* Interaction Overlay - Always Visible */}
                                                <div className="absolute inset-x-4 bottom-4">
                                                    <button
                                                        onClick={() => handleOrder(product.name)}
                                                        className="w-full bg-primary/95 backdrop-blur text-white py-4 text-[10px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-cta transition-colors"
                                                    >
                                                        <span>Acquire Now</span>
                                                        <ShoppingBag size={12} />
                                                    </button>
                                                </div>

                                                {/* Badges */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-white/80 backdrop-blur px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary">
                                                        {product.category}
                                                    </span>
                                                </div>
                                                {isHighDemand && (
                                                    <div className="absolute top-4 right-4 animate-pulse">
                                                        <span className="bg-cta text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                                                            Rare
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Editorial Content */}
                                            <div className="flex flex-col items-center text-center space-y-4 px-4">
                                                <h3 className="text-3xl font-serif font-medium text-primary tracking-tight leading-none group-hover:text-cta transition-colors duration-300">
                                                    {product.name}
                                                </h3>

                                                <div className="w-12 h-px bg-primary/10 group-hover:w-20 group-hover:bg-cta/40 transition-all duration-500" />

                                                <div className="text-secondary/60 text-sm font-sans leading-relaxed line-clamp-2 max-w-xs">
                                                    {product.desc}
                                                </div>

                                                <div className="flex items-baseline gap-2 pt-2">
                                                    <span className="text-sm font-black text-primary/30 uppercase tracking-widest">{product.qty}</span>
                                                    <span className="text-2xl font-serif font-black text-cta italic">{product.price}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>

                        {filteredProducts.length === 0 && (
                            <div className="h-96 flex flex-col items-center justify-center text-center">
                                <p className="text-5xl font-serif font-black text-primary/10 italic mb-4">The pantry is quiet.</p>
                                <p className="text-xs font-black uppercase tracking-[0.3em] text-secondary/30">More harvests arriving soon</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
