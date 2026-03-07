"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowRight, Heart } from "lucide-react";

export default function Footer({ text }: { text: string }) {
    return (
        <footer className="bg-primary text-white relative overflow-hidden">
            {/* Decorative background texture elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cta to-transparent opacity-20" />

            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-8">
                        <Link href="/" className="inline-block group">
                            <h2 className="text-5xl font-serif font-black tracking-tighter text-white group-hover:text-cta transition-colors duration-500">
                                GaonKa
                            </h2>
                            <p className="text-[10px] uppercase tracking-[0.5em] text-cta mt-2 group-hover:tracking-[0.6em] transition-all duration-500 font-bold">
                                Gaon Se Ghar Tak
                            </p>
                        </Link>
                        <p className="text-xl leading-relaxed opacity-70 max-w-sm font-serif italic">
                            Bringing the honest, unadulterated flavors of the village straight to your modern kitchen. No middlemen. No preservatives. Just food.
                        </p>
                        <div className="flex gap-6 pt-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cta hover:border-cta hover:text-white transition-all duration-300 group"
                                >
                                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-10">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cta">Collections</h3>
                        <ul className="space-y-6">
                            {[
                                { name: "Village Pantry", href: "/products" },
                                { name: "Our Process", href: "/#process" },
                                { name: "The Farmers", href: "/#farmers" },
                                { name: "Circle Membership", href: "/#circle" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-serif italic hover:text-cta hover:pl-2 transition-all duration-300 flex items-center gap-3 group"
                                    >
                                        <span className="w-1.5 h-[1px] bg-cta opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div className="md:col-span-4 space-y-10">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cta">Join the Harvest</h3>
                        <p className="opacity-60 text-base font-sans">
                            Be the first to know when a fresh batch arrives from the village.
                        </p>
                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 pr-16 text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-cta transition-all font-sans"
                            />
                            <button className="absolute right-2 top-2 bottom-2 aspect-square bg-cta text-white rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                        <div className="space-y-3 pt-6 border-t border-white/5">
                            <p className="text-[10px] text-cta uppercase tracking-widest font-black">Direct Contact</p>
                            <p className="text-2xl font-serif">hello@gaonka.shop</p>
                            <p className="opacity-50 text-sm font-sans tracking-widest">+91 8507886461</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] opacity-40 uppercase tracking-[0.2em] font-bold">
                    <p>{text}</p>
                    <p className="flex items-center gap-2">
                        Crafted with <Heart size={12} className="text-cta fill-cta animate-pulse" /> in Bihar & Delhi
                    </p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-cta transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-cta transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
