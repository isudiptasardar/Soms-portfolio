import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, ExternalLink, Users } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import {
  getOrganizationsByYear,
  getOrganizationYears,
  getTotalOrganizationsCount,
} from "@/lib/scientific-organizations"

export const metadata: Metadata = {
  title: "Scientific Organizations | Scientific Outreach",
  description:
    "Scientific organizations that Somenath Dutta is associated with in the field of bioinformatics and computational biology",
  keywords: [
    "scientific organizations",
    "professional memberships",
    "academic associations",
    "bioinformatics organizations",
    "computational biology societies",
    "Somenath Dutta affiliations",
    "scientific networks",
  ],
  openGraph: {
    title: "Scientific Organizations | Scientific Outreach | Somenath Dutta",
    description: "Discover the scientific organizations that Somenath Dutta is affiliated with",
    url: "https://somenath.biomolecular.space/outreach/scientific-organizations",
  },
}

export default function ScientificOrganizationsPage() {
  const organizationsByYear = getOrganizationsByYear()
  const years = getOrganizationYears()
  const totalCount = getTotalOrganizationsCount()

  const breadcrumbItems = [
    { label: "Scientific Outreach", href: "/#scientific-outreach" },
    { label: "Scientific Organizations", href: "/outreach/scientific-organizations", isCurrent: true },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
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

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Scientific Organizations</h1>
            <div className="flex items-center text-zinc-600 dark:text-zinc-400 mb-6">
              <Users className="h-5 w-5 mr-2" />
              <span>{totalCount} Professional Memberships</span>
            </div>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
            <p>
              Somenath Dutta is actively associated with several scientific organizations that promote research,
              education, and collaboration in bioinformatics, computational biology, and related fields. These
              affiliations have provided valuable opportunities for networking, knowledge exchange, and professional
              development.
            </p>
          </div>

          <div className="space-y-12">
            {years.map((year) => {
              const memberships = organizationsByYear[year] || []

              return (
                <div key={year} className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                      <h2 className="text-2xl font-bold">{year}</h2>
                    </div>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {memberships.length} {memberships.length === 1 ? "membership" : "memberships"}
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {memberships.map((membership, index) => (
                      <a
                        key={index}
                        href={membership.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-50 dark:bg-zinc-700 p-4 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-[1.02] flex items-start group"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {membership.organization}
                          </p>
                          <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mt-2">
                            <span>Visit Website</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Benefits and Contributions</h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>
                These organizational affiliations have significantly enhanced Somenath's professional development and
                research capabilities. They provide platforms for presenting research findings to a wider audience,
                accessing specialized resources and databases, participating in professional development workshops,
                networking with experts and peers in the field, and staying updated with the latest research trends and
                methodologies.
              </p>
              <p>
                In return, Somenath actively contributes to these organizations through participation in events, sharing
                research findings, and engaging in community discussions. These mutual exchanges strengthen both his
                individual growth and the broader scientific community.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
