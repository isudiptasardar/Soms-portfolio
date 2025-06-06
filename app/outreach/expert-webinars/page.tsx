"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, Search, Filter, X, MapPin } from "lucide-react"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import webinarsData from "@/data/webinars.json"

// Define the webinar type based on the actual JSON structure
interface Webinar {
  category: string
  mode: string
  title: string
}

// Helper function to get badge color based on category
function getBadgeVariant(category: string): "default" | "secondary" | "outline" | "destructive" {
  switch (category) {
    case "Workshops":
      return "default"
    case "Conferences":
      return "secondary"
    case "Webinars":
      return "destructive"
    default:
      return "outline"
  }
}

// Helper function to get badge color based on mode
function getModeBadgeClass(mode: string): string {
  return mode === "In-Person"
    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
    : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
}

export default function ExpertWebinarsPage() {
  // Process the webinars data to flatten the structure
  const processWebinars = () => {
    const result: Array<Webinar & { year: string }> = []

    // Loop through each year in the webinars data
    Object.entries(webinarsData).forEach(([year, webinars]) => {
      // Add each webinar with its year
      webinars.forEach((webinar: Webinar) => {
        result.push({
          ...webinar,
          year,
        })
      })
    })

    return result
  }

  const allWebinars = processWebinars()

  // Get all unique categories and modes for filters
  const allCategories = Array.from(new Set(allWebinars.map((webinar) => webinar.category)))
  const allModes = Array.from(new Set(allWebinars.map((webinar) => webinar.mode)))
  const allYears = Object.keys(webinarsData).sort((a, b) => Number(b) - Number(a))

  // State for filters and search
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedModes, setSelectedModes] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredWebinars, setFilteredWebinars] = useState(allWebinars)
  const [webinarsByYear, setWebinarsByYear] = useState<Record<string, Array<Webinar & { year: string }>>>({})
  const [years, setYears] = useState<string[]>(allYears)
  const [isClient, setIsClient] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Apply filters and search
  useEffect(() => {
    let result = [...allWebinars]

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((webinar) => selectedCategories.includes(webinar.category))
    }

    // Apply mode filter
    if (selectedModes.length > 0) {
      result = result.filter((webinar) => selectedModes.includes(webinar.mode))
    }

    // Apply year filter
    if (selectedYears.length > 0) {
      result = result.filter((webinar) => selectedYears.includes(webinar.year))
    }

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (webinar) =>
          webinar.title.toLowerCase().includes(query) ||
          webinar.category.toLowerCase().includes(query) ||
          webinar.mode.toLowerCase().includes(query),
      )
    }

    setFilteredWebinars(result)

    // Group by year
    const groupedByYear = result.reduce(
      (acc, webinar) => {
        const year = webinar.year
        if (!acc[year]) {
          acc[year] = []
        }
        acc[year].push(webinar)
        return acc
      },
      {} as Record<string, Array<Webinar & { year: string }>>,
    )

    setWebinarsByYear(groupedByYear)

    // Get years in descending order
    const yearsList = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a))
    setYears(yearsList)
  }, [selectedCategories, selectedModes, selectedYears, searchQuery, allWebinars])

  // Toggle category filter
  const toggleCategoryFilter = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((t) => t !== category) : [...prev, category],
    )
  }

  // Toggle mode filter
  const toggleModeFilter = (mode: string) => {
    setSelectedModes((prev) => (prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]))
  }

  // Toggle year filter
  const toggleYearFilter = (year: string) => {
    setSelectedYears((prev) => (prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedModes([])
    setSelectedYears([])
    setSearchQuery("")
  }

  const breadcrumbItems = [
    { label: "Scientific Outreach", href: "/#scientific-outreach" },
    { label: "Expert-Led Webinars", href: "/outreach/expert-webinars", isCurrent: true },
  ]

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <BreadcrumbNavigation items={breadcrumbItems} />
            <Link
              href="/#scientific-outreach"
              className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Scientific Outreach
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Expert-Led Webinars & Academic Activities</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
            <p>
              Continuous learning is a cornerstone of scientific growth. Somenath Dutta has actively participated in
              numerous expert-led webinars, workshops, conferences, and academic programs to stay updated with the
              latest developments in bioinformatics, computational biology, and related fields. These experiences have
              significantly enhanced his knowledge, skills, and professional network.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <Input
                    type="text"
                    placeholder="Search webinars, topics, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                {selectedCategories.length > 0 || selectedModes.length > 0 || selectedYears.length > 0 ? (
                  <Button variant="outline" size="sm" onClick={clearFilters} className="whitespace-nowrap">
                    <X className="h-4 w-4 mr-2" />
                    Clear Filters
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategories.includes(category) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedCategories.includes(category) ? "" : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                      }`}
                      onClick={() => toggleCategoryFilter(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Mode
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allModes.map((mode) => (
                    <Badge
                      key={mode}
                      variant={selectedModes.includes(mode) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedModes.includes(mode) ? "" : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                      }`}
                      onClick={() => toggleModeFilter(mode)}
                    >
                      {mode}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Filter by Year
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allYears.map((year) => (
                    <Badge
                      key={year}
                      variant={selectedYears.includes(year) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedYears.includes(year) ? "" : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                      }`}
                      onClick={() => toggleYearFilter(year)}
                    >
                      {year}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Showing {filteredWebinars.length} of {allWebinars.length} activities
            </div>
          </div>

          {filteredWebinars.length === 0 ? (
            <div className="text-center py-12 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No activities found</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                No webinars or academic activities match your current filters. Try adjusting your search criteria.
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          ) : (
            <div className="space-y-16">
              {years.map((year) => (
                <div key={year} id={`year-${year}`} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-8">{year}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {webinarsByYear[year]?.map((webinar, index) => (
                      <div
                        key={`${year}-${index}`}
                        className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full"
                      >
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <Badge variant={getBadgeVariant(webinar.category)} className="capitalize">
                              {webinar.category}
                            </Badge>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${getModeBadgeClass(webinar.mode)}`}
                            >
                              {webinar.mode}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold mb-3">{webinar.title}</h3>

                          <div className="mb-4 text-zinc-600 dark:text-zinc-400 flex items-center">
                            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{webinar.year}</span>
                          </div>

                          <div className="mb-4 text-zinc-600 dark:text-zinc-400 flex items-center">
                            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{webinar.mode}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Impact on Research and Skills</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              These expert-led webinars, workshops, and academic activities have significantly enhanced Somenath's
              knowledge and skills in various aspects of bioinformatics and computational biology. The insights gained
              from these experiences have been instrumental in shaping his research methodologies and approaches to
              scientific problems.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4">
              By actively engaging with experts in the field through these activities, Somenath has been able to stay at
              the forefront of scientific advancements and incorporate cutting-edge techniques into his research work,
              contributing to his growth as a researcher and professional in the field.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
