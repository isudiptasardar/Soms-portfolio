import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
        Return Home
      </Link>
    </div>
  )
}
