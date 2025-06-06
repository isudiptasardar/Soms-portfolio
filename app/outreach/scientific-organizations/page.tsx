import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const ScientificOrganizationsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Scientific Organizations Outreach</h1>
      <p className="mb-4 text-center">
        This page provides information and resources for scientific organizations interested in outreach activities.
      </p>

      {/* Add content about scientific organizations outreach here */}

      <div className="flex justify-center mt-12 mb-8">
        <Link
          href="/outreach"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg font-medium transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Scientific Outreach
        </Link>
      </div>
    </div>
  )
}

export default ScientificOrganizationsPage
