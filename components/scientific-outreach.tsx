"use client"
import { OutreachPreview } from "@/components/ui/outreach-preview"

export default function ScientificOutreach() {
  return (
    <section id="scientific-outreach" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Scientific Outreach</h2>

        <div className="max-w-4xl mx-auto text-justify">
          <div className="bg-white dark:bg-zinc-700 rounded-lg shadow-sm p-8 md:p-10">
            <div className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              In addition to Mr. Dutta's academic and research pursuits, he has actively engaged in various scientific
              activities, including contributing to{" "}
              <OutreachPreview
                url="/outreach/research-projects"
                className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Research-Based Projects"
                description="Explore the various research projects Somenath has contributed to, including computational analysis of SARS-CoV-2, miRNA-based therapeutics, and more."
              >
                research-based projects
              </OutreachPreview>
              , delivering{" "}
              <OutreachPreview
                url="/outreach/conference-presentations"
                className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Conference Presentations"
                description="Learn about Somenath's presentations at various national and international conferences, showcasing his research findings to the scientific community."
              >
                presentations at conferences
              </OutreachPreview>
              , and attending{" "}
              <OutreachPreview
                url="/outreach/expert-webinars"
                className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Expert-Led Webinars"
                description="Explore the various workshops, webinars, and academic programs attended by Somenath Dutta to enhance his knowledge and expertise in bioinformatics and computational biology."
              >
                expert-led webinars
              </OutreachPreview>
              . He is currently associated with{" "}
              <OutreachPreview
                url="/outreach/scientific-organizations"
                className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Scientific Organizations"
                description="Discover the scientific organizations that Somenath Dutta is affiliated with, providing him networking opportunities and professional development in the field of bioinformatics."
              >
                several scientific organizations
              </OutreachPreview>{" "}
              and has{" "}
              <OutreachPreview
                url="/outreach/volunteer-work"
                className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Volunteer Work"
                description="Learn about Somenath Dutta's volunteer work and contributions to various scientific organizations and communities."
              >
                volunteered in many organizations
              </OutreachPreview>{" "}
              for the scientific growth of society. These experiences have broadened his perspective, enhanced his
              skills, and strengthened his involvement in the wider scientific community. His impactful contributions have also been featured in {" "}
              <OutreachPreview url="/outreach/dutta-in-news" className="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" title="Dutta in News" description="Mr. Dutta's work and contributions have been recognized in several newspapers, reflecting the broader impact of his scintific engagement and public outreach."> several newspapers </OutreachPreview>, underscoring his growing influence in both academic and publc spheres.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
