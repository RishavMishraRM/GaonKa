import fs from 'fs/promises';
import path from 'path';
import clientPromise from './mongodb';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');
const PRODUCTS_JSON_FILE = path.join(DATA_DIR, 'products.json');

const DB_NAME = 'gaonka';

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
    attributes?: { name: string; value: string }[];
}

export async function getSiteContent(): Promise<SiteContent> {
    if (process.env.MONGODB_URI) {
        try {
            const client = await clientPromise;
            const db = client.db(DB_NAME);
            const settings = await db.collection('settings').findOne({ type: 'site_content' });
            if (settings && settings.data) {
                return settings.data as SiteContent;
            }
        } catch (error) {
            console.error("MongoDB getSiteContent Error:", error);
        }
    }

    // Fallback to File
    try {
        const data = await fs.readFile(CONTENT_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return defaultContent as SiteContent;
    }
}

export async function saveSiteContent(content: SiteContent) {
    if (process.env.MONGODB_URI) {
        try {
            const client = await clientPromise;
            const db = client.db(DB_NAME);
            await db.collection('settings').updateOne(
                { type: 'site_content' },
                { $set: { type: 'site_content', data: content } },
                { upsert: true }
            );
            return;
        } catch (error) {
            console.error("MongoDB saveSiteContent Error:", error);
        }
    }
    
    // Always fall back or duplicate to file if local for safety
    if (process.env.NODE_ENV === 'development') {
        await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2));
    }
}

export async function getProducts(): Promise<Product[]> {
    if (process.env.MONGODB_URI) {
        try {
            const client = await clientPromise;
            const db = client.db(DB_NAME);
            const products = await db.collection('products').find({}).toArray();
            return products.map(p => ({
                id: p.id || p._id.toString(),
                name: p.name,
                category: p.category,
                filterCategory: p.filterCategory,
                price: p.price,
                qty: p.qty,
                desc: p.desc,
                batch: p.batch,
                processing: p.processing,
                color: p.color,
                image: p.image,
                enabled: p.enabled,
                stockLeft: p.stockLeft,
                harvestStatus: p.harvestStatus,
                attributes: p.attributes || []
            })) as Product[];
        } catch (error) {
            console.error("MongoDB getProducts Error:", error);
        }
    }

    // Fallback to File
    try {
        const data = await fs.readFile(PRODUCTS_JSON_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export async function saveProducts(products: Product[]) {
    if (process.env.MONGODB_URI) {
        try {
            const client = await clientPromise;
            const db = client.db(DB_NAME);
            // In a small app like this, we replace the collection or update individually.
            // For now, we clear and insertMany to keep it simple and consistent with JSON behavior.
            await db.collection('products').deleteMany({});
            if (products.length > 0) {
                await db.collection('products').insertMany(products);
            }
            return;
        } catch (error) {
            console.error("MongoDB saveProducts Error:", error);
        }
    }

    // Always fall back or duplicate to file if local for safety
    if (process.env.NODE_ENV === 'development') {
        await fs.writeFile(PRODUCTS_JSON_FILE, JSON.stringify(products, null, 2));
    }
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
