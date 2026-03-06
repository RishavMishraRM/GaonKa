"use client";

import { useState } from "react";
import { updateContentAction } from "../cms-actions";

export default function ContentEditor({ initialContent }: { initialContent: any }) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSave = async (formData: FormData) => {
        setLoading(true);
        setMessage("");
        const result = await updateContentAction(formData);
        if (result.success) {
            setMessage("Changes saved successfully!");
        } else {
            setMessage("Error saving changes.");
        }
        setLoading(false);
    };

    // Helper for safe access
    const c = initialContent;

    return (
        <form action={handleSave} className="space-y-12 pb-24">
            {/* Hero Section */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">Hero Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Headline</label>
                        <input name="hero.title" defaultValue={c.hero?.title} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Subtitle (Italic)</label>
                        <input name="hero.subtitle" defaultValue={c.hero?.subtitle} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Quote Text</label>
                        <textarea name="hero.quote" defaultValue={c.hero?.quote} rows={3} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">Our Story</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Title</label>
                        <input name="story.title" defaultValue={c.story?.title} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Content Text</label>
                        <textarea name="story.content" defaultValue={c.story?.content} rows={5} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">Process Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Title</label>
                        <input name="process.title" defaultValue={c.process?.title} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Subtitle</label>
                        <input name="process.subtitle" defaultValue={c.process?.subtitle} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                </div>
            </section>

            {/* Who is it NOT for */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">"Who Not For" Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Title</label>
                        <input name="whoNotFor.title" defaultValue={c.whoNotFor?.title} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Text</label>
                        <textarea name="whoNotFor.text" defaultValue={c.whoNotFor?.text} rows={3} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                </div>
            </section>

            {/* Anti-Marketing */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">"What We Don't Do" Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Title</label>
                        <input name="antiMarketing.title" defaultValue={c.antiMarketing?.title} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-stone-600 mb-1">Point 1</label>
                            <input name="antiMarketing.p1" defaultValue={c.antiMarketing?.p1} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stone-600 mb-1">Point 2</label>
                            <input name="antiMarketing.p2" defaultValue={c.antiMarketing?.p2} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stone-600 mb-1">Point 3</label>
                            <input name="antiMarketing.p3" defaultValue={c.antiMarketing?.p3} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stone-600 mb-1">Point 4</label>
                            <input name="antiMarketing.p4" defaultValue={c.antiMarketing?.p4} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Farmers */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">Farmers Section</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Title</label>
                        <input name="farmers.title" defaultValue={c.farmers?.title} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Description</label>
                        <textarea name="farmers.text" defaultValue={c.farmers?.text} rows={3} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                </div>
            </section>

            {/* Misc */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">Global Info</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Village Source Text</label>
                        <input name="source.text" defaultValue={c.source?.text} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Footer Copyright Text</label>
                        <input name="footer.text" defaultValue={c.footer?.text} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50" />
                    </div>
                </div>
            </section>

            <div className="sticky bottom-8 z-30 flex items-center justify-between bg-brown-900 text-white p-4 rounded-2xl shadow-2xl border border-white/10">
                <p className="font-bold text-stone-400 pl-4">{message || "You have unsaved changes."}</p>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-white text-brown-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-green-700 hover:text-white transition-all active:scale-95 disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save All Changes"}
                </button>
            </div>
        </form>
    );
}
