import Link from "next/link"

export default function ScientificOutreach() {
  return (
    <section id="scientific-outreach" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Scientific Outreach</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-700 rounded-lg shadow-sm p-8 md:p-10">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              In addition to Mr. Dutta's academic and research pursuits, he has actively engaged in various scientific
              activities, including contributing to{" "}
              <Link
                href="/outreach/research-projects"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                research-based projects
              </Link>
              , delivering{" "}
              <Link
                href="/outreach/conference-presentations"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                presentations at conferences
              </Link>
              , and attending{" "}
              <Link
                href="/outreach/expert-webinars"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                expert-led webinars
              </Link>
              . He is currently associated with{" "}
              <Link
                href="/outreach/scientific-organizations"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                several scientific organizations
              </Link>{" "}
              and has{" "}
              <Link
                href="/outreach/volunteer-work"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                volunteered in many organizations
              </Link>{" "}
              for the scientific growth of society. These experiences have broadened his perspective, enhanced his
              skills, and strengthened his involvement in the wider scientific community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
