import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, Users } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import { getVolunteerRolesByYear, processMarkdownText } from "@/lib/volunteer-work"

export const metadata: Metadata = {
  title: "Volunteer Work | Scientific Outreach",
  description: "Volunteer work undertaken by Somenath Dutta to contribute to the scientific community and society",
  keywords: [
    "volunteer work",
    "scientific volunteering",
    "community service",
    "academic volunteering",
    "scientific outreach",
    "Somenath Dutta volunteering",
    "scientific community contribution",
  ],
  openGraph: {
    title: "Volunteer Work | Scientific Outreach | Somenath Dutta",
    description: "Learn about Somenath Dutta's volunteer work and contributions to various scientific organizations",
    url: "https://somenath.biomolecular.space/outreach/volunteer-work",
  },
}

export default function VolunteerWorkPage() {
  const volunteerRolesByYear = getVolunteerRolesByYear()
  const years = Object.keys(volunteerRolesByYear)
    .map(Number)
    .sort((a, b) => b - a) // Sort years in descending order

  const breadcrumbItems = [
    { label: "Scientific Outreach", href: "/#scientific-outreach" },
    { label: "Volunteer Work", href: "/outreach/volunteer-work", isCurrent: true },
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

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Volunteer Work</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
            <p>
              Somenath Dutta has actively volunteered in various organizations to contribute to the scientific growth of
              society. These volunteer experiences have not only allowed him to give back to the community but have also
              enriched his understanding of the broader impact of science on society.
            </p>
          </div>

          <div className="space-y-12">
            {years.map((year) => (
              <div key={year} className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <h2 className="text-2xl font-bold">{year}</h2>
                </div>

                <div className="space-y-4">
                  {volunteerRolesByYear[year].map((role, index) => {
                    const processedRole = processMarkdownText(role)
                    const [roleName, location] = processedRole.split(" - ")

                    return (
                      <div key={index} className="flex items-start">
                        <Users className="h-5 w-5 mr-3 mt-1 text-zinc-500" />
                        <div>
                          <p className="font-medium">{roleName}</p>
                          {location && <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{location}</p>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Impact and Learning</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              These volunteer experiences have had a profound impact on Somenath's personal and professional
              development. They have enhanced his communication and leadership skills, broadened his understanding of
              the societal impact of scientific research, provided opportunities to apply his knowledge in diverse
              contexts, connected him with a wider network of scientists and science enthusiasts, and reinforced his
              commitment to making science accessible and beneficial to society.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
