import Header from "@/components/header"
import Footer from "@/components/footer"
import { LinkPreview } from "@/components/ui/link-preview"
import { OutreachPreview } from "@/components/ui/outreach-preview"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-12">Link Preview Demo</h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Website Previews</h2>
              <p className="text-lg mb-4">
                <LinkPreview url="https://nextjs.org" className="font-bold">
                  Next.js
                </LinkPreview>{" "}
                is a React framework for building full-stack web applications. You can use{" "}
                <LinkPreview url="https://tailwindcss.com" className="font-bold">
                  Tailwind CSS
                </LinkPreview>{" "}
                with it to create beautiful user interfaces.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Outreach Previews</h2>
              <p className="text-lg mb-4">
                Somenath has contributed to various{" "}
                <OutreachPreview
                  url="/outreach/research-projects"
                  title="Research-Based Projects"
                  description="Explore the various research projects Somenath has contributed to, including computational analysis of SARS-CoV-2, miRNA-based therapeutics, and more."
                >
                  research-based projects
                </OutreachPreview>{" "}
                and delivered{" "}
                <OutreachPreview
                  url="/outreach/conference-presentations"
                  title="Conference Presentations"
                  description="Learn about Somenath's presentations at various national and international conferences, showcasing his research findings to the scientific community."
                >
                  presentations at conferences
                </OutreachPreview>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
