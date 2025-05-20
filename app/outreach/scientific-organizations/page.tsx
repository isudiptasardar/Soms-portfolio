import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scientific Organizations | Scientific Outreach",
  description:
    "Scientific organizations that Somenath Dutta is associated with in the field of bioinformatics and computational biology",
}

export default function ScientificOrganizationsPage() {
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

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Scientific Organizations</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              Somenath Dutta is actively associated with several scientific organizations that promote research,
              education, and collaboration in bioinformatics, computational biology, and related fields. These
              affiliations have provided valuable opportunities for networking, knowledge exchange, and professional
              development.
            </p>

            <h2>Current Affiliations</h2>

            <div className="space-y-6 mt-6">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">International Society for Computational Biology (ISCB)</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Member since 2022</p>
                <p>
                  As a member of ISCB, Somenath participates in various activities organized by the society, including
                  conferences, webinars, and special interest groups. ISCB provides a platform for connecting with
                  researchers worldwide and staying updated with the latest developments in computational biology.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Asian Pacific Bioinformatics Network (APBioNET)</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Member since 2023</p>
                <p>
                  APBioNET is a prominent bioinformatics organization in the Asia-Pacific region. As a member, Somenath
                  has access to regional conferences, workshops, and collaborative research opportunities. The network
                  has been instrumental in connecting him with researchers across Asia and the Pacific.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">RNA Society</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Member since 2023</p>
                <p>
                  The RNA Society is dedicated to fostering research and education in the field of RNA science.
                  Membership has provided Somenath with access to specialized resources, conferences, and a community of
                  RNA researchers, supporting his work in RNA biology and therapeutics.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Korean Society for Bioinformatics (KSBI)</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Member since 2023</p>
                <p>
                  As a doctoral student in South Korea, Somenath is an active member of KSBI, which promotes
                  bioinformatics research and education in Korea. This affiliation has facilitated his integration into
                  the local scientific community and provided opportunities for collaboration with Korean researchers.
                </p>
              </div>
            </div>

            <h2 className="mt-8">Benefits and Contributions</h2>
            <p>
              These organizational affiliations have significantly enhanced Somenath's professional development and
              research capabilities. They provide platforms for:
            </p>
            <ul>
              <li>Presenting research findings to a wider audience</li>
              <li>Accessing specialized resources and databases</li>
              <li>Participating in professional development workshops</li>
              <li>Networking with experts and peers in the field</li>
              <li>Staying updated with the latest research trends and methodologies</li>
            </ul>
            <p>
              In return, Somenath actively contributes to these organizations through participation in events, sharing
              research findings, and engaging in community discussions. These mutual exchanges strengthen both his
              individual growth and the broader scientific community.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
