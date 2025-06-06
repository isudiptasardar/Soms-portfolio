import publicationsData from "@/data/publications.json"
import { cache } from "react"

export type Publication = {
  id: string | number
  year: number
  type: string
  authors: string[]
  title: string
  journal?: string
  publisher?: string
  paperImage: string
  publicationDate: string
}

// Cache the publications data to avoid redundant processing
export const getAllPublications = cache((): Publication[] => {
  return publicationsData.publications
})

export const getRecentPublications = cache((count = 5): Publication[] => {
  return [...getAllPublications()]
    .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
    .slice(0, count)
})

export const getPublicationsByYear = cache((): Record<string, Publication[]> => {
  return getAllPublications().reduce(
    (acc, publication) => {
      const year = publication.year.toString()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(publication)
      return acc
    },
    {} as Record<string, Publication[]>,
  )
})

export const getPublicationById = cache((id: string | number): Publication | undefined => {
  return getAllPublications().find((pub) => pub.id === id)
})

export const getTotalPublicationsCount = cache((): number => {
  return getAllPublications().length
})

export const getPublicationsByType = cache((type: string): Publication[] => {
  return getAllPublications().filter((pub) => pub.type === type)
})

export const getPublicationTypes = cache((): string[] => {
  const types = getAllPublications().map((pub) => pub.type)
  return [...new Set(types)].sort()
})

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatAuthors(authors: string[], short = false): string {
  if (short) {
    if (authors.length <= 2) {
      return authors.join(" & ")
    }
    return `${authors[0]} et al.`
  }

  return authors.join(", ")
}

export function getPublicationYear(dateString: string): number {
  return new Date(dateString).getFullYear()
}
