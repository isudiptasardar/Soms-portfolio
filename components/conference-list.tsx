"use client"

import { useSearchParams } from "next/navigation"
import { Calendar, Award, Users, Monitor } from "lucide-react"
import { useMemo } from "react"
import type { ConferencePresentation } from "@/lib/conference-presentations"

type ConferenceListProps = {
  presentationsByYear: Record<number, ConferencePresentation[]>
  years: number[]
}

export default function ConferenceList({ presentationsByYear, years }: ConferenceListProps) {
  const searchParams = useSearchParams()

  // Extract search parameters once
  const searchQuery = searchParams.get("search") || ""
  const selectedTypes = searchParams.get("types")?.split(",").filter(Boolean) || []
  const selectedFormats = searchParams.get("formats")?.split(",").filter(Boolean) || []
  const selectedOrganizers = searchParams.get("organizers")?.split(",").filter(Boolean) || []

  // Use useMemo to compute filtered data only when dependencies change
  const filteredData = useMemo(() => {
    // If no filters are applied, return all data
    if (!searchQuery && selectedTypes.length === 0 && selectedFormats.length === 0 && selectedOrganizers.length === 0) {
      return { presentationsByYear, years }
    }

    // Apply filters
    const filtered: Record<number, ConferencePresentation[]> = {}

    // Filter presentations based on criteria
    years.forEach((year) => {
      if (!presentationsByYear[year]) return

      const presentations = presentationsByYear[year].filter((presentation) => {
        // Search filter
        const matchesSearch =
          searchQuery === "" ||
          presentation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          presentation.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          presentation.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          presentation.format.toLowerCase().includes(searchQuery.toLowerCase())

        // Type filter
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(presentation.type)

        // Format filter
        const matchesFormat = selectedFormats.length === 0 || selectedFormats.includes(presentation.format)

        // Organizer filter
        const matchesOrganizer = selectedOrganizers.length === 0 || selectedOrganizers.includes(presentation.organizer)

        return matchesSearch && matchesType && matchesFormat && matchesOrganizer
      })

      if (presentations.length > 0) {
        filtered[year] = presentations
      }
    })

    // Get filtered years
    const filteredYears = Object.keys(filtered)
      .map(Number)
      .sort((a, b) => b - a)

    return {
      presentationsByYear: filtered,
      years: filteredYears,
    }
  }, [searchParams, presentationsByYear, years, searchQuery, selectedTypes, selectedFormats, selectedOrganizers])

  // Show message if no results
  if (filteredData.years.length === 0) {
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
      {filteredData.years.map((year) => (
        <div key={year} id={`year-${year}`} className="scroll-mt-24">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-8">{year}</h2>
          <div className="space-y-8">
            {filteredData.presentationsByYear[year].map((presentation) => (
              <div
                key={presentation.id}
                className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 leading-tight">{presentation.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start text-zinc-600 dark:text-zinc-400">
                    <Users className="h-4 w-4 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm">{presentation.organizer}</span>
                  </div>

                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{new Date(presentation.date).getFullYear()}</span>
                  </div>

                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <Award className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{presentation.type}</span>
                  </div>

                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <Monitor className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{presentation.format}</span>
                  </div>
                </div>

                {presentation.skills && presentation.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {presentation.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
