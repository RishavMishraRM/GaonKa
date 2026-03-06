"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "./actions";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await loginAction(username, password);
            if (result.success) {
                router.push("/admin-gaonka-9fX72K");
            } else {
                setError(result.error || "Access Denied");
            }
        } catch (err) {
            setError("Ecosystem Timeout");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center p-6 font-sans relative overflow-hidden">
            {/* Background depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/village-texture.png')] opacity-[0.02] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cta/[0.05] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-sharp shadow-2xl border border-primary/5 w-full max-w-md relative z-10"
            >
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="text-3xl font-serif font-black text-primary tracking-tighter italic mb-2">GaonKa</div>
                    <div className="h-0.5 w-6 bg-cta mb-2" />
                    <h1 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary/40">Secure Boarding</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-[10px] font-black uppercase text-secondary/40 tracking-[0.2em]">Identity</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-5 py-4 bg-primary/5 border-b-2 border-primary/10 transition-colors focus:border-cta focus:outline-none font-sans text-sm font-bold"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-[10px] font-black uppercase text-secondary/40 tracking-[0.2em]">Code</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-5 py-4 bg-primary/5 border-b-2 border-primary/10 transition-colors focus:border-cta focus:outline-none font-sans text-sm font-bold"
                            required
                        />
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-sharp border border-red-100">
                            <ShieldAlert size={16} />
                            <p className="text-[10px] font-black uppercase tracking-widest">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-5 rounded-sharp font-black uppercase tracking-[0.4em] text-[10px] hover:bg-cta transition-all duration-500 disabled:opacity-50 shadow-xl shadow-primary/10"
                    >
                        {loading ? "Verifying..." : "Verify Access"}
                    </button>
                </form>

                <div className="mt-12 text-center">
                    <p className="text-[9px] text-secondary/30 uppercase tracking-[0.3em] font-bold">Authorized Personnel Only</p>
                </div>
            </motion.div>
        </div>
    );
}
