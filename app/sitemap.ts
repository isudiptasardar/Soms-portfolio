import type { MetadataRoute } from "next"
import { getAllPublications } from "@/lib/publications"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://somenath.biomolecular.space"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const publications = getAllPublications()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/awards`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Outreach pages
  const outreachPages = [
    "research-projects",
    "conference-presentations",
    "expert-webinars",
    "scientific-organizations",
    "volunteer-work",
    "dutta-in-news",
  ].map((slug) => ({
    url: `${baseUrl}/outreach/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Individual publication pages
  const publicationPages = publications.map((pub) => ({
    url: `${baseUrl}/publications/${pub.id}`,
    lastModified: new Date(pub.publicationDate),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }))

  return [...mainPages, ...outreachPages, ...publicationPages]
}
