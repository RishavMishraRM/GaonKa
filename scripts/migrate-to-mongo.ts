import { MongoClient } from 'mongodb';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;
const DATA_DIR = path.join(process.cwd(), 'data');
const PRODUCTS_JSON_FILE = path.join(DATA_DIR, 'products.json');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');

async function migrate() {
    if (!MONGODB_URI) {
        console.error("❌ MONGODB_URI is not defined in .env.local");
        process.exit(1);
    }

    console.log("🚀 Starting Migration...");
    const client = new MongoClient(MONGODB_URI);

    try {
        await client.connect();
        const db = client.db('gaonka');

        // Migrate Products
        console.log("📦 Migrating Products...");
        const productsRaw = await fs.readFile(PRODUCTS_JSON_FILE, 'utf-8');
        const products = JSON.parse(productsRaw);

        if (products.length > 0) {
            // Use products.json data
            await db.collection('products').deleteMany({}); // Clear existing
            await db.collection('products').insertMany(products);
            console.log(`✅ ${products.length} products migrated successfully!`);
        }

        // Migrate Site Content
        console.log("📝 Migrating Site Content...");
        const contentRaw = await fs.readFile(CONTENT_FILE, 'utf-8');
        const content = JSON.parse(contentRaw);

        await db.collection('settings').updateOne(
            { type: 'site_content' },
            { $set: { type: 'site_content', data: content } },
            { upsert: true }
        );
        console.log("✅ Site content migrated successfully!");

        console.log("🎉 Migration complete! Your data is now in MongoDB.");

    } catch (error) {
        console.error("❌ Migration failed:", error);
    } finally {
        await client.close();
    }
}

migrate();
