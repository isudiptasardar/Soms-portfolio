import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const DuttaInNewsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dutta in News</h1>

      {/* News Articles Section - Replace with actual content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example News Article Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Article Title 1</h2>
          <p className="text-gray-700">Brief description of the article. Link to the full article.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Article Title 2</h2>
          <p className="text-gray-700">Brief description of the article. Link to the full article.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Article Title 3</h2>
          <p className="text-gray-700">Brief description of the article. Link to the full article.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </a>
        </div>
        {/* End Example News Article Card */}
      </div>

      {/* Back to Scientific Outreach Button */}
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

export default DuttaInNewsPage
