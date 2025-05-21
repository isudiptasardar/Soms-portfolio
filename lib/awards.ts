import awardsData from "@/data/awards.json"
import { cache } from "react"

export type Award = {
  id: number
  title: string
  organization: string
  year: string
  description: string
}

// Cache the awards data to avoid redundant processing
export const getAllAwards = cache((): Award[] => {
  return awardsData.awards
})

export const getRecentAwards = cache((count = 6): Award[] => {
  // Sort by year (descending) and then by id (descending) for awards in the same year
  return [...awardsData.awards]
    .sort((a, b) => {
      if (a.year !== b.year) {
        return Number.parseInt(b.year) - Number.parseInt(a.year)
      }
      return b.id - a.id
    })
    .slice(0, count)
})

export const getAwardsByYear = cache((): Record<string, Award[]> => {
  return awardsData.awards.reduce(
    (acc, award) => {
      const year = award.year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(award)
      return acc
    },
    {} as Record<string, Award[]>,
  )
})
