import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');
const PRODUCTS_JSON_FILE = path.join(DATA_DIR, 'products.json');

export interface SiteContent {
    hero: {
        title: string;
        subtitle: string;
        quote: string;
    };
    sections: {
        dailyUpdate: boolean;
        process: boolean;
        farmers: boolean;
        faq: boolean;
        press: boolean;
        antiMarketing: boolean;
        whoNotFor: boolean;
    };
    source: {
        text: string;
    };
    story: {
        title: string;
        content: string;
    };
    process: {
        title: string;
        subtitle: string;
    };
    whoNotFor: {
        title: string;
        text: string;
    };
    antiMarketing: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
        p4: string;
    };
    farmers: {
        title: string;
        text: string;
    };
    footer: {
        text: string;
    };
    contact: {
        email: string;
        phone: string;
    };
    faqs: Array<{ q: string; a: string }>;
    press: Array<{ id: string; title: string; source: string; date: string; link: string }>;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    filterCategory: string;
    price: string;
    qty: string;
    desc: string;
    batch: string;
    processing: string;
    color: string;
    image: string;
    enabled: boolean;
    stockLeft?: number;
    harvestStatus?: string;
}

export async function getSiteContent(): Promise<SiteContent> {
    try {
        const data = await fs.readFile(CONTENT_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return defaultContent as SiteContent;
    }
}

export async function saveSiteContent(content: SiteContent) {
    await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2));
}

export async function getProducts(): Promise<Product[]> {
    try {
        const data = await fs.readFile(PRODUCTS_JSON_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export async function saveProducts(products: Product[]) {
    await fs.writeFile(PRODUCTS_JSON_FILE, JSON.stringify(products, null, 2));
}

const defaultContent = {
    hero: {
        title: "GaonKa",
        subtitle: "Gaon Se Ghar Tak",
        quote: "“Real food. No preservatives. From villages you can trust.”"
    },
    sections: {
        dailyUpdate: true,
        process: true,
        farmers: true,
        faq: true,
        press: true,
        antiMarketing: true,
        whoNotFor: true
    },
    source: {
        text: "Sourced from villages near Siwan."
    },
    story: {
        title: "Our Story",
        content: "Born from the fields of Bihar, GaonKa is a tribute to the honest, hardworking farmers who feed the nation. We bring you the produce exactly as it is prepared in our village kitchens."
    },
    footer: {
        text: "© 2026 GaonKa. All rights reserved."
    }
};
