import { getProducts } from "@/lib/db";
import ProductList from "./ProductList";

export default async function AdminProducts() {
    const products = await getProducts();

    return (
        <div className="space-y-8">
            <header className="flex items-center justify-between border-b-2 border-brown-700/10 pb-4">
                <div>
                    <h1 className="text-3xl font-bold text-brown-900 leading-tight">Village Products</h1>
                    <p className="text-stone-500 mt-1 italic">Manage the harvest catalog.</p>
                </div>
            </header>

            <ProductList initialProducts={products} />
        </div>
    );
}
