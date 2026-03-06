import { getSiteContent, getProducts } from "@/lib/db";
import { Wheat, Package, Globe, ShieldCheck } from "lucide-react";

export default async function AdminDashboard() {
    const content = await getSiteContent();
    const products = await getProducts();
    const totalStock = products.reduce((acc, p) => acc + (p.stockLeft || 0), 0);

    return (
        <div className="space-y-12">
            <header className="border-b border-primary/10 pb-8">
                <h1 className="text-5xl font-serif font-black text-primary italic tracking-tighter">Namaste, Village Keeper.</h1>
                <p className="text-secondary/40 text-[10px] uppercase tracking-[0.4em] font-bold mt-2">Overseeing the digital integrity of our heritage</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: "Active Harvests", value: products.filter(p => p.enabled !== false).length, icon: Wheat, color: "text-cta" },
                    { label: "Total Units", value: totalStock, icon: Package, color: "text-cta" },
                    { label: "Village Cluster", value: "Siwan", icon: Globe, color: "text-primary" },
                    { label: "System Guard", value: "Active", icon: ShieldCheck, color: "text-green-600" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-sharp border border-primary/5 shadow-2xl group hover:border-cta/20 transition-all duration-500">
                        <div className="flex justify-between items-start mb-6">
                            <stat.icon size={24} className={`${stat.color} group-hover:scale-110 transition-transform`} />
                            <div className="h-px w-8 bg-primary/10" />
                        </div>
                        <p className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                        <p className={`text-4xl font-serif font-black ${stat.color} tracking-tighter italic`}>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="bg-[#1C1917] p-12 rounded-sharp shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cta/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />

                <h2 className="text-2xl font-serif font-black text-white mb-8 italic tracking-tight">Ecosystem Visibility</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(content.sections).map(([key, value]) => (
                        <div key={key} className="flex flex-col gap-4 p-6 bg-white/5 rounded-sharp border border-white/5 hover:bg-white/10 transition-all cursor-default">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">
                                {key.replace(/([A-Z])/g, ' $1')}
                            </span>
                            <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-sharp shadow-[0_0_10px_rgba(0,0,0,0.5)] ${value ? 'bg-cta animate-pulse' : 'bg-white/10'}`} />
                                <span className={`text-xs font-bold uppercase tracking-[0.2em] ${value ? 'text-white' : 'text-white/20'}`}>
                                    {value ? 'Visible' : 'Hidden'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex items-center gap-4 text-white/30 text-[9px] font-bold uppercase tracking-[0.3em]">
                    <div className="h-px flex-1 bg-white/5" />
                    <span>Real-time Ecosystem Control</span>
                    <div className="h-px flex-1 bg-white/5" />
                </div>
            </div>
        </div>
    );
}
