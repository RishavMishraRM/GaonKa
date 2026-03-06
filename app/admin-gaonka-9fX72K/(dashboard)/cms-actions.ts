"use server";

import { getSiteContent, saveSiteContent, getProducts, saveProducts } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateContentAction(formData: FormData) {
    const content = await getSiteContent();

    // Map all form data to a plain object
    const data: any = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const newContent = {
        ...content,
        hero: {
            ...content.hero,
            title: data["hero.title"] || content.hero.title,
            subtitle: data["hero.subtitle"] || content.hero.subtitle,
            quote: data["hero.quote"] || content.hero.quote
        },
        story: {
            ...content.story,
            title: data["story.title"] || content.story.title,
            content: data["story.content"] || content.story.content
        },
        source: {
            ...content.source,
            text: data["source.text"] || content.source.text
        },
        footer: {
            ...content.footer,
            text: data["footer.text"] || content.footer.text
        },
        // New sections
        process: {
            ...content.process,
            title: data["process.title"] || content.process?.title || "",
            subtitle: data["process.subtitle"] || content.process?.subtitle || ""
        },
        whoNotFor: {
            ...content.whoNotFor,
            title: data["whoNotFor.title"] || content.whoNotFor?.title || "",
            text: data["whoNotFor.text"] || content.whoNotFor?.text || ""
        },
        antiMarketing: {
            ...content.antiMarketing,
            title: data["antiMarketing.title"] || content.antiMarketing?.title || "",
            p1: data["antiMarketing.p1"] || content.antiMarketing?.p1 || "",
            p2: data["antiMarketing.p2"] || content.antiMarketing?.p2 || "",
            p3: data["antiMarketing.p3"] || content.antiMarketing?.p3 || "",
            p4: data["antiMarketing.p4"] || content.antiMarketing?.p4 || ""
        },
        farmers: {
            ...content.farmers,
            title: data["farmers.title"] || content.farmers?.title || "",
            text: data["farmers.text"] || content.farmers?.text || ""
        }
    };

    await saveSiteContent(newContent);
    revalidatePath("/");
    return { success: true };
}

export async function toggleSectionAction(sectionKey: string) {
    const content = await getSiteContent();
    const newContent = {
        ...content,
        sections: {
            ...content.sections,
            [sectionKey]: !(content.sections as any)[sectionKey]
        }
    };
    await saveSiteContent(newContent);
    revalidatePath("/");
    return { success: true };
}

export async function updateProductAction(productId: string, data: any) {
    const products = await getProducts();
    const index = products.findIndex((p: any) => p.id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], ...data };
        await saveProducts(products);
        revalidatePath("/");
        revalidatePath("/products");
        return { success: true };
    }
    return { success: false };
}

export async function deleteProductAction(productId: string) {
    const products = await getProducts();
    const filtered = products.filter((p: any) => p.id !== productId);
    await saveProducts(filtered);
    revalidatePath("/");
    revalidatePath("/products");
    return { success: true };
}

export async function addProductAction(product: any) {
    const products = await getProducts();
    products.push({ ...product, id: Date.now().toString(), enabled: true });
    await saveProducts(products);
    revalidatePath("/");
    revalidatePath("/products");
    return { success: true };
}

export async function updateFaqAction(faqs: any[]) {
    const content = await getSiteContent();
    const newContent = { ...content, faqs };
    await saveSiteContent(newContent);
    revalidatePath("/");
    return { success: true };
}

export async function updatePressAction(press: any[]) {
    const content = await getSiteContent();
    const newContent = { ...content, press };
    await saveSiteContent(newContent);
    revalidatePath("/");
    revalidatePath("/press");
    return { success: true };
}

export async function updateContactAction(contact: { email: string; phone: string }) {
    const content = await getSiteContent();
    const newContent = { ...content, contact };
    await saveSiteContent(newContent);
    revalidatePath("/");
    revalidatePath("/press");
    return { success: true };
}
