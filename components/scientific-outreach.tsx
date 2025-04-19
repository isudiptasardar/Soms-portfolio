"use client"
import { OutreachPreview } from "@/components/ui/outreach-preview"

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
              <OutreachPreview
                url="/outreach/research-projects"
                title="Research-Based Projects"
                description="Explore the various research projects Somenath has contributed to, including computational analysis of SARS-CoV-2, miRNA-based therapeutics, and more."
              >
                research-based projects
              </OutreachPreview>
              , delivering{" "}
              <OutreachPreview
                url="/outreach/conference-presentations"
                title="Conference Presentations"
                description="Learn about Somenath's presentations at various national and international conferences, showcasing his research findings to the scientific community."
              >
                presentations at conferences
              </OutreachPreview>
              , and attending{" "}
              <OutreachPreview
                url="/outreach/expert-webinars"
                title="Expert-Led Webinars"
                description="Discover the expert-led webinars Somenath has attended to stay updated with the latest developments in bioinformatics and computational biology."
              >
                expert-led webinars
              </OutreachPreview>
              . He is currently associated with{" "}
              <OutreachPreview
                url="/outreach/scientific-organizations"
                title="Scientific Organizations"
                description="Explore the scientific organizations Somenath is affiliated with, including ISCB, APBioNET, RNA Society, and more."
              >
                several scientific organizations
              </OutreachPreview>{" "}
              and has{" "}
              <OutreachPreview
                url="/outreach/volunteer-work"
                title="Volunteer Work"
                description="Learn about Somenath's volunteer activities in various organizations that contribute to the scientific growth of society."
              >
                volunteered in many organizations
              </OutreachPreview>{" "}
              for the scientific growth of society. These experiences have broadened his perspective, enhanced his
              skills, and strengthened his involvement in the wider scientific community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
