import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/products"],
      disallow: [
        "/admin-gaonka-9fX72K/",
        "/api/",
        "/private/",
        "/*.json", // Prevent bots from downloading internal JSON payloads
      ],
    },
    sitemap: "https://gaonka.shop/sitemap.xml",
  };
}
