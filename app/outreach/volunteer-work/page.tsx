import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Volunteer Work | Scientific Outreach",
  description: "Volunteer work undertaken by Somenath Dutta to contribute to the scientific community and society",
}

export default function VolunteerWorkPage() {
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

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Volunteer Work</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              Somenath Dutta has actively volunteered in various organizations to contribute to the scientific growth of
              society. These volunteer experiences have not only allowed him to give back to the community but have also
              enriched his understanding of the broader impact of science on society.
            </p>

            <h2>Key Volunteer Activities</h2>

            <div className="space-y-6 mt-6">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Science Education Outreach Program</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Pusan National University, South Korea | 2023-Present
                </p>
                <p>
                  Volunteers in a program that introduces high school students to bioinformatics and computational
                  biology. Activities include conducting workshops, mentoring student projects, and developing
                  educational materials that make complex scientific concepts accessible to young learners.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">COVID-19 Bioinformatics Resource Development</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Virtual Initiative | 2021-2022</p>
                <p>
                  Volunteered in an international initiative to develop bioinformatics resources for COVID-19 research.
                  Contributed to the creation of databases, analysis pipelines, and educational materials to support
                  researchers working on SARS-CoV-2 genomics and therapeutics.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Bioinformatics Workshop Facilitator</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Pondicherry Central University, India | 2020-2022
                </p>
                <p>
                  Served as a volunteer facilitator for bioinformatics workshops aimed at undergraduate and graduate
                  students. Assisted in organizing hands-on sessions, troubleshooting technical issues, and providing
                  one-on-one guidance to participants learning bioinformatics tools and techniques.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Science Communication Volunteer</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Various Platforms | 2019-Present</p>
                <p>
                  Volunteers in science communication initiatives aimed at making scientific research accessible to the
                  general public. Activities include writing blog posts, creating infographics, and participating in
                  public science events to explain complex scientific concepts in simple terms.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">E-CELL IIT Hyderabad Campus Ambassador</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">IIT Hyderabad, India | 2021</p>
                <p>
                  Served as a campus ambassador for the Entrepreneurship Cell of IIT Hyderabad, promoting
                  entrepreneurship and innovation in science and technology among students. Achieved 3rd position among
                  291 campus ambassadors for outstanding contributions.
                </p>
              </div>
            </div>

            <h2 className="mt-8">Impact and Learning</h2>
            <p>
              These volunteer experiences have had a profound impact on Somenath's personal and professional
              development. They have:
            </p>
            <ul>
              <li>Enhanced his communication and leadership skills</li>
              <li>Broadened his understanding of the societal impact of scientific research</li>
              <li>Provided opportunities to apply his knowledge in diverse contexts</li>
              <li>Connected him with a wider network of scientists and science enthusiasts</li>
              <li>Reinforced his commitment to making science accessible and beneficial to society</li>
            </ul>
            <p>
              Through these volunteer activities, Somenath continues to contribute to the scientific growth of society
              while simultaneously enriching his own perspective and skills as a researcher and science communicator.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
