import conferencesData from "@/data/conference-presentations.json"
import { cache } from "react"

export type Conference = {
  year: number
  title: string
  type?: string
  event: string
  location: string
}

// Cache the conferences data to avoid redundant processing
export const getAllConferences = cache((): Conference[] => {
  return conferencesData.ScientificConferences
})

// Extract country from location string
export const extractCountry = (location: string): string => {
  const parts = location.split(",")
  if (parts.length > 0) {
    // Get the last part which is typically the country
    const lastPart = parts[parts.length - 1].trim()
    // If it's a country like "USA" or "India", return it
    return lastPart
  }
  return location
}

export const getConferencesByYear = cache((): Record<number, Conference[]> => {
  return getAllConferences().reduce(
    (acc, conference) => {
      const year = conference.year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(conference)
      return acc
    },
    {} as Record<number, Conference[]>,
  )
})

export const getConferenceTypes = cache((): string[] => {
  const types = new Set<string>()
  getAllConferences().forEach((conference) => {
    if (conference.type) {
      types.add(conference.type)
    }
  })
  return Array.from(types)
})

export const getConferenceCountries = cache((): string[] => {
  const countries = new Set<string>()
  getAllConferences().forEach((conference) => {
    const country = extractCountry(conference.location)
    countries.add(country)
  })
  return Array.from(countries)
})
