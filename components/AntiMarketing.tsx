interface AntiMarketingContent {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
}

export default function AntiMarketing({ content }: { content?: AntiMarketingContent }) {
    if (!content) return null;

    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-cta mb-12">
                    {content.title}
                </h3>
                <ul className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-lg font-serif italic">
                    {[content.p1, content.p2, content.p3, content.p4].map((point, i) => (
                        point && (
                            <li key={i} className="flex items-center justify-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                                <span className="text-cta font-bold">✕</span> {point}
                            </li>
                        )
                    ))}
                </ul>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-24 bg-cta/10 blur-[100px] -rotate-12 pointer-events-none" />
        </section>
    );
}
