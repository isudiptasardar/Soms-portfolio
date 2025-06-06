import { cache } from "react"
import newsMediaData from "@/data/news-media.json"

export interface NewsItem {
  year: number
  title: string
  link: string
  type: string
  description: string
}

export const getAllNewsItems = cache((): NewsItem[] => {
  return newsMediaData.News_Media_Coverage
})

export const getNewsItemsByYear = cache((year: number): NewsItem[] => {
  return getAllNewsItems().filter((item) => item.year === year)
})

export const getNewsYears = cache((): number[] => {
  const years = getAllNewsItems().map((item) => item.year)
  return [...new Set(years)].sort((a, b) => b - a)
})

export const getNewsTypes = cache((): string[] => {
  const types = getAllNewsItems().map((item) => item.type)
  return [...new Set(types)].sort()
})

export const getTotalNewsCount = cache((): number => {
  return getAllNewsItems().length
})

export const getNewsItemsByType = cache((type: string): NewsItem[] => {
  return getAllNewsItems().filter((item) => item.type === type)
})
