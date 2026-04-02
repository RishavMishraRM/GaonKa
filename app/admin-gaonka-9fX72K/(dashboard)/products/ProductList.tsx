"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Edit2, Trash2, Eye, EyeOff, Package, Tag, Save, X, PlusCircle, MinusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { deleteProductAction, updateProductAction, addProductAction } from "../cms-actions";

export default function ProductList({ initialProducts }: { initialProducts: any[] }) {
    const [products, setProducts] = useState(initialProducts);
    const [isEditing, setIsEditing] = useState<any>(null);
    const [isAdding, setIsAdding] = useState(false);
    
    // Dynamic attributes state
    const [attributes, setAttributes] = useState<{name: string, value: string}[]>([]);

    useEffect(() => {
        if (isEditing) {
            // Load existing attributes or migrate legacy ones if they exist
            const legacyAttrs = [
                isEditing.harvestStatus ? { name: "Harvest Status", value: isEditing.harvestStatus } : null,
                isEditing.batch ? { name: "Batch Code", value: isEditing.batch } : null,
                isEditing.processing ? { name: "Processing Cycle", value: isEditing.processing } : null,
            ].filter(Boolean) as { name: string, value: string }[];
            
            const existingAttrs = isEditing.attributes || [];
            
            // Only use legacy if existingAttrs is empty, avoiding duplication
            setAttributes(existingAttrs.length > 0 ? existingAttrs : legacyAttrs);
        } else {
            setAttributes([]);
        }
    }, [isEditing, isAdding]);

    const handleAddAttribute = () => setAttributes([...attributes, { name: "", value: "" }]);
    const handleAttributeChange = (index: number, field: "name" | "value", value: string) => {
        const newAttrs = [...attributes];
        newAttrs[index][field] = value;
        setAttributes(newAttrs);
    };
    const handleRemoveAttribute = (index: number) => {
        setAttributes(attributes.filter((_, i) => i !== index));
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this product?")) {
            await deleteProductAction(id);
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const toggleStatus = async (product: any) => {
        const newStatus = !product.enabled;
        await updateProductAction(product.id, { enabled: newStatus });
        setProducts(products.map(p => p.id === product.id ? { ...p, enabled: newStatus } : p));
    };

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-end border-b border-primary/10 pb-8">
                <div>
                    <h1 className="text-4xl font-serif font-black tracking-tighter text-primary italic mb-2">Inventory Management</h1>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-secondary/40 font-bold">Manage universal product catalog</p>
                </div>
                <button
                    onClick={() => setIsAdding(true)}
                    className="bg-primary text-white px-8 py-4 rounded-sharp font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 hover:bg-cta transition-all duration-300 shadow-xl shadow-primary/10"
                >
                    <Plus size={16} />
                    <span>Upload New Product</span>
                </button>
            </div>

            <div className="bg-white rounded-sharp border border-primary/5 shadow-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-primary/5 text-secondary/40 uppercase tracking-[0.25em] text-[9px] font-black border-b border-primary/5">
                        <tr>
                            <th className="px-8 py-5">Product Details</th>
                            <th className="px-8 py-5">Price / Vol</th>
                            <th className="px-8 py-5">Inventory</th>
                            <th className="px-8 py-5">Custom Attributes</th>
                            <th className="px-8 py-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                        {products.map((product) => {
                            const attrs = product.attributes || [
                                product.harvestStatus ? { name: "Harvest Status", value: product.harvestStatus } : null,
                            ].filter(Boolean);

                            return (
                            <tr key={product.id} className="hover:bg-primary/[0.02] transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-6">
                                        <div className={`w-14 h-14 rounded-sharp relative overflow-hidden flex-shrink-0 ${product.color || 'bg-stone-50'} border border-primary/5 shadow-sm`}>
                                            <Image src={product.image || '/images/Image12_Product.png'} alt={product.name} fill className="object-contain p-2 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <p className="font-serif font-bold text-primary text-lg tracking-tight">{product.name}</p>
                                            <p className="text-[9px] text-secondary/40 uppercase font-black tracking-widest mt-0.5">{product.category}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <p className="font-serif font-bold text-primary text-base">{product.price}</p>
                                    <p className="text-[10px] text-secondary/50 font-medium uppercase tracking-tighter italic">{product.qty}</p>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-3 bg-primary/5 border border-primary/5 px-4 py-2 rounded-detail w-fit">
                                        <Package size={14} className={product.stockLeft < 10 ? "text-red-500" : "text-cta"} />
                                        <span className={`font-black text-xs tracking-tighter ${product.stockLeft < 10 ? "text-red-500" : "text-primary"}`}>{product.stockLeft || 0} Units</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    {attrs.length > 0 ? (
                                        <div className="flex flex-wrap items-center gap-2">
                                            {attrs.slice(0, 2).map((a: any, i: number) => (
                                                <span key={i} className="bg-white border border-primary/10 text-primary px-3 py-1 rounded-detail text-[9px] font-black uppercase tracking-widest shadow-sm">
                                                    {a.name}: <span className="text-cta">{a.value}</span>
                                                </span>
                                            ))}
                                            {attrs.length > 2 && <span className="text-[9px] text-secondary/50 font-bold">+{attrs.length - 2} more</span>}
                                        </div>
                                    ) : (
                                        <span className="text-[10px] text-secondary/30 italic">No custom attributes</span>
                                    )}
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button onClick={() => toggleStatus(product)} className={`p-3 rounded-sharp border transition-all ${product.enabled !== false ? 'border-cta/20 text-cta bg-cta/5 hover:bg-cta hover:text-white' : 'border-stone-200 text-stone-400 bg-stone-50 hover:bg-stone-200'}`}>
                                            {product.enabled !== false ? <Eye size={18} /> : <EyeOff size={18} />}
                                        </button>
                                        <button
                                            onClick={() => setIsEditing(product)}
                                            className="p-3 bg-white border border-primary/10 text-primary hover:bg-primary hover:text-white rounded-sharp transition-all duration-300 shadow-sm"
                                        >
                                            <Edit2 size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="p-3 bg-white border border-red-100 text-red-400 hover:bg-red-500 hover:text-white rounded-sharp transition-all duration-300 shadow-sm"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <AnimatePresence>
                {(isEditing || isAdding) && (
                    <div className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#FAFAF9] rounded-sharp p-12 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-[0_0_100px_rgba(0,0,0,0.5)] relative border border-white/10"
                        >
                            <button
                                onClick={() => { setIsEditing(null); setIsAdding(false); setAttributes([]); }}
                                className="absolute top-8 right-8 text-secondary/40 hover:text-primary transition-colors p-2"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-12">
                                <h2 className="text-4xl font-serif font-black text-primary mb-2 italic">
                                    {isAdding ? "Upload New Product" : "Edit Product Record"}
                                </h2>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-cta font-bold">{isAdding ? "Catalog Entrance" : `Reference: ${isEditing?.id}`}</p>
                            </div>

                            <form action={async (formData) => {
                                const data = Object.fromEntries(formData);
                                // Ensure stockLeft is a number
                                if (data.stockLeft) data.stockLeft = parseInt(data.stockLeft as string) as any;
                                
                                // Clean legacy
                                data.harvestStatus = "";
                                data.batch = "";
                                data.processing = "";
                                
                                // Inject custom attributes string to be parsed on backend
                                data.attributes = JSON.stringify(attributes.filter(a => a.name.trim() !== "" && a.value.trim() !== ""));

                                if (isAdding) {
                                    await addProductAction(data);
                                } else {
                                    await updateProductAction(isEditing.id, data);
                                }
                                window.location.reload();
                            }} className="grid grid-cols-2 gap-8">
                                <div className="col-span-2">
                                    <label className="block text-[10px] font-black uppercase text-secondary/40 mb-2 tracking-[0.2em]">Product Name</label>
                                    <input name="name" defaultValue={isEditing?.name} className="w-full px-5 py-4 border-b-2 border-primary/10 bg-transparent outline-none focus:border-cta transition-colors font-serif text-xl font-bold" placeholder="e.g. Leather Wallet / Mustard Oil" required />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase text-secondary/40 mb-2 tracking-[0.2em]">Price / Currency</label>
                                    <input name="price" defaultValue={isEditing?.price} className="w-full px-5 py-4 border-b-2 border-primary/10 bg-transparent outline-none focus:border-cta transition-colors font-sans text-lg font-bold" placeholder="e.g. $45 / ₹850" required />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase text-secondary/40 mb-2 tracking-[0.2em]">Volume / Weight / Size</label>
                                    <input name="qty" defaultValue={isEditing?.qty} className="w-full px-5 py-4 border-b-2 border-primary/10 bg-transparent outline-none focus:border-cta transition-colors font-sans text-lg font-bold" placeholder="e.g. 1L / XL / 500g" required />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase text-secondary/40 mb-2 tracking-[0.2em]">Stock Inventory</label>
                                    <div className="relative">
                                        <Package className="absolute right-4 top-1/2 -translate-y-1/2 text-cta" size={18} />
                                        <input type="number" name="stockLeft" defaultValue={isEditing?.stockLeft || 0} className="w-full px-5 py-4 border-b-2 border-primary/10 bg-transparent outline-none focus:border-cta transition-colors font-sans text-lg font-bold" placeholder="12" required />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-[10px] font-black uppercase text-secondary/40 mb-2 tracking-[0.2em]">Primary Category</label>
                                    <input name="category" defaultValue={isEditing?.category} className="w-full px-5 py-4 border-b-2 border-primary/10 bg-transparent outline-none focus:border-cta transition-colors font-sans text-lg font-bold" placeholder="e.g. Cold Pressed / Electronics" required />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-[10px] font-black uppercase text-secondary/40 mb-2 tracking-[0.2em]">Product Details / Description</label>
                                    <textarea name="desc" defaultValue={isEditing?.desc} rows={3} className="w-full px-5 py-4 border-b-2 border-primary/10 bg-transparent outline-none focus:border-cta transition-colors font-sans text-base leading-relaxed" placeholder="Tell the story and specifics of this product..." required />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase text-secondary/40 mb-2 tracking-[0.2em]">Filter / Tag Category</label>
                                    <input name="filterCategory" defaultValue={isEditing?.filterCategory} className="w-full px-5 py-4 border-b-2 border-primary/10 bg-transparent outline-none focus:border-cta transition-colors font-sans text-sm font-bold uppercase tracking-widest" placeholder="e.g. Oil / Gadget" required />
                                </div>
                                
                                {/* Dynamic Attributes Section */}
                                <div className="col-span-2 mt-4 border-t border-primary/10 pt-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <label className="block text-[10px] font-black uppercase text-primary mb-0 tracking-[0.2em]">Custom Product Attributes</label>
                                        <button 
                                            type="button" 
                                            onClick={handleAddAttribute}
                                            className="text-cta flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest hover:text-primary transition-colors"
                                        >
                                            <PlusCircle size={14} /> Add Detail
                                        </button>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {attributes.length === 0 && (
                                            <p className="text-xs text-secondary/40 italic">No custom attributes defined. Click 'Add Detail' to customize this product.</p>
                                        )}
                                        {attributes.map((attr, idx) => (
                                            <div key={idx} className="flex gap-4 items-center bg-white p-2 rounded-sharp border border-primary/5 shadow-sm">
                                                <div className="flex-1 relative">
                                                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/20" size={14} />
                                                    <input 
                                                        value={attr.name}
                                                        onChange={(e) => handleAttributeChange(idx, "name", e.target.value)}
                                                        className="w-full px-10 py-3 bg-transparent outline-none text-sm font-bold placeholder-primary/20" 
                                                        placeholder="Name (e.g. Material / Origin)" 
                                                    />
                                                </div>
                                                <div className="w-px h-8 bg-primary/10"></div>
                                                <div className="flex-[2]">
                                                    <input 
                                                        value={attr.value}
                                                        onChange={(e) => handleAttributeChange(idx, "value", e.target.value)}
                                                        className="w-full px-4 py-3 bg-transparent outline-none text-sm placeholder-primary/20 text-secondary/70" 
                                                        placeholder="Value (e.g. Genuine Leather / India)" 
                                                    />
                                                </div>
                                                <button 
                                                    type="button" 
                                                    onClick={() => handleRemoveAttribute(idx)}
                                                    className="p-3 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-sharp transition-colors"
                                                >
                                                    <MinusCircle size={18} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <input type="hidden" name="image" defaultValue={isEditing?.image || "/images/Image12_Product.png"} />
                                <input type="hidden" name="color" defaultValue={isEditing?.color || "bg-stone-50"} />

                                <div className="col-span-2 pt-8">
                                    <button type="submit" className="w-full bg-primary text-white py-6 rounded-sharp font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-4 hover:bg-cta transition-all duration-500 shadow-2xl shadow-primary/20">
                                        <Save size={18} />
                                        <span>{isAdding ? "Enter into Catalog" : "Secure Record"}</span>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
