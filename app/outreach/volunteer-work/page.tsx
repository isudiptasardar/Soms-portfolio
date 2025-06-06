import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const VolunteerWorkPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Volunteer Work Opportunities</h1>
      <p className="mb-4 text-center">Explore various volunteer opportunities related to scientific outreach.</p>

      {/* Placeholder for volunteer opportunities list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Opportunity 1</h2>
          <p>Description of opportunity 1.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Opportunity 2</h2>
          <p>Description of opportunity 2.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Opportunity 3</h2>
          <p>Description of opportunity 3.</p>
        </div>
      </div>

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

export default VolunteerWorkPage
