import volunteerData from "@/data/volunteer-work.json"
import { cache } from "react"

export type VolunteerRole = {
  year: number
  roles: string[]
}

// Process markdown-style text to remove ** markers
export function processMarkdownText(text: string): string {
  return text.replace(/\*\*/g, "")
}

// Cache the volunteer data to avoid redundant processing
export const getAllVolunteerRoles = cache((): VolunteerRole[] => {
  return volunteerData.volunteering_and_representative_roles
})

export const getVolunteerRolesByYear = cache((): Record<number, string[]> => {
  return getAllVolunteerRoles().reduce(
    (acc, yearData) => {
      acc[yearData.year] = yearData.roles
      return acc
    },
    {} as Record<number, string[]>,
  )
})
