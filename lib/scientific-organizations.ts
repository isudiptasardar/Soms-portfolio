import organizationsData from "@/data/scientific-organizations.json"
import { cache } from "react"

export type Organization = {
  year: number
  memberships: string[]
}

// Process markdown-style links to extract organization name and URL
export function processMarkdownLink(text: string): { name: string; url: string } {
  // Match pattern like [**Text**](url)
  const linkRegex = /\[\*\*(.*?)\*\*\]$$(.*?)$$/
  const match = text.match(linkRegex)

  if (match) {
    return {
      name: match[1],
      url: match[2],
    }
  }

  // If no match, return the text without markdown formatting
  return {
    name: text.replace(/\*\*/g, ""),
    url: "#",
  }
}

// Cache the organizations data to avoid redundant processing
export const getAllOrganizations = cache((): Organization[] => {
  return organizationsData.memberships_in_scientific_organizations
})

export const getOrganizationsByYear = cache((): Record<number, string[]> => {
  return getAllOrganizations().reduce(
    (acc, yearData) => {
      acc[yearData.year] = yearData.memberships
      return acc
    },
    {} as Record<number, string[]>,
  )
})
