"use client"

import { useSearchParams } from "next/navigation"
import { Calendar, MapPin, Award } from "lucide-react"
import type { Conference } from "@/lib/conference-presentations"
import { extractCountry } from "@/lib/conference-presentations"
import { useEffect, useState } from "react"

type ConferenceListProps = {
  conferencesByYear: Record<number, Conference[]>
  years: number[]
}

export default function ConferenceList({ conferencesByYear, years }: ConferenceListProps) {
  const searchParams = useSearchParams()
  const [filteredConferencesByYear, setFilteredConferencesByYear] = useState<Record<number, Conference[]>>({})
  const [filteredYears, setFilteredYears] = useState<number[]>([])

  useEffect(() => {
    const searchQuery = searchParams.get("search") || ""
    const selectedTypes = searchParams.get("types")?.split(",").filter(Boolean) || []
    const selectedCountries = searchParams.get("countries")?.split(",").filter(Boolean) || []

    // Filter conferences based on search query and selected filters
    const filtered: Record<number, Conference[]> = {}

    years.forEach((year) => {
      const conferences = conferencesByYear[year].filter((conference) => {
        // Filter by search query
        const matchesSearch =
          searchQuery === "" ||
          conference.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          conference.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
          conference.location.toLowerCase().includes(searchQuery.toLowerCase())

        // Filter by type
        const matchesType = selectedTypes.length === 0 || (conference.type && selectedTypes.includes(conference.type))

        // Filter by country
        const country = extractCountry(conference.location)
        const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(country)

        return matchesSearch && matchesType && matchesCountry
      })

      if (conferences.length > 0) {
        filtered[year] = conferences
      }
    })

    setFilteredConferencesByYear(filtered)
    setFilteredYears(
      Object.keys(filtered)
        .map(Number)
        .sort((a, b) => b - a),
    )
  }, [searchParams, conferencesByYear, years])

  if (filteredYears.length === 0) {
    return (
      <div className="text-center py-12 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">No presentations found</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          No presentations match your current filters. Try adjusting your search criteria.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      {filteredYears.map((year) => (
        <div key={year} id={`year-${year}`} className="scroll-mt-24">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-8">{year}</h2>
          <div className="space-y-8">
            {filteredConferencesByYear[year].map((conference, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{conference.title}</h3>

                {conference.type && (
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400 mb-3">
                    <Award className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{conference.type}</span>
                  </div>
                )}

                <div className="flex items-center text-zinc-600 dark:text-zinc-400 mb-3">
                  <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{conference.event}</span>
                </div>

                <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{conference.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
