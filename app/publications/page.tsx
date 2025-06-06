import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, ExternalLink, BookOpen, FileText } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { getPublicationsByYear, formatDate, getTotalPublicationsCount } from "@/lib/publications"
import Script from "next/script"
import OptimizedImage from "@/components/ui/optimized-image"

export const metadata: Metadata = {
  title: "Scientific Publications | Somenath Dutta",
  description:
    "Complete list of peer-reviewed publications by Somenath Dutta in bioinformatics, computer-aided drug design (CADD), miRNA therapeutics and RNA biology research fields. Explore cutting-edge research contributions to computational biology.",
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
    "peer-reviewed articles",
    "molecular modeling research",
  ],
  openGraph: {
    title: "Scientific Publications | Somenath Dutta",
    description:
      "Complete list of peer-reviewed publications by Somenath Dutta in bioinformatics, CADD, miRNA therapeutics and RNA biology",
    url: "https://somenath.biomolecular.space/publications",
    type: "website",
    images: [
      {
        url: "/og-publications.jpg",
        width: 1200,
        height: 630,
        alt: "Scientific Publications by Somenath Dutta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Publications | Somenath Dutta",
    description:
      "Complete list of peer-reviewed publications in bioinformatics, CADD, miRNA therapeutics and RNA biology",
    images: ["/og-publications.jpg"],
  },
  alternates: {
    canonical: "https://somenath.biomolecular.space/publications",
  },
}

export default function PublicationsPage() {
  const publicationsByYear = getPublicationsByYear()
  const years = Object.keys(publicationsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))
  const totalCount = getTotalPublicationsCount()

  const formatAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isLastAuthor = index === authors.length - 1
      const separator = isLastAuthor ? "" : ", "
      const isSomenath = author === "Somenath Dutta"

      return (
        <span key={index}>
          <span className={isSomenath ? "font-semibold text-blue-600 dark:text-blue-400" : ""}>{author}</span>
          {separator}
        </span>
      )
    })
  }

  const getPublicationImageUrl = (publicationId: string | number) => {
    if (typeof publicationId === "string" && publicationId.startsWith("10.")) {
      return `https://api.microlink.io/?url=https://doi.org/${publicationId}&screenshot=true&meta=false&embed=screenshot.url`
    }
    return "/placeholder.svg"
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
        <Header />

        <main className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link
                href="/#publications"
                className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="Back to Portfolio"
              >
                <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
                Back to Portfolio
              </Link>
            </nav>

            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Scientific Publications</h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                Peer-reviewed research contributions in bioinformatics, computer-aided drug design, miRNA therapeutics,
                and RNA biology.
              </p>
              <div className="text-sm text-zinc-500 dark:text-zinc-500">
                Total Publications: <span className="font-semibold">{totalCount}</span>
              </div>
            </header>

            <div className="space-y-16">
              {years.map((year) => (
                <section key={year} className="space-y-6" aria-labelledby={`year-${year}`}>
                  <header className="flex items-center gap-4">
                    <h2
                      id={`year-${year}`}
                      className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2"
                    >
                      {year}
                    </h2>
                    <Badge variant="secondary" className="text-sm">
                      {publicationsByYear[year].length}{" "}
                      {publicationsByYear[year].length === 1 ? "publication" : "publications"}
                    </Badge>
                  </header>

                  <div className="space-y-8">
                    {publicationsByYear[year].map((publication) => (
                      <article
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
                            <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-700">
                              <OptimizedImage
                                src={getPublicationImageUrl(publication.id)}
                                alt={`Visual representation of the publication: ${publication.title}`}
                                width={600}
                                height={400}
                                className="h-full w-full object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                unoptimized
                              />
                            </div>
                          </div>

                          <div className="p-6 md:w-2/3 lg:w-3/4">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline" className="capitalize flex items-center">
                                {publication.type === "journal article" ? (
                                  <FileText className="h-3 w-3 mr-1" aria-hidden="true" />
                                ) : (
                                  <BookOpen className="h-3 w-3 mr-1" aria-hidden="true" />
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

                            <time
                              className="text-sm text-zinc-500 dark:text-zinc-500 mb-4 block"
                              dateTime={publication.publicationDate}
                            >
                              {formatDate(publication.publicationDate)}
                            </time>

                            <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                              {formatAuthors(publication.authors)}
                            </p>

                            <Link
                              href={`/publications/${publication.id}`}
                              className="inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                              aria-label={`Read more about ${publication.title}`}
                              itemProp="url"
                              prefetch={true}
                            >
                              View Publication <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Enhanced Structured Data for CollectionPage */}
      <Script id="schema-collectionpage" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Scientific Publications by Somenath Dutta",
            "description": "Complete list of peer-reviewed publications by Somenath Dutta in bioinformatics, CADD, miRNA therapeutics and RNA biology research fields.",
            "url": "https://somenath.biomolecular.space/publications",
            "author": {
              "@type": "Person",
              "name": "Somenath Dutta",
              "url": "https://somenath.biomolecular.space"
            },
            "about": {
              "@type": "Person",
              "name": "Somenath Dutta"
            },
            "numberOfItems": ${totalCount},
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": ${totalCount},
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
                    "author": [
                      ${pub.authors
                        .map(
                          (author) => `{
                        "@type": "Person",
                        "name": "${author.replace(/"/g, '\\"')}"
                      }`,
                        )
                        .join(",")}
                    ],
                    "datePublished": "${pub.publicationDate}",
                    "publisher": {
                      "@type": "Organization",
                      "name": "${
                        pub.type === "journal article"
                          ? pub.journal?.replace(/"/g, '\\"') || ""
                          : pub.publisher?.replace(/"/g, '\\"') || ""
                      }"
                    },
                    "url": "https://somenath.biomolecular.space/publications/${pub.id}"
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
