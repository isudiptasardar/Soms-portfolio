"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-zinc-800 dark:text-zinc-200">Something went wrong</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        {error.digest && (
          <div className="mb-6 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-md">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Error ID: {error.digest}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="flex items-center">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
