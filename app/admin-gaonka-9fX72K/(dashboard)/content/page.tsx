import { getSiteContent } from "@/lib/db";
import ContentEditor from "./ContentEditor";

export default async function WebsiteTextCMS() {
    const content = await getSiteContent();

    return (
        <div className="space-y-8 max-w-4xl">
            <header>
                <h1 className="text-3xl font-bold text-brown-900 border-b-2 border-brown-700/10 pb-4">Website Text CMS</h1>
                <p className="text-stone-500 mt-2 italic">Refine the words that represent GaonKa.</p>
            </header>

            <ContentEditor initialContent={content} />
        </div>
    );
}
