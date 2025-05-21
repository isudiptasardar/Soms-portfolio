import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import { getOrganizationsByYear, processMarkdownLink } from "@/lib/scientific-organizations"

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
  const years = Object.keys(organizationsByYear)
    .map(Number)
    .sort((a, b) => b - a) // Sort years in descending order

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

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Scientific Organizations</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
            <p>
              Somenath Dutta is actively associated with several scientific organizations that promote research,
              education, and collaboration in bioinformatics, computational biology, and related fields. These
              affiliations have provided valuable opportunities for networking, knowledge exchange, and professional
              development.
            </p>
          </div>

          <div className="space-y-12">
            {years.map((year) => (
              <div key={year} className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <h2 className="text-2xl font-bold">{year}</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {organizationsByYear[year].map((membership, index) => {
                    const { name, url } = processMarkdownLink(membership)

                    return (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-50 dark:bg-zinc-700 p-4 rounded-lg hover:shadow-md transition-shadow flex items-start"
                      >
                        <div>
                          <p className="font-medium">{name}</p>
                          <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mt-2">
                            <span>Visit Website</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Benefits and Contributions</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              These organizational affiliations have significantly enhanced Somenath's professional development and
              research capabilities. They provide platforms for presenting research findings to a wider audience,
              accessing specialized resources and databases, participating in professional development workshops,
              networking with experts and peers in the field, and staying updated with the latest research trends and
              methodologies.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4">
              In return, Somenath actively contributes to these organizations through participation in events, sharing
              research findings, and engaging in community discussions. These mutual exchanges strengthen both his
              individual growth and the broader scientific community.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
