import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Projects | Scientific Outreach",
  description:
    "Research-based projects contributed by Somenath Dutta in the field of bioinformatics and computational biology",
}

export default function ResearchProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/#scientific-outreach"
              className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Scientific Outreach
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Research-Based Projects</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              Throughout his academic journey, Somenath Dutta has contributed to numerous research-based projects that
              have enhanced his understanding of bioinformatics and computational biology. These projects have allowed
              him to apply theoretical knowledge to practical problems and develop innovative solutions.
            </p>

            <h2>Key Research Projects</h2>

            <h3>1. Computational Analysis of SARS-CoV-2 Spike Protein</h3>
            <p>
              Conducted in-depth computational analysis of the spike protein of SARS-CoV-2 (Omicron variant) to identify
              potential targets for peptide-based therapeutics and diagnostics. This project involved molecular
              modeling, docking studies, and sequence analysis to understand the structural and functional implications
              of mutations in the Omicron variant.
            </p>

            <h3>2. miRNA-Based Therapeutics for Liver Cancer</h3>
            <p>
              Developed computational approaches for identifying miRNA targets relevant to liver cancer treatment. This
              project utilized bioinformatics tools to predict miRNA-target interactions, assess their functional
              impact, and prioritize candidates for experimental validation.
            </p>

            <h3>3. In Silico Study of Antiviral Phytochemicals</h3>
            <p>
              Investigated the potential of natural phytochemicals as antiviral agents against SARS-CoV-2 through
              computational methods. This project involved virtual screening, molecular docking, and molecular dynamics
              simulations to identify promising compounds for drug development.
            </p>

            <h3>4. RNA Structure and Function Analysis</h3>
            <p>
              Explored the relationship between RNA structure and function using computational approaches. This project
              focused on predicting RNA secondary and tertiary structures, identifying functional motifs, and
              understanding the impact of sequence variations on RNA function.
            </p>

            <p>
              These research projects have not only contributed to the scientific community but have also shaped
              Somenath's expertise in computational biology and bioinformatics. The skills and knowledge gained through
              these projects continue to inform his current research and academic pursuits.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
