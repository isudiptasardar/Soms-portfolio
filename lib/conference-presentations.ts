import conferencesData from "@/data/conference-presentations.json"
import { cache } from "react"

export type ConferencePresentation = {
  id: number
  title: string
  organizer: string
  date: string
  type: string
  format: string
  skills: string[]
}

// Cache the conferences data to avoid redundant processing
export const getAllPresentations = cache((): ConferencePresentation[] => {
  return conferencesData.webinars
})

export const getPresentationsByYear = cache((): Record<number, ConferencePresentation[]> => {
  return getAllPresentations().reduce(
    (acc, presentation) => {
      const year = new Date(presentation.date).getFullYear()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(presentation)
      return acc
    },
    {} as Record<number, ConferencePresentation[]>,
  )
})

export const getPresentationTypes = cache((): string[] => {
  const types = new Set<string>()
  getAllPresentations().forEach((presentation) => {
    if (presentation.type) {
      types.add(presentation.type)
    }
  })
  return Array.from(types).sort()
})

export const getPresentationFormats = cache((): string[] => {
  const formats = new Set<string>()
  getAllPresentations().forEach((presentation) => {
    if (presentation.format) {
      formats.add(presentation.format)
    }
  })
  return Array.from(formats).sort()
})

export const getPresentationOrganizers = cache((): string[] => {
  const organizers = new Set<string>()
  getAllPresentations().forEach((presentation) => {
    organizers.add(presentation.organizer)
  })
  return Array.from(organizers).sort()
})

export const getYears = cache((): number[] => {
  const years = new Set<number>()
  getAllPresentations().forEach((presentation) => {
    years.add(new Date(presentation.date).getFullYear())
  })
  return Array.from(years).sort((a, b) => b - a) // Sort in descending order
})
