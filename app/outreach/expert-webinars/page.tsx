import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Expert-Led Webinars | Scientific Outreach",
  description:
    "Expert-led webinars attended by Somenath Dutta to enhance his knowledge and skills in bioinformatics and computational biology",
}

export default function ExpertWebinarsPage() {
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

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Expert-Led Webinars</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              Continuous learning is a cornerstone of scientific growth. Somenath Dutta has actively participated in
              numerous expert-led webinars to stay updated with the latest developments in bioinformatics, computational
              biology, and related fields.
            </p>

            <h2>Key Webinars Attended</h2>

            <div className="space-y-6 mt-6">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Single-Cell Omics Workshop</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Organized by Chan Zuckerberg Initiative and Human Cell Atlas | January 2024
                </p>
                <p>
                  Participated in an intensive workshop on single-cell omics technologies and analysis methods. The
                  workshop covered experimental design, data processing, quality control, normalization, dimensionality
                  reduction, clustering, and trajectory inference for single-cell RNA-seq data.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Advanced Molecular Dynamics Simulation Techniques</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Organized by Max Planck Society | November 2023</p>
                <p>
                  Attended a comprehensive webinar series on advanced molecular dynamics simulation techniques for
                  biomolecular systems. Topics included enhanced sampling methods, free energy calculations,
                  coarse-grained modeling, and applications in drug discovery.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">RNA Biology and Therapeutics</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Organized by Stanford University School of Medicine | August 2023
                </p>
                <p>
                  Participated in a specialized webinar on RNA biology and its therapeutic applications. The webinar
                  covered RNA structure prediction, RNA-protein interactions, RNA modifications, and the development of
                  RNA-based therapeutics for various diseases.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Machine Learning in Drug Discovery</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Organized by International Society for Computational Biology | May 2023
                </p>
                <p>
                  Attended a webinar series on the application of machine learning techniques in drug discovery. Topics
                  included deep learning for target identification, virtual screening, QSAR modeling, and de novo drug
                  design.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Next-Generation Sequencing Data Analysis</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Organized by European Bioinformatics Institute | February 2023
                </p>
                <p>
                  Participated in a comprehensive webinar on the analysis of next-generation sequencing data. The
                  webinar covered quality control, alignment, variant calling, annotation, and interpretation of genomic
                  data.
                </p>
              </div>
            </div>

            <h2 className="mt-8">Impact on Research and Skills</h2>
            <p>
              These expert-led webinars have significantly enhanced Somenath's knowledge and skills in various aspects
              of bioinformatics and computational biology. The insights gained from these webinars have been
              instrumental in shaping his research methodologies and approaches to scientific problems.
            </p>
            <p>
              By actively engaging with experts in the field through these webinars, Somenath has been able to stay at
              the forefront of scientific advancements and incorporate cutting-edge techniques into his research work.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
