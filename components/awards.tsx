import { Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getRecentAwards } from "@/lib/awards"

export default function Awards() {
  // Get recent awards using our utility function
  const displayedAwards = getRecentAwards(6)

  return (
    <section id="awards" className="py-20" aria-labelledby="awards-heading">
      <div className="container mx-auto px-4">
        <h2 id="awards-heading" className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Awards & Recognition
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedAwards.map((award) => (
              <div
                key={award.id}
                className="flex flex-col items-start p-6 bg-zinc-50 dark:bg-zinc-800 rounded-lg"
                itemScope
                itemType="https://schema.org/Award"
              >
                <div className="p-3 bg-zinc-100 dark:bg-zinc-700 rounded-full mb-4">
                  <Trophy className="h-6 w-6 text-amber-500" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold" itemProp="name">
                    {award.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2" itemProp="description">
                    {award.organization}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1" itemProp="dateAwarded">
                    {award.year}
                  </p>
                </div>
              </div>
            ))}

            {/* View More Card */}
            <Link
              href="/awards"
              className="flex flex-col justify-center items-center p-6 bg-white dark:bg-zinc-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-dashed border-zinc-200 dark:border-zinc-600 h-full"
              aria-label="View all awards and recognitions"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">View More Awards</h3>
                <Button variant="outline" className="group">
                  See All Awards
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
