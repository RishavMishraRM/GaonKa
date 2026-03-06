export default function QuietFAQ({ faqs }: { faqs: { q: string, a: string }[] }) {
    if (!faqs) return null;

    return (
        <section className="py-24 bg-[#F5F5F4] relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    }),
                }}
            />

            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                    {/* Sticky Sidebar Header */}
                    <div className="md:w-1/3">
                        <div className="md:sticky md:top-32">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cta mb-2 block">
                                Transparency
                            </span>
                            <h3 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6 leading-tight">
                                Common <br /> Curiosities.
                            </h3>
                            <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">
                                We operate differently from standard grocery apps. Here is why we do what we do.
                            </p>
                        </div>
                    </div>

                    {/* Grid Content */}
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm border border-primary/5 hover:border-cta/20 hover:shadow-lg transition-all duration-300">
                                <h4 className="font-serif font-bold text-primary text-lg mb-3 group-hover:text-cta transition-colors">
                                    {faq.q}
                                </h4>
                                <p className="text-secondary/70 text-sm leading-relaxed font-sans">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
