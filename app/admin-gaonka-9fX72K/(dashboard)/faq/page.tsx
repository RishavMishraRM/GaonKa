import { getSiteContent } from "@/lib/db";
import FAQEditor from "./FAQEditor";

export default async function AdminFAQ() {
    const content = await getSiteContent();

    return (
        <div className="space-y-8 max-w-3xl">
            <header className="border-b-2 border-brown-700/10 pb-4">
                <h1 className="text-3xl font-bold text-brown-900 leading-tight">Quiet FAQ Management</h1>
                <p className="text-stone-500 mt-1 italic">Honest answers to common village questions.</p>
            </header>

            <FAQEditor initialFaqs={content.faqs || []} />
        </div>
    );
}
