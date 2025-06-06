import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import {
  getPresentationsByYear,
  getPresentationTypes,
  getPresentationFormats,
  getPresentationOrganizers,
  getYears,
} from "@/lib/conference-presentations"
import { Suspense } from "react"
import ConferenceFilters from "@/components/conference-filters"
import ConferenceList from "@/components/conference-list"

export const metadata: Metadata = {
  title: "Conference Presentations | Scientific Outreach",
  description: "Presentations delivered by Somenath Dutta at various scientific conferences and symposiums",
  keywords: [
    "conference presentations",
    "scientific talks",
    "poster presentations",
    "research presentations",
    "academic conferences",
    "Somenath Dutta presentations",
    "bioinformatics conferences",
    "computational biology symposiums",
  ],
  openGraph: {
    title: "Conference Presentations | Scientific Outreach | Somenath Dutta",
    description: "Explore Somenath Dutta's presentations at various national and international conferences",
    url: "https://somenath.biomolecular.space/outreach/conference-presentations",
  },
}

export default function ConferencePresentationsPage() {
  const presentationsByYear = getPresentationsByYear()
  const years = getYears()
  const presentationTypes = getPresentationTypes()
  const presentationFormats = getPresentationFormats()
  const presentationOrganizers = getPresentationOrganizers()

  const breadcrumbItems = [
    { label: "Scientific Outreach", href: "/#scientific-outreach" },
    { label: "Conference Presentations", href: "/outreach/conference-presentations", isCurrent: true },
  ]

  // Calculate total presentations
  const totalPresentations = Object.values(presentationsByYear).reduce(
    (sum, presentations) => sum + presentations.length,
    0,
  )

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <BreadcrumbNavigation items={breadcrumbItems} />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Conference Presentations</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
              A comprehensive collection of {totalPresentations} presentations delivered at various national and
              international conferences, symposiums, and academic events.
            </p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
            <p>
              Somenath Dutta has presented his research findings at various prestigious conferences and symposiums,
              showcasing his work in computational biology, bioinformatics, and drug discovery. These presentations span
              multiple years and cover diverse topics from antiviral research to therapeutic development.
            </p>
          </div>

          <Suspense fallback={<div className="p-4 text-center">Loading filters...</div>}>
            <ConferenceFilters
              types={presentationTypes}
              formats={presentationFormats}
              organizers={presentationOrganizers}
            />
          </Suspense>

          <Suspense fallback={<div className="p-4 text-center">Loading presentations...</div>}>
            <ConferenceList presentationsByYear={presentationsByYear} years={years} />
          </Suspense>

          <div className="mt-16 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Impact and Recognition</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              These conference presentations have not only allowed Somenath to share his research with the scientific
              community but have also led to valuable collaborations and recognition. The presentations cover a wide
              range of formats including:
            </p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
              <li>
                <strong>Oral Presentations:</strong> In-depth talks on research findings and methodologies
              </li>
              <li>
                <strong>Poster Presentations:</strong> Visual displays of research results and conclusions
              </li>
              <li>
                <strong>Paper Presentations:</strong> Formal academic presentations of published work
              </li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4">
              The feedback and discussions from these presentations have significantly contributed to refining research
              methodologies and expanding scientific networks across the global research community.
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
