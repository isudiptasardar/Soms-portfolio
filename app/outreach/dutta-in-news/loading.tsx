import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DuttaInNewsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto mb-6 animate-pulse" />
          <div className="flex justify-center items-center gap-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-12">
          {[2025, 2024].map((year) => (
            <div key={year} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Card key={index} className="border-0 shadow-md bg-white/80 dark:bg-slate-800/80">
                    <CardHeader className="pb-3">
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2 animate-pulse" />
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 mb-4">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
                      </div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
