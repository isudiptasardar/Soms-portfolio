import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, ExternalLink, BookOpen, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { getPublicationsByYear, formatDate } from "@/lib/publications"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Scientific Publications",
  description:
    "Complete list of peer-reviewed publications by Somenath Dutta in bioinformatics, computer-aided drug design (CADD), miRNA therapeutics and RNA biology research fields.",
  keywords: [
    "scientific publications",
    "research papers",
    "bioinformatics publications",
    "CADD research",
    "miRNA therapeutics papers",
    "RNA biology research",
    "computational biology publications",
    "Somenath Dutta publications",
    "bioinformatics journal articles",
    "drug discovery research",
  ],
  openGraph: {
    title: "Scientific Publications | Somenath Dutta",
    description:
      "Complete list of peer-reviewed publications by Somenath Dutta in bioinformatics, CADD, miRNA therapeutics and RNA biology",
    url: "https://somenath.biomolecular.space/publications",
    type: "website",
  },
}

export default function PublicationsPage() {
  // Get publications grouped by year using our optimized function
  const publicationsByYear = getPublicationsByYear()

  // Get years in descending order
  const years = Object.keys(publicationsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  // Format authors list with highlighting for Somenath Dutta
  const formatAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isLastAuthor = index === authors.length - 1
      const separator = isLastAuthor ? "" : ", "
      const isSomenath = author === "Somenath Dutta"

      return (
        <span key={index}>
          <span className={isSomenath ? "font-semibold" : ""}>{author}</span>
          {separator}
        </span>
      )
    })
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
        <Header />

        <main className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link
                href="/#publications"
                className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-12">Scientific Publications</h1>

            <div className="space-y-16">
              {years.map((year) => (
                <div key={year} className="space-y-6">
                  <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2">{year}</h2>
                  <div className="space-y-8">
                    {publicationsByYear[year].map((publication) => (
                      <div
                        id={`pub-${publication.id}`}
                        key={publication.id}
                        className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        itemScope
                        itemType="https://schema.org/ScholarlyArticle"
                      >
                        <meta itemProp="author" content={publication.authors.join(", ")} />
                        <meta itemProp="datePublished" content={publication.publicationDate} />
                        <meta itemProp="headline" content={publication.title} />
                        {publication.type === "journal article" && (
                          <meta itemProp="isPartOf" content={publication.journal} />
                        )}
                        <div className="md:flex">
                          <div className="md:w-1/3 lg:w-1/4">
                            <div className="aspect-[4/3] w-full overflow-hidden">
                              <Image
                                src={publication.paperImage || "/placeholder.svg"}
                                alt={`Visual representation of the publication: ${publication.title}`}
                                width={600}
                                height={400}
                                className="h-full w-full object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                              />
                            </div>
                          </div>
                          <div className="p-6 md:w-2/3 lg:w-3/4">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline" className="capitalize flex items-center">
                                {publication.type === "journal article" ? (
                                  <FileText className="h-3 w-3 mr-1" />
                                ) : (
                                  <BookOpen className="h-3 w-3 mr-1" />
                                )}
                                {publication.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" itemProp="name">
                              {publication.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-2 font-medium" itemProp="publisher">
                              {publication.type === "journal article" ? publication.journal : publication.publisher}
                            </p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">
                              {formatDate(publication.publicationDate)}
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                              {formatAuthors(publication.authors)}
                            </p>
                            <a
                              href="#"
                              className="inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                              aria-label={`Read ${publication.title}`}
                              itemProp="url"
                            >
                              View Publication <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
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
      <Script id="schema-collectionpage" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Scientific Publications by Somenath Dutta",
            "description": "Complete list of peer-reviewed publications by Somenath Dutta in bioinformatics, CADD, miRNA therapeutics and RNA biology research fields.",
            "url": "https://somenath.biomolecular.space/publications",
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
                ${Object.values(publicationsByYear)
                  .flat()
                  .map(
                    (pub, index) => `{
                  "@type": "ListItem",
                  "position": ${index + 1},
                  "item": {
                    "@type": "ScholarlyArticle",
                    "headline": "${pub.title.replace(/"/g, '\\"')}",
                    "author": "${pub.authors.join(", ").replace(/"/g, '\\"')}",
                    "datePublished": "${pub.publicationDate}",
                    "publisher": "${
                      pub.type === "journal article"
                        ? pub.journal?.replace(/"/g, '\\"') || ""
                        : pub.publisher?.replace(/"/g, '\\"') || ""
                    }"
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
