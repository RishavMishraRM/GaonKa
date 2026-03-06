"use client";

import { useState } from "react";
import { Trash2, Plus, Save } from "lucide-react";
import { getSiteContent, saveSiteContent } from "@/lib/db"; // Error: can't use db in client. I need an action.
// Actually I should use the action I created or a new one.
import { updateFaqAction } from "../cms-actions";

export default function FAQEditor({ initialFaqs }: { initialFaqs: { q: string, a: string }[] }) {
    const [faqs, setFaqs] = useState(initialFaqs);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleAdd = () => {
        setFaqs([...faqs, { q: "", a: "" }]);
    };

    const handleRemove = (index: number) => {
        setFaqs(faqs.filter((_, i) => i !== index));
    };

    const handleChange = (index: number, field: "q" | "a", value: string) => {
        const newFaqs = [...faqs];
        newFaqs[index][field] = value;
        setFaqs(newFaqs);
    };

    const handleSave = async () => {
        setLoading(true);
        setMessage("");
        const result = await updateFaqAction(faqs);
        if (result.success) {
            setMessage("FAQs updated successfully!");
        } else {
            setMessage("Error saving FAQs.");
        }
        setLoading(false);
    };

    return (
        <div className="space-y-6">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4 relative group">
                        <button
                            onClick={() => handleRemove(index)}
                            className="absolute top-6 right-6 p-2 text-stone-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        >
                            <Trash2 size={18} />
                        </button>
                        <div>
                            <label className="block text-[10px] font-black uppercase text-stone-400 mb-1 tracking-widest">Question</label>
                            <input
                                value={faq.q}
                                onChange={(e) => handleChange(index, "q", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg bg-stone-50 outline-none focus:border-brown-700 font-bold text-brown-900"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black uppercase text-stone-400 mb-1 tracking-widest">Answer</label>
                            <textarea
                                value={faq.a}
                                onChange={(e) => handleChange(index, "a", e.target.value)}
                                rows={2}
                                className="w-full px-4 py-2 border rounded-lg bg-stone-50 outline-none focus:border-brown-700 text-stone-600 leading-relaxed"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between gap-4 pt-4">
                <button
                    onClick={handleAdd}
                    className="px-6 py-3 rounded-xl border-2 border-dashed border-stone-200 text-stone-400 font-bold hover:border-brown-700 hover:text-brown-700 transition-all flex items-center gap-2"
                >
                    <Plus size={18} />
                    <span>Add Another Question</span>
                </button>

                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="bg-brown-900 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-green-800 disabled:opacity-50 transition-all shadow-xl"
                >
                    <Save size={18} />
                    <span>{loading ? "Saving..." : "Save FAQs"}</span>
                </button>
            </div>
            {message && <p className="text-center font-bold text-green-700 italic">{message}</p>}
        </div>
    );
}
