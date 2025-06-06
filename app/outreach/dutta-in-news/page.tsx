import type { Metadata } from "next"
import { getAllNewsItems, getNewsYears, getTotalNewsCount } from "@/lib/news-media"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Newspaper, Video, Award, User } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNavigation from "@/components/breadcrumb-navigation"
import { Noto_Serif_Bengali } from "next/font/google"

// Load Bengali font with proper configuration
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  display: "swap",
  preload: true,
  variable: "--font-noto-serif-bengali",
  fallback: ["serif"],
})

export const metadata: Metadata = {
  title: "Dutta in News - Media Coverage & Recognition",
  description:
    "Media coverage and news articles featuring Somenath Dutta's research achievements, fellowships, and scientific contributions.",
  keywords:
    "Somenath Dutta, news coverage, media, research recognition, ASM Fellowship, Zika virus research, scientist profile",
  openGraph: {
    title: "Dutta in News - Media Coverage & Recognition",
    description:
      "Media coverage and news articles featuring Somenath Dutta's research achievements and scientific contributions.",
    type: "website",
  },
}

function getTypeIcon(type: string) {
  switch (type.toLowerCase()) {
    case "fellowship achievement coverage":
      return <Award className="h-4 w-4" />
    case "research achievement coverage":
    case "research coverage":
      return <Newspaper className="h-4 w-4" />
    case "profile feature":
      return <User className="h-4 w-4" />
    case "documentary/personal story":
      return <Video className="h-4 w-4" />
    default:
      return <Newspaper className="h-4 w-4" />
  }
}

function getTypeBadgeColor(type: string) {
  switch (type.toLowerCase()) {
    case "fellowship achievement coverage":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "research achievement coverage":
    case "research coverage":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "profile feature":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "documentary/personal story":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }
}

// Function to detect Bengali text
function isBengaliText(text: string): boolean {
  // Bengali Unicode range: \u0980-\u09FF
  const bengaliRegex = /[\u0980-\u09FF]/
  return bengaliRegex.test(text)
}

// Component for rendering text with appropriate font
function TextWithFont({ children, className = "" }: { children: string; className?: string }) {
  const isBengali = isBengaliText(children)
  const fontClass = isBengali ? notoSerifBengali.className : ""

  return <span className={`${fontClass} ${className}`}>{children}</span>
}

export default function DuttaInNewsPage() {
  const newsItems = getAllNewsItems()
  const years = getNewsYears()
  const totalCount = getTotalNewsCount()

  // Group news items by year
  const newsItemsByYear = years.reduce(
    (acc, year) => {
      acc[year] = newsItems.filter((item) => item.year === year)
      return acc
    },
    {} as Record<number, typeof newsItems>,
  )

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Outreach", href: "#" },
    { label: "Dutta in News", href: "/outreach/dutta-in-news" },
  ]

  return (
    <div className={notoSerifBengali.variable}>
      <Header />
      <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNavigation items={breadcrumbItems} />

          {/* Header Section */}
          <div className="text-center mb-12 mt-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Dutta in News
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Media coverage and news articles featuring research achievements, fellowships, and scientific
              contributions
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Newspaper className="h-4 w-4" />
                <span>{totalCount} News Articles</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{years.length} Years Covered</span>
              </div>
            </div>
          </div>

          {/* News Items by Year */}
          <div className="space-y-12">
            {years.map((year) => (
              <div key={year} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{year}</h2>
                  <Badge variant="secondary" className="text-sm">
                    {newsItemsByYear[year].length} {newsItemsByYear[year].length === 1 ? "article" : "articles"}
                  </Badge>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {newsItemsByYear[year].map((item, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <Badge className={`text-xs px-2 py-1 ${getTypeBadgeColor(item.type)}`}>
                            <div className="flex items-center gap-1">
                              {getTypeIcon(item.type)}
                              <TextWithFont>{item.type}</TextWithFont>
                            </div>
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <TextWithFont className="block">{item.title}</TextWithFont>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          <TextWithFont>{item.description}</TextWithFont>
                        </CardDescription>
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                        >
                          <span>Read Article</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-16 mb-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Media Recognition</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  These news articles and media coverage highlight significant research achievements, fellowship
                  recognitions, and contributions to the scientific community across multiple years.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalCount}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">News Articles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{years.length}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Years Featured</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
