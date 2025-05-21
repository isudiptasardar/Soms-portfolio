"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, Filter, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

type ConferenceFiltersProps = {
  types: string[]
  countries: string[]
}

export default function ConferenceFilters({ types, countries }: ConferenceFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get initial values from URL
  const initialSearch = searchParams.get("search") || ""
  const initialTypes = searchParams.get("types")?.split(",").filter(Boolean) || []
  const initialCountries = searchParams.get("countries")?.split(",").filter(Boolean) || []

  // Set up state
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [selectedTypes, setSelectedTypes] = useState<string[]>(initialTypes)
  const [selectedCountries, setSelectedCountries] = useState<string[]>(initialCountries)

  // Update URL when filters change
  const updateURL = () => {
    const params = new URLSearchParams()

    if (searchQuery) {
      params.set("search", searchQuery)
    }

    if (selectedTypes.length > 0) {
      params.set("types", selectedTypes.join(","))
    }

    if (selectedCountries.length > 0) {
      params.set("countries", selectedCountries.join(","))
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateURL()
  }

  // Toggle type filter
  const handleTypeToggle = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Toggle country filter
  const handleCountryToggle = (country: string) => {
    setSelectedCountries((prev) => (prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTypes([])
    setSelectedCountries([])
    router.push(pathname, { scroll: false })
  }

  // Update URL when badge filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (selectedTypes !== initialTypes || selectedCountries !== initialCountries) {
        updateURL()
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [selectedTypes, selectedCountries])

  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 mb-12">
      <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              type="text"
              placeholder="Search presentations..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10"
              aria-label="Search presentations"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button type="submit">Search</Button>
          {(selectedTypes.length > 0 || selectedCountries.length > 0 || searchQuery) && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="whitespace-nowrap"
              aria-label="Clear filters"
            >
              <X className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          )}
        </div>
      </form>

      <div className="space-y-4">
        {types.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter by Type
            </h3>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Badge
                  key={type}
                  variant={selectedTypes.includes(type) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedTypes.includes(type) ? "" : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  }`}
                  onClick={() => handleTypeToggle(type)}
                  aria-pressed={selectedTypes.includes(type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {countries.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter by Country
            </h3>
            <div className="flex flex-wrap gap-2">
              {countries.map((country) => (
                <Badge
                  key={country}
                  variant={selectedCountries.includes(country) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedCountries.includes(country) ? "" : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  }`}
                  onClick={() => handleCountryToggle(country)}
                  aria-pressed={selectedCountries.includes(country)}
                >
                  {country}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
