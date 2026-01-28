import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use your deployed site URL explicitly for Google Search Console
  const baseUrl =
    "https://pblprojectterm-2-group2-grade10-a-t4dd-iycojd37j.vercel.app";

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
