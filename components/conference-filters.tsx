"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useCallback } from "react"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

type ConferenceFiltersProps = {
  types: string[]
  formats: string[]
  organizers: string[]
}

export default function ConferenceFilters({ types, formats, organizers }: ConferenceFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)

  // Get current filter values
  const currentSearch = searchParams.get("search") || ""
  const currentTypes = searchParams.get("types")?.split(",").filter(Boolean) || []
  const currentFormats = searchParams.get("formats")?.split(",").filter(Boolean) || []
  const currentOrganizers = searchParams.get("organizers")?.split(",").filter(Boolean) || []

  const updateFilters = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString())

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      })

      const queryString = params.toString()
      router.push(queryString ? `?${queryString}` : "", { scroll: false })
    },
    [router, searchParams],
  )

  const handleSearchChange = (value: string) => {
    updateFilters({ search: value || null })
  }

  const toggleFilter = (filterType: string, value: string) => {
    const currentValues = searchParams.get(filterType)?.split(",").filter(Boolean) || []
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]

    updateFilters({ [filterType]: newValues.length > 0 ? newValues.join(",") : null })
  }

  const clearAllFilters = () => {
    updateFilters({ search: null, types: null, formats: null, organizers: null })
  }

  const hasActiveFilters =
    currentSearch || currentTypes.length > 0 || currentFormats.length > 0 || currentOrganizers.length > 0

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search presentations..."
          value={currentSearch}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {[...currentTypes, ...currentFormats, ...currentOrganizers].length}
            </Badge>
          )}
        </Button>

        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearAllFilters} className="flex items-center gap-2">
            <X className="h-4 w-4" />
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {currentTypes.map((type) => (
            <Badge key={type} variant="secondary" className="flex items-center gap-1">
              {type}
              <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={() => toggleFilter("types", type)} />
            </Badge>
          ))}
          {currentFormats.map((format) => (
            <Badge key={format} variant="secondary" className="flex items-center gap-1">
              {format}
              <X
                className="h-3 w-3 cursor-pointer hover:text-red-500"
                onClick={() => toggleFilter("formats", format)}
              />
            </Badge>
          ))}
          {currentOrganizers.map((organizer) => (
            <Badge key={organizer} variant="secondary" className="flex items-center gap-1">
              {organizer.length > 30 ? `${organizer.substring(0, 30)}...` : organizer}
              <X
                className="h-3 w-3 cursor-pointer hover:text-red-500"
                onClick={() => toggleFilter("organizers", organizer)}
              />
            </Badge>
          ))}
        </div>
      )}

      {/* Filter Options */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
          {/* Presentation Types */}
          <div>
            <h3 className="font-semibold mb-3">Presentation Type</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {types.map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentTypes.includes(type)}
                    onChange={() => toggleFilter("types", type)}
                    className="rounded border-zinc-300"
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Formats */}
          <div>
            <h3 className="font-semibold mb-3">Format</h3>
            <div className="space-y-2">
              {formats.map((format) => (
                <label key={format} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentFormats.includes(format)}
                    onChange={() => toggleFilter("formats", format)}
                    className="rounded border-zinc-300"
                  />
                  <span className="text-sm">{format}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="font-semibold mb-3">Organizer</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {organizers.map((organizer) => (
                <label key={organizer} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentOrganizers.includes(organizer)}
                    onChange={() => toggleFilter("organizers", organizer)}
                    className="rounded border-zinc-300"
                  />
                  <span className="text-sm text-left">
                    {organizer.length > 40 ? `${organizer.substring(0, 40)}...` : organizer}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
