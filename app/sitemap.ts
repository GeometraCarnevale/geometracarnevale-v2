import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.geometracarnevale.it";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/certificazione-energetica-ape`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pratiche-catastali`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pratiche-urbanistiche`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apertura-attivita`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/perizie-tecniche`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
