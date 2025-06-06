import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, MapPin, User, FileText, Award } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import { getProjectsByYear } from "@/lib/research-projects"

export const metadata: Metadata = {
  title: "Research Projects | Scientific Outreach",
  description:
    "Research projects conducted by Somenath Dutta in the fields of bioinformatics and computational biology",
  keywords: [
    "research projects",
    "scientific research",
    "bioinformatics projects",
    "computational biology research",
    "Somenath Dutta research",
    "academic projects",
    "scientific studies",
  ],
  openGraph: {
    title: "Research Projects | Scientific Outreach | Somenath Dutta",
    description: "Explore Somenath Dutta's research projects in bioinformatics and computational biology",
    url: "https://somenath.biomolecular.space/outreach/research-projects",
  },
}

export default function ResearchProjectsPage() {
  const projectsByYear = getProjectsByYear()
  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a) // Sort years in descending order

  const breadcrumbItems = [
    { label: "Scientific Outreach", href: "/#scientific-outreach" },
    { label: "Research Projects", href: "/outreach/research-projects", isCurrent: true },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <BreadcrumbNavigation items={breadcrumbItems} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Research Projects</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
            <p>
              Somenath Dutta has been involved in various research projects, collaborating with renowned institutions
              and researchers to advance knowledge in bioinformatics and computational biology.
            </p>
          </div>

          <div className="space-y-16">
            {years.map((year) => (
              <div key={year} id={`year-${year}`} className="scroll-mt-24">
                <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-8">{year}</h2>
                <div className="space-y-8">
                  {projectsByYear[year].map((project, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                      {project.status && (
                        <div className="flex items-center text-zinc-600 dark:text-zinc-400 mb-3">
                          <Award className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Status: {project.status}</span>
                        </div>
                      )}

                      {project.supervisor && (
                        <div className="flex items-center text-zinc-600 dark:text-zinc-400 mb-3">
                          <User className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Supervisor: {project.supervisor}</span>
                        </div>
                      )}

                      {project.supervisors && (
                        <div className="flex items-center text-zinc-600 dark:text-zinc-400 mb-3">
                          <User className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Supervisors: {project.supervisors.join(", ")}</span>
                        </div>
                      )}

                      {project.institution && (
                        <div className="flex items-center text-zinc-600 dark:text-zinc-400 mb-3">
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{project.institution}</span>
                        </div>
                      )}

                      {project.note && (
                        <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                          <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{project.note}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Research Impact</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              These research projects have contributed to advancements in the fields of bioinformatics and computational
              biology, with findings that have implications for drug discovery, disease understanding, and therapeutic
              development. Through these projects, Somenath has developed expertise in various computational techniques
              and methodologies.
            </p>
          </div>

          {/* Back to Scientific Outreach Button - Moved to Bottom */}
          <div className="mt-12 mb-8 flex justify-center">
            <Link
              href="/#scientific-outreach"
              className="inline-flex items-center px-6 py-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Scientific Outreach
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
