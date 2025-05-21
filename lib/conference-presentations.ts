import conferencesData from "@/data/conference-presentations.json"
import { cache } from "react"

export type Conference = {
  year: number
  title: string
  type?: string
  event: string
  location: string
  country: string
}

// Cache the conferences data to avoid redundant processing
export const getAllConferences = cache((): Conference[] => {
  return conferencesData.ScientificConferences
})

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
  return Array.from(types).sort()
})

export const getConferenceCountries = cache((): string[] => {
  const countries = new Set<string>()
  getAllConferences().forEach((conference) => {
    countries.add(conference.country)
  })
  return Array.from(countries).sort()
})

export const getYears = cache((): number[] => {
  const years = new Set<number>()
  getAllConferences().forEach((conference) => {
    years.add(conference.year)
  })
  return Array.from(years).sort((a, b) => b - a) // Sort in descending order
})
