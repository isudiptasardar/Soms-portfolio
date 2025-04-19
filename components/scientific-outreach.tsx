"use client"
import { LinkPreview } from "@/components/ui/link-preview";

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
              <LinkPreview
                url="/outreach/research-projects">
                research-based projects
              </LinkPreview>
              , delivering{" "}
              <LinkPreview
                url="/outreach/conference-presentations">
                presentations at conferences
              </LinkPreview>
              , and attending{" "}
              <LinkPreview
                url="/outreach/expert-webinars">
                expert-led webinars
              </LinkPreview>
              . He is currently associated with{" "}
              <LinkPreview
                url="/outreach/scientific-organizations">
                several scientific organizations
              </LinkPreview>{" "}
              and has{" "}
              <LinkPreview
                url="https://somenath.biomolecular.space/outreach/volunteer-work/">
                volunteered in many organizations
              </LinkPreview>{" "}
              for the scientific growth of society. These experiences have broadened his perspective, enhanced his
              skills, and strengthened his involvement in the wider scientific community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
