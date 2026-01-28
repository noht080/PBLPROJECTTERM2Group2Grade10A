import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Prefer an explicit site URL, otherwise fall back to Vercel's URL in production
  const vercelUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);

  const baseUrl = vercelUrl ?? "http://localhost:3000";

  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
