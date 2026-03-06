import { Sprout } from "lucide-react";

export default function DailyUpdate() {
    return (
        <section className="bg-background py-12 border-b border-primary/5">
            <div className="container mx-auto px-6">
                <div className="max-w-lg mx-auto liquid-glass rounded-[2.5rem] p-8 border border-primary/5 shadow-2xl">
                    <h3 className="text-primary font-serif font-black mb-6 flex items-center gap-3">
                        <Sprout size={20} className="text-cta" />
                        <span className="tracking-tight italic text-xl">Today from the Gaon</span>
                    </h3>
                    <ul className="space-y-4 text-[11px] text-secondary font-bold uppercase tracking-[0.2em]">
                        <li className="flex justify-between items-center border-b border-primary/5 pb-2">
                            <span>Wheat harvested</span>
                            <span className="text-primary font-serif italic normal-case text-base">This week</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-primary/5 pb-2">
                            <span>Oil pressed</span>
                            <span className="text-primary font-serif italic normal-case text-base">Last 7 days</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Packing status</span>
                            <div className="flex items-center gap-2 text-cta font-serif italic normal-case text-base">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>
                                </span>
                                <span>In progress</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
