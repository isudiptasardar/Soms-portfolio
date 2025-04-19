import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Page Not Found | 404 Error",
  description: "The page you are looking for could not be found. Navigate back to the homepage.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
      <Header />

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="javascript:history.back()" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-medium mb-4">Looking for something specific?</h3>
            <ul className="space-y-2 text-left">
              <li>
                <Link href="/#about" className="text-blue-600 dark:text-blue-400 hover:underline">
                  About Somenath
                </Link>
              </li>
              <li>
                <Link href="/#publications" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Scientific Publications
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
