import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getRecentPublications, formatAuthors } from "@/lib/publications"

export default function Publications() {
  // Get recent publications using our optimized function
  const recentPublications = getRecentPublications(5)

  // Computational biology related images
  const compBioImages = [
    "https://picsum.photos/seed/rna-structure/600/400", // RNA structure
    "https://picsum.photos/seed/protein-folding/600/400", // Protein folding
    "https://picsum.photos/seed/molecular-dynamics/600/400", // Molecular dynamics
    "https://picsum.photos/seed/gene-expression/600/400", // Gene expression
    "https://picsum.photos/seed/dna-sequencing/600/400", // DNA sequencing
    "https://picsum.photos/seed/bioinformatics/600/400", // Bioinformatics
  ]

  // Image alt text descriptions
  const imageDescriptions = [
    "RNA structure visualization and analysis",
    "Protein folding simulation and prediction",
    "Molecular dynamics simulation of biomolecules",
    "Gene expression analysis and visualization",
    "DNA sequencing and genomic data analysis",
    "Bioinformatics computational methods and tools",
  ]

  return (
    <section id="publications" className="py-20 bg-zinc-50 dark:bg-zinc-800" aria-labelledby="publications-heading">
      <div className="container mx-auto px-4">
        <h2 id="publications-heading" className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Publications
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPublications.map((publication, index) => (
              <div
                key={publication.id}
                className="bg-white border dark:bg-zinc-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full overflow-hidden"
                itemScope
                itemType="https://schema.org/ScholarlyArticle"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={compBioImages[index % compBioImages.length] || "/placeholder.svg"}
                    alt={`${imageDescriptions[index % imageDescriptions.length]} - ${publication.title}`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="capitalize">
                        {publication.type}
                      </Badge>
                      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{publication.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2" itemProp="headline">
                      {publication.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300" itemProp="publisher">
                      {publication.type === "journal article" ? publication.journal : publication.publisher}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1" itemProp="author">
                      {formatAuthors(publication.authors, true)}
                    </p>
                    <meta itemProp="datePublished" content={publication.publicationDate} />
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-600">
                    <Link
                      href={`https://doi.org/${publication.id}`}
                      className="inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
                      aria-label={`Read details about ${publication.title}`}
                    >
                      Read Details <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/publications"
              className="bg-white dark:bg-zinc-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-center h-full border-2 border-dashed border-zinc-200 dark:border-zinc-600 p-6 aspect-[4/3] md:aspect-auto"
              aria-label="View all publications"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">View More Publications</h3>
                <Button variant="outline" className="group">
                  See All Publications
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
