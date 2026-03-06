import { getSiteContent } from "@/lib/db";
import PressEditor from "./PressEditor";

export const dynamic = "force-dynamic";

export default async function AdminPressPage() {
    const content = await getSiteContent();

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-brown-900">Press & Media</h1>
                <p className="text-stone-500 mt-2">Manage contact info and press coverage.</p>
            </div>
            <PressEditor initialPress={content.press || []} initialContact={content.contact || {}} />
        </div>
    );
}
