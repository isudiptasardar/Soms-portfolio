"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, Tag, Search, Filter, X } from "lucide-react"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import webinarsData from "@/data/webinars.json"

// Helper function to format dates
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

// Helper function to get badge color based on type
function getBadgeVariant(type: string): "default" | "secondary" | "outline" {
  switch (type) {
    case "Workshop":
      return "default"
    case "Webinar":
      return "secondary"
    default:
      return "outline"
  }
}

// Helper function to get badge color based on format
function getFormatBadgeClass(format: string): string {
  return format === "In-Person"
    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
    : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
}

export default function ExpertWebinarsPage() {
  // Get all unique types and formats for filters
  const allTypes = Array.from(new Set(webinarsData.webinars.map((webinar) => webinar.type)))
  const allFormats = Array.from(new Set(webinarsData.webinars.map((webinar) => webinar.format)))

  // State for filters and search
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedFormats, setSelectedFormats] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredWebinars, setFilteredWebinars] = useState(webinarsData.webinars)
  const [webinarsByYear, setWebinarsByYear] = useState<Record<string, typeof webinarsData.webinars>>({})
  const [years, setYears] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Apply filters and search
  useEffect(() => {
    let result = [...webinarsData.webinars]

    // Apply type filter
    if (selectedTypes.length > 0) {
      result = result.filter((webinar) => selectedTypes.includes(webinar.type))
    }

    // Apply format filter
    if (selectedFormats.length > 0) {
      result = result.filter((webinar) => selectedFormats.includes(webinar.format))
    }

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (webinar) =>
          webinar.title.toLowerCase().includes(query) ||
          webinar.organizer.toLowerCase().includes(query) ||
          webinar.description.toLowerCase().includes(query) ||
          webinar.skills.some((skill) => skill.toLowerCase().includes(query)),
      )
    }

    // Sort by date (most recent first)
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    setFilteredWebinars(result)

    // Group by year
    const groupedByYear = result.reduce(
      (acc, webinar) => {
        const year = new Date(webinar.date).getFullYear().toString()
        if (!acc[year]) {
          acc[year] = []
        }
        acc[year].push(webinar)
        return acc
      },
      {} as Record<string, typeof webinarsData.webinars>,
    )

    setWebinarsByYear(groupedByYear)

    // Get years in descending order
    const yearsList = Object.keys(groupedByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))
    setYears(yearsList)
  }, [selectedTypes, selectedFormats, searchQuery])

  // Toggle type filter
  const toggleTypeFilter = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Toggle format filter
  const toggleFormatFilter = (format: string) => {
    setSelectedFormats((prev) => (prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedTypes([])
    setSelectedFormats([])
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
                    placeholder="Search webinars, topics, skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                {selectedTypes.length > 0 || selectedFormats.length > 0 ? (
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
                  Filter by Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTypes.map((type) => (
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
                  Filter by Format
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allFormats.map((format) => (
                    <Badge
                      key={format}
                      variant={selectedFormats.includes(format) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedFormats.includes(format) ? "" : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                      }`}
                      onClick={() => toggleFormatFilter(format)}
                    >
                      {format}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Showing {filteredWebinars.length} of {webinarsData.webinars.length} webinars
            </div>
          </div>

          {filteredWebinars.length === 0 ? (
            <div className="text-center py-12 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No webinars found</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                No webinars match your current filters. Try adjusting your search criteria.
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          ) : (
            <div className="space-y-16">
              {years.map((year) => (
                <div key={year} id={`year-${year}`} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-8">{year}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {webinarsByYear[year].map((webinar) => (
                      <div
                        key={webinar.id}
                        className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full"
                      >
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <Badge variant={getBadgeVariant(webinar.type)} className="capitalize">
                              {webinar.type}
                            </Badge>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${getFormatBadgeClass(webinar.format)}`}
                            >
                              {webinar.format}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold mb-3">{webinar.title}</h3>

                          <div className="mb-4 text-zinc-600 dark:text-zinc-400 flex items-center">
                            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{webinar.organizer}</span>
                          </div>

                          <div className="mb-4 text-zinc-600 dark:text-zinc-400 flex items-center">
                            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{formatDate(webinar.date)}</span>
                          </div>

                          <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">{webinar.description}</p>

                          <div className="mt-auto">
                            <h4 className="text-sm font-semibold mb-2 flex items-center">
                              <Tag className="h-4 w-4 mr-2" />
                              Skills & Topics
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {webinar.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
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
