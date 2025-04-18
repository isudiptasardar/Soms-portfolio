import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conference Presentations | Scientific Outreach",
  description: "Presentations delivered by Somenath Dutta at various scientific conferences and symposiums",
}

export default function ConferencePresentationsPage() {
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

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Conference Presentations</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              Somenath Dutta has presented his research findings at various national and international conferences,
              showcasing his work to the scientific community and engaging in valuable discussions with peers and
              experts in the field.
            </p>

            <h2>Notable Conference Presentations</h2>

            <div className="space-y-8 mt-6">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Asia & Pacific Bioinformatics Joint Conference 2024</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Okinawa, Japan | March 2024</p>
                <p className="mb-2">
                  <strong>Presentation Title:</strong> Computational Approaches for RNA-Targeted Drug Discovery
                </p>
                <p>
                  Presented novel computational methods for identifying small molecules that can target specific RNA
                  structures, with applications in developing therapeutics for RNA-related diseases.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  International Society for Computational Biology (ISCB) Asian Student Council Symposium
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Virtual Event | November 2023</p>
                <p className="mb-2">
                  <strong>Presentation Title:</strong> miRNA-Based Therapeutics for Liver Cancer: A Bioinformatics
                  Approach
                </p>
                <p>
                  Presented research on identifying miRNA targets for liver cancer treatment using computational
                  methods, which was recognized with the First Prize in the Quiz Competition.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">CompBio-2023 Conference</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">National University of Singapore | July 2023</p>
                <p className="mb-2">
                  <strong>Presentation Title:</strong> In Silico Analysis of SARS-CoV-2 Variants for Vaccine Development
                </p>
                <p>
                  Presented computational analysis of SARS-CoV-2 variants to identify conserved epitopes for potential
                  vaccine candidates, which received positive feedback from the scientific community.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  National Seminar on Bioinformatics and Computational Biology
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Pondicherry Central University, India | February 2022
                </p>
                <p className="mb-2">
                  <strong>Presentation Title:</strong> Molecular Docking Studies of Phytochemicals Against SARS-CoV-2
                  Main Protease
                </p>
                <p>
                  Presented findings on the potential of natural compounds as inhibitors of the SARS-CoV-2 main
                  protease, contributing to the search for COVID-19 therapeutics.
                </p>
              </div>
            </div>

            <h2 className="mt-8">Impact and Recognition</h2>
            <p>
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
