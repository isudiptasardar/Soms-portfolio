import awardsData from "@/data/awards.json"

export type Award = {
  id: number
  title: string
  organization: string
  year: string
  description: string
}

export function getAllAwards(): Award[] {
  return awardsData.awards
}

export function getRecentAwards(count = 6): Award[] {
  // Sort by year (descending) and then by id (descending) for awards in the same year
  return [...awardsData.awards]
    .sort((a, b) => {
      if (a.year !== b.year) {
        return Number.parseInt(b.year) - Number.parseInt(a.year)
      }
      return b.id - a.id
    })
    .slice(0, count)
}

export function getAwardsByYear(): Record<string, Award[]> {
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
}
