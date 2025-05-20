import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import { getConferencesByYear, getConferenceTypes, getConferenceCountries } from "@/lib/conference-presentations"
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
  const conferencesByYear = getConferencesByYear()
  const years = Object.keys(conferencesByYear)
    .map(Number)
    .sort((a, b) => b - a) // Sort years in descending order

  const conferenceTypes = getConferenceTypes()
  const conferenceCountries = getConferenceCountries()

  const breadcrumbItems = [
    { label: "Scientific Outreach", href: "/#scientific-outreach" },
    { label: "Conference Presentations", href: "/outreach/conference-presentations", isCurrent: true },
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

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Conference Presentations</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
            <p>
              Somenath Dutta has presented his research findings at various national and international conferences,
              showcasing his work to the scientific community and engaging in valuable discussions with peers and
              experts in the field.
            </p>
          </div>

          <Suspense fallback={<div>Loading filters...</div>}>
            <ConferenceFilters types={conferenceTypes} countries={conferenceCountries} />
          </Suspense>

          <Suspense fallback={<div>Loading conferences...</div>}>
            <ConferenceList conferencesByYear={conferencesByYear} years={years} />
          </Suspense>

          <div className="mt-16 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Impact and Recognition</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              These conference presentations have not only allowed Somenath to share his research with the scientific
              community but have also led to valuable collaborations and recognition. The feedback and discussions from
              these presentations have significantly contributed to refining his research methodologies and expanding
              his scientific network.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
