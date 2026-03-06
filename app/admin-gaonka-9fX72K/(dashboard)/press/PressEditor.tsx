"use client";

import { useState } from "react";
import { updatePressAction, updateContactAction } from "../cms-actions";
import { Trash, Plus, Save } from "lucide-react";

export default function PressEditor({ initialPress, initialContact }: { initialPress: any[], initialContact: any }) {
    const [press, setPress] = useState(initialPress);
    const [contact, setContact] = useState({
        email: initialContact?.email || "",
        phone: initialContact?.phone || ""
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleUpdate = (index: number, field: string, value: string) => {
        const newPress = [...press];
        newPress[index] = { ...newPress[index], [field]: value };
        setPress(newPress);
    };

    const handleAdd = () => {
        setPress([...press, {
            id: Date.now().toString(),
            title: "New Article",
            source: "",
            date: "",
            link: "#"
        }]);
    };

    const handleDelete = (index: number) => {
        const newPress = press.filter((_, i) => i !== index);
        setPress(newPress);
    };

    const handleSave = async () => {
        setLoading(true);
        setMessage("");

        try {
            // Save Contact
            const contactResult = await updateContactAction(contact);
            // Save Press
            const pressResult = await updatePressAction(press);

            if (contactResult.success && pressResult.success) {
                setMessage("Updated successfully!");
            } else {
                setMessage("Error updating.");
            }
        } catch (e) {
            setMessage("Error saving changes.");
        }

        setLoading(false);
    };

    return (
        <div className="space-y-12 pb-24">
            {/* Contact Info Section */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <header className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">
                        Contact Info (Media)
                    </h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Email</label>
                        <input
                            type="text"
                            value={contact.email}
                            onChange={(e) => setContact({ ...contact, email: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-stone-600 mb-1">Phone</label>
                        <input
                            type="text"
                            value={contact.phone}
                            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg outline-none focus:border-brown-700 bg-stone-50"
                        />
                    </div>
                </div>
            </section>

            {/* Press List Section */}
            <section className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <header className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-brown-700 uppercase tracking-widest text-[12px] opacity-60">
                        Press Coverage
                    </h2>
                    <button onClick={handleAdd} className="flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-800 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200">
                        <Plus size={16} /> Add New
                    </button>
                </header>

                <div className="space-y-4">
                    {press.map((item, index) => (
                        <div key={item.id} className="p-6 border border-stone-200 rounded-xl bg-stone-50/50 flex gap-4 items-start group">
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Headline</label>
                                    <input
                                        value={item.title}
                                        onChange={(e) => handleUpdate(index, "title", e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg text-sm font-bold text-brown-900 bg-white"
                                        placeholder="Article Title"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Source Name</label>
                                    <input
                                        value={item.source}
                                        onChange={(e) => handleUpdate(index, "source", e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg text-sm bg-white"
                                        placeholder="e.g. Village News"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Date</label>
                                    <input
                                        value={item.date}
                                        onChange={(e) => handleUpdate(index, "date", e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg text-sm bg-white"
                                        placeholder="e.g. Oct 2024"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Link URL</label>
                                    <input
                                        value={item.link}
                                        onChange={(e) => handleUpdate(index, "link", e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg text-sm font-mono text-blue-600 bg-white"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(index)}
                                className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <Trash size={18} />
                            </button>
                        </div>
                    ))}

                    {press.length === 0 && (
                        <div className="text-center py-12 text-stone-400 italic bg-stone-50 rounded-xl border border-dashed border-stone-200">
                            No press items yet.
                        </div>
                    )}
                </div>
            </section>

            <div className="sticky bottom-8 z-30 flex items-center justify-between bg-brown-900 text-white p-4 rounded-2xl shadow-2xl border border-white/10">
                <p className="font-bold text-stone-400 pl-4">{message || "You have unsaved changes."}</p>
                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="bg-white text-brown-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-green-700 hover:text-white transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
                >
                    {loading ? "Saving..." : <><Save size={18} /> Save All Changes</>}
                </button>
            </div>
        </div>
    );
}
