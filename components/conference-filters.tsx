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

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize state from URL params
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "")
    setSelectedTypes(searchParams.get("types")?.split(",").filter(Boolean) || [])
    setSelectedCountries(searchParams.get("countries")?.split(",").filter(Boolean) || [])
    setIsInitialized(true)
  }, [searchParams])

  // Update URL with filters
  const updateFilters = () => {
    if (!isInitialized) return

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

    router.push(`${pathname}?${params.toString()}`)
  }

  // Toggle type filter
  const toggleTypeFilter = (type: string) => {
    setSelectedTypes((prev) => {
      return prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    })
  }

  // Toggle country filter
  const toggleCountryFilter = (country: string) => {
    setSelectedCountries((prev) => {
      return prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    })
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTypes([])
    setSelectedCountries([])
    router.push(pathname)
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters()
  }

  // Update URL when filters change
  useEffect(() => {
    if (isInitialized) {
      updateFilters()
    }
  }, [selectedTypes, selectedCountries, isInitialized])

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
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button type="submit">Search</Button>
          {(selectedTypes.length > 0 || selectedCountries.length > 0 || searchQuery) && (
            <Button variant="outline" size="sm" onClick={clearFilters} className="whitespace-nowrap">
              <X className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          )}
        </div>
      </form>

      <div className="space-y-4">
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
                onClick={() => toggleTypeFilter(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>

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
                onClick={() => toggleCountryFilter(country)}
              >
                {country}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
