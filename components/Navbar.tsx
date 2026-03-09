"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (pathname !== "/") {
            router.push(`/#${id}`);
            setIsMobileMenuOpen(false);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-4 inset-x-0 mx-auto z-50 transition-all duration-500 w-[95%] max-w-7xl rounded-sharp px-6 py-3 ${isScrolled ? "liquid-glass shadow-lg" : "bg-white/10 backdrop-blur-sm"
                }`}
        >
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-3xl font-serif font-bold tracking-tighter text-primary z-50 relative">
                    GaonKa
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    <button onClick={() => scrollToSection("story")} className="text-secondary font-medium tracking-wide hover:text-primary transition-colors cursor-pointer">
                        Our Story
                    </button>
                    <button onClick={() => scrollToSection("process")} className="text-secondary font-medium tracking-wide hover:text-primary transition-colors cursor-pointer">
                        Process
                    </button>
                    <button onClick={() => scrollToSection("farmers")} className="text-secondary font-medium tracking-wide hover:text-primary transition-colors cursor-pointer">
                        Farmers
                    </button>
                    <Link href="/products" className="text-secondary font-medium tracking-wide hover:text-primary transition-colors cursor-pointer">
                        Products
                    </Link>
                    <button
                        onClick={() => scrollToSection("products")}
                        className="flex items-center gap-2 bg-cta text-white px-6 py-2.5 rounded-sharp hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                    >
                        <ShoppingBag size={18} />
                        <span className="font-semibold uppercase tracking-wider text-xs">Order Now</span>
                    </button>
                </div>

                {/* Mobile Menu Button - Z-index high to overlap overlay */}
                <button
                    className="md:hidden text-primary z-50 relative p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Full Screen */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#FAFAF9] z-40 md:hidden flex flex-col pt-32 px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col items-start space-y-6 w-full pb-10">
                            <button
                                onClick={() => scrollToSection("story")}
                                className="text-3xl text-primary font-serif font-bold tracking-tight hover:text-cta transition-colors text-left w-full py-2 border-b border-primary/5"
                            >
                                Our Story
                            </button>
                            <button
                                onClick={() => scrollToSection("process")}
                                className="text-3xl text-primary font-serif font-bold tracking-tight hover:text-cta transition-colors text-left w-full py-2 border-b border-primary/5"
                            >
                                Process
                            </button>
                            <button
                                onClick={() => scrollToSection("farmers")}
                                className="text-3xl text-primary font-serif font-bold tracking-tight hover:text-cta transition-colors text-left w-full py-2 border-b border-primary/5"
                            >
                                Farmers
                            </button>
                            <Link
                                href="/products"
                                className="text-3xl text-primary font-serif font-bold tracking-tight hover:text-cta transition-colors text-left w-full py-2 border-b border-primary/5"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Products
                            </Link>

                            <div className="h-4 w-full" />

                            <button
                                onClick={() => scrollToSection("products")}
                                className="flex items-center justify-between bg-primary text-white w-full py-5 px-6 rounded-sharp shadow-xl active:scale-95 transition-transform group"
                            >
                                <span className="font-bold uppercase tracking-[0.2em] text-sm">Order Now</span>
                                <ShoppingBag size={20} className="text-cta group-hover:text-white transition-colors" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
