import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FileText, ShoppingBasket, HelpCircle, Newspaper } from "lucide-react";
import AdminLogoutButton from "./LogoutButton";

const BASE_PATH = "/admin-gaonka-9fX72K";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession();
    if (!session) {
        redirect(`${BASE_PATH}/login`);
    }

    const navItems = [
        { label: "Dashboard", href: BASE_PATH, icon: LayoutDashboard },
        { label: "Website Text", href: `${BASE_PATH}/content`, icon: FileText },
        { label: "Products", href: `${BASE_PATH}/products`, icon: ShoppingBasket },
        { label: "FAQs", href: `${BASE_PATH}/faq`, icon: HelpCircle },
        { label: "Press / Media", href: `${BASE_PATH}/press`, icon: Newspaper },
    ];

    return (
        <div className="min-h-screen bg-[#FAFAF9] flex font-sans selection:bg-cta selection:text-white">
            {/* Sidebar - Sharp & Premium */}
            <aside className="w-72 bg-[#1C1917] text-stone-400 flex flex-col fixed inset-y-0 border-r border-white/5 shadow-2xl z-50">
                <div className="p-8 border-b border-white/5 flex flex-col items-center">
                    <div className="text-3xl font-serif font-black text-white tracking-tighter italic mb-1">
                        GaonKa
                    </div>
                    <div className="h-px w-8 bg-cta my-2" />
                    <p className="text-[9px] uppercase tracking-[0.4em] opacity-40 font-bold">Admin Interior</p>
                </div>

                <nav className="flex-1 p-6 space-y-2 mt-4 overflow-y-auto no-scrollbar">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-4 px-5 py-4 rounded-sharp hover:bg-white/5 hover:text-white transition-all duration-300 group border border-transparent hover:border-white/10"
                        >
                            <item.icon size={18} className="group-hover:scale-110 transition-transform duration-300 text-cta" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-6 border-t border-white/5 bg-black/20">
                    <AdminLogoutButton />
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-72 min-h-screen relative">
                {/* Decorative depth */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cta/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="p-12 relative z-10 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
