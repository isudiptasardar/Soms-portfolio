import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const ConferencePresentationsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Conference Presentations</h1>
      <p className="mb-4">This page lists conference presentations related to our scientific outreach efforts.</p>

      {/* Example Presentation (Replace with actual data) */}
      <div className="mb-6 p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Presentation Title</h2>
        <p className="text-gray-700">Presenters: John Doe, Jane Smith</p>
        <p className="text-gray-700">Conference: Example Conference</p>
        <p className="text-gray-700">Date: 2023-10-26</p>
        <a href="#" className="text-blue-500 hover:underline">
          View Abstract
        </a>
      </div>

      {/* Add more presentations here */}

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

export default ConferencePresentationsPage
