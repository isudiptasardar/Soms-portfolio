import publicationsData from "@/data/publications.json"

export type Publication = {
  id: number
  year: number
  type: string
  authors: string[]
  title: string
  journal?: string
  publisher?: string
  paperImage: string
  publicationDate: string
}

export function getAllPublications(): Publication[] {
  return publicationsData.publications
}

export function getRecentPublications(count = 5): Publication[] {
  return [...publicationsData.publications]
    .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
    .slice(0, count)
}

export function getPublicationsByYear(): Record<string, Publication[]> {
  return publicationsData.publications.reduce(
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
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
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
