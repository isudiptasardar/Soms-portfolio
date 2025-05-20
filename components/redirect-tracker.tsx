"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function RedirectTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return

    // Check if this is a redirect (e.g., from a 404 page)
    const referrer = document.referrer
    const isRedirect = referrer && new URL(referrer).origin === window.location.origin

    if (isRedirect) {
      // Log the redirect for analysis
      console.log("Redirect detected:", {
        from: referrer,
        to: window.location.href,
        timestamp: new Date().toISOString(),
      })

      // In a real implementation, you would send this data to your analytics service
      // Example:
      // fetch("/api/redirect-tracker", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     from: referrer,
      //     to: window.location.href,
      //     timestamp: new Date().toISOString(),
      //   }),
      // })
    }
  }, [pathname, searchParams])

  return null
}
