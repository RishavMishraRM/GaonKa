interface WhoNotForContent {
    title: string;
    text: string;
}

export default function WhoNotFor({ content }: { content?: WhoNotForContent }) {
    if (!content) return null;

    return (
        <section className="py-16 bg-primary text-white border-y border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-black italic whitespace-nowrap">
                        {content.title}
                    </h3>
                    <div className="hidden md:block w-px h-12 bg-white/20" />
                    <p className="text-white/70 text-lg md:text-xl font-sans font-light tracking-wide max-w-xl">
                        {content.text}
                    </p>
                </div>
            </div>
        </section>
    );
}
