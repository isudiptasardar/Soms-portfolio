import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const ResearchProjectsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Research Projects</h1>
      <p className="mb-4">Here you will find information about our ongoing and completed research projects.</p>

      {/* Example Project (Replace with actual data) */}
      <div className="mb-6 p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Project Title</h2>
        <p className="text-gray-700">
          A brief description of the research project. This could include the goals, methodology, and expected outcomes.
        </p>
        <p className="mt-2">
          <strong>Principal Investigator:</strong> Dr. John Doe
        </p>
        <p>
          <strong>Funding Source:</strong> National Science Foundation
        </p>
      </div>

      {/* Add more project sections here */}

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

export default ResearchProjectsPage
