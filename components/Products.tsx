"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    desc: string;
    batch: string;
    processing: string;
    color: string;
    image: string;
    enabled: boolean;
    stockLeft?: number;
    harvestStatus?: string;
}

export default function Products({ products, sourceText }: { products: Product[], sourceText?: string }) {
    // Only show active products on homepage, limit to 3
    const displayProducts = products.filter(p => p.enabled !== false).slice(0, 3);

    const handleOrder = (productName: string) => {
        const text = encodeURIComponent(`Hi GaonKa, I would like to order ${productName}.`);
        window.open(`https://wa.me/918507886461?text=${text}`, "_blank");
    };

    return (
        <section id="products" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 animate-on-scroll">
                    <h2 className="text-4xl md:text-7xl font-serif font-black text-primary mb-4 tracking-tighter">Pantry Essentials</h2>
                    <p className="text-lg text-secondary/70 max-w-xl mx-auto font-sans tracking-wide uppercase text-xs">Stock up on honest food. Prices are real, just like the quality.</p>
                    <div className="h-[2px] w-20 bg-cta mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {displayProducts.map((product, idx) => {
                        const isHighDemand = (product.stockLeft || 0) < 10;
                        const stockProgress = Math.max(5, Math.min(100, ((product.stockLeft || 0) / 20) * 100)); // Assuming 20 is "full" for display

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="group flex flex-col h-full hover-lift"
                            >
                                {/* Image Card - Sharp Geometry */}
                                <div className={`relative aspect-[4/5] rounded-sharp overflow-hidden mb-8 ${product.color} bg-opacity-30 border border-primary/5`}>
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} - 100% Organic, Preservative-Free`}
                                        fill
                                        className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 p-8"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />

                                    {/* Badges - Sharp Geometry */}
                                    <div className="absolute top-8 left-8 flex flex-col gap-2">
                                        <div className="bg-primary text-white px-4 py-1.5 rounded-sharp text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                                            {product.category}
                                        </div>
                                        {isHighDemand && (
                                            <div className="bg-cta text-white px-4 py-1.5 rounded-sharp text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg flex items-center gap-1.5">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                                </span>
                                                Almost Gone
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="px-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-serif font-bold text-primary leading-tight tracking-tight">{product.name}</h3>
                                        <p className="text-xl font-serif font-medium text-cta">{product.price}</p>
                                    </div>
                                    <p className="text-base text-secondary/80 leading-relaxed mb-6 font-sans">
                                        {product.desc}
                                    </p>

                                    {/* Inventory & Harvest Meta - Sharp Layout */}

                                    <button
                                        onClick={() => handleOrder(product.name)}
                                        className="w-full bg-primary text-white py-5 rounded-sharp font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-cta hover:shadow-2xl hover:shadow-cta/20 transition-all duration-300 shadow-xl shadow-primary/10 cursor-pointer"
                                    >
                                        <span>Order Now</span>
                                        <ShoppingBag size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-sm group hover:text-cta transition-colors"
                    >
                        <span>Explore Full Catalog</span>
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
