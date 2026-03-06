import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://gaonka.shop"; // Updated to primary Organic Shop domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1, // Core focus: The main shop
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "daily", // Faster updates because products matter
            priority: 0.9, 
        },
        {
            url: `${baseUrl}/press`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
