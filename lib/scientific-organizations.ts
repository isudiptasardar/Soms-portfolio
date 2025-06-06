import organizationsData from "@/data/scientific-organizations.json"
import { cache } from "react"

export type Membership = {
  organization: string
  website: string
}

export type OrganizationYear = {
  year: number
  memberships: Membership[]
}

// Cache the organizations data to avoid redundant processing
export const getAllOrganizations = cache((): OrganizationYear[] => {
  return organizationsData.memberships_in_scientific_organizations
})

export const getOrganizationsByYear = cache((): Record<number, Membership[]> => {
  return getAllOrganizations().reduce(
    (acc, yearData) => {
      acc[yearData.year] = yearData.memberships
      return acc
    },
    {} as Record<number, Membership[]>,
  )
})

// Get total count of organizations
export const getTotalOrganizationsCount = cache((): number => {
  return getAllOrganizations().reduce((total, yearData) => {
    return total + yearData.memberships.length
  }, 0)
})

// Get all unique years
export const getOrganizationYears = cache((): number[] => {
  return getAllOrganizations()
    .map((yearData) => yearData.year)
    .sort((a, b) => b - a) // Sort years in descending order
})
