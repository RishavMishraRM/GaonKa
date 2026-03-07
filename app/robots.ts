import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/products", "/press", "/b2b"],
        disallow: [
          "/admin-gaonka-9fX72K/",
          "/api/",
          "/private/",
        ],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/products", "/press", "/b2b"],
        disallow: ["/admin-gaonka-9fX72K/", "/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/products", "/press", "/b2b"],
        disallow: ["/admin-gaonka-9fX72K/", "/api/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/products", "/press", "/b2b"],
        disallow: ["/admin-gaonka-9fX72K/", "/api/"],
      },
    ],
    sitemap: "https://gaonka.shop/sitemap.xml",
  };
}
