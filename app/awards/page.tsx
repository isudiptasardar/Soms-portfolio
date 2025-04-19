import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Trophy } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import Script from "next/script"
import { getAwardsByYear, getAllAwards } from "@/lib/awards"

export const metadata: Metadata = {
  title: "Awards & Recognition | Somenath Dutta",
  description:
    "Comprehensive list of awards, grants, and recognitions received by Somenath Dutta for his contributions to bioinformatics, computational biology, and RNA research.",
  keywords: [
    "bioinformatics awards",
    "computational biology recognition",
    "RNA research grants",
    "Somenath Dutta awards",
    "scientific achievements",
    "academic recognition",
    "research fellowships",
    "bioinformatics scholarships",
    "ISCB awards",
    "Max Planck grant",
  ],
  openGraph: {
    title: "Awards & Recognition | Somenath Dutta",
    description:
      "Comprehensive list of awards, grants, and recognitions received by Somenath Dutta for his contributions to bioinformatics and computational biology research.",
    url: "https://somenath.biomolecular.space/awards",
    type: "website",
  },
}

export default function AwardsPage() {
  const breadcrumbItems = [{ label: "Awards & Recognition", href: "/awards", isCurrent: true }]

  // Get awards grouped by year using our utility function
  const awardsByYear = getAwardsByYear()
  const allAwards = getAllAwards()

  // Get years in descending order
  const years = Object.keys(awardsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
        <Header />

        <main className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <BreadcrumbNavigation items={breadcrumbItems} />
              <Link
                href="/#awards"
                className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-12">Awards & Recognition</h1>

            <div className="space-y-16">
              {years.map((year) => (
                <div key={year} className="space-y-6">
                  <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2">{year}</h2>
                  <div className="space-y-8">
                    {awardsByYear[year].map((award) => (
                      <div
                        key={award.id}
                        className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6"
                        itemScope
                        itemType="https://schema.org/Award"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full">
                            <Trophy className="h-6 w-6 text-amber-500" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold" itemProp="name">
                              {award.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mt-2 font-medium" itemProp="description">
                              {award.organization}
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 mt-4">{award.description}</p>
                            <meta itemProp="dateAwarded" content={`${award.year}`} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Structured data for CollectionPage */}
      <Script id="schema-awards-page" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Awards & Recognition | Somenath Dutta",
            "description": "Comprehensive list of awards, grants, and recognitions received by Somenath Dutta for his contributions to bioinformatics and computational biology research.",
            "url": "https://somenath.biomolecular.space/awards",
            "author": {
              "@type": "Person",
              "name": "Somenath Dutta"
            },
            "about": {
              "@type": "Person",
              "name": "Somenath Dutta"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                ${allAwards
                  .map(
                    (award, index) => `{
                  "@type": "ListItem",
                  "position": ${index + 1},
                  "item": {
                    "@type": "Award",
                    "name": "${award.title.replace(/"/g, '\\"')}",
                    "description": "${award.description.replace(/"/g, '\\"')}",
                    "dateAwarded": "${award.year}",
                    "awardedBy": "${award.organization.replace(/"/g, '\\"')}"
                  }
                }`,
                  )
                  .join(",")}
              ]
            }
          }
        `}
      </Script>
    </>
  )
}
