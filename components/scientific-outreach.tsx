"use client"
import { LinkPreview } from "@/components/ui/link-preview";

export default function ScientificOutreach() {
  return (
    <section id="scientific-outreach" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Scientific Outreach</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-700 rounded-lg shadow-sm p-8 md:p-10">
            <div className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              In addition to Mr. Dutta's academic and research pursuits, he has actively engaged in various scientific
              activities, including contributing to{" "}
              <LinkPreview
                url="https://somenath.biomolecular.space/outreach/research-projects" className="font-bold">
                research-based projects
              </LinkPreview>
              , delivering{" "}
              <LinkPreview
                url="https://somenath.biomolecular.space/outreach/conference-presentations" className="font-bold">
                presentations at conferences
              </LinkPreview>
              , and attending{" "}
              <LinkPreview
                url="https://somenath.biomolecular.space/outreach/expert-webinars" className="font-bold">
                expert-led webinars
              </LinkPreview>
              . He is currently associated with{" "}
              <LinkPreview
                url="https://somenath.biomolecular.space/outreach/scientific-organizations" className="font-bold">
                several scientific organizations
              </LinkPreview>{" "}
              and has{" "}
              <LinkPreview
                url="https://somenath.biomolecular.space/outreach/volunteer-work/" className="font-bold">
                volunteered in many organizations
              </LinkPreview>{" "}
              for the scientific growth of society. These experiences have broadened his perspective, enhanced his
              skills, and strengthened his involvement in the wider scientific community.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
