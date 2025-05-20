import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { getPublicationById, formatDate, getAllPublications } from "@/lib/publications"
import { notFound } from "next/navigation"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import Script from "next/script"

// Generate static params for all publications
export async function generateStaticParams() {
  const publications = getAllPublications()
  return publications.map((pub) => ({
    id: pub.id.toString(),
  }))
}

// Generate metadata for each publication
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const publication = getPublicationById(params.id)

  if (!publication) {
    return {
      title: "Publication Not Found",
      description: "The requested publication could not be found.",
    }
  }

  return {
    title: publication.title,
    description: `${publication.title} - Published in ${publication.journal || publication.publisher} by ${publication.authors.join(", ")}`,
    openGraph: {
      title: publication.title,
      description: `Published in ${publication.journal || publication.publisher}`,
      type: "article",
      publishedTime: publication.publicationDate,
      authors: publication.authors,
    },
  }
}

export default function PublicationPage({ params }: { params: { id: string } }) {
  const publication = getPublicationById(params.id)

  if (!publication) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Publications", href: "/publications" },
    { label: publication.title.substring(0, 30) + "...", href: `/publications/${publication.id}`, isCurrent: true },
  ]

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
        <Header />

        <main className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <BreadcrumbNavigation items={breadcrumbItems} />
              <Link
                href="/publications"
                className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Publications
              </Link>
            </div>

            <article className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video w-full relative">
                <Image
                  src={publication.paperImage || "/placeholder.svg"}
                  alt={`Visual representation of the publication: ${publication.title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="capitalize">
                    {publication.type}
                  </Badge>
                  <Badge variant="secondary">{publication.year}</Badge>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold mb-4">{publication.title}</h1>

                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Authors</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">{publication.authors.join(", ")}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Published In</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {publication.type === "journal article" ? publication.journal : publication.publisher}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1">
                    {formatDate(publication.publicationDate)}
                  </p>
                </div>

                {typeof publication.id === "string" && publication.id.startsWith("10.") && (
                  <div className="mt-8">
                    <a
                      href={`https://doi.org/${publication.id}`}
                      className="inline-flex items-center px-4 py-2 bg-zinc-100 dark:bg-zinc-700 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </article>
          </div>
        </main>

        <Footer />
      </div>

      {/* Structured data for ScholarlyArticle */}
      <Script id="schema-article" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": "${publication.title}",
            "author": [
              ${publication.authors.map((author) => `{"@type": "Person", "name": "${author}"}`).join(",")}
            ],
            "datePublished": "${publication.publicationDate}",
            "publisher": {
              "@type": "Organization",
              "name": "${publication.type === "journal article" ? publication.journal : publication.publisher}"
            },
            ${
              typeof publication.id === "string" && publication.id.startsWith("10.")
                ? `"sameAs": "https://doi.org/${publication.id}",`
                : ""
            }
            "isPartOf": {
              "@type": "${publication.type === "journal article" ? "Periodical" : "Book"}",
              "name": "${publication.type === "journal article" ? publication.journal : publication.publisher}"
            }
          }
        `}
      </Script>
    </>
  )
}
