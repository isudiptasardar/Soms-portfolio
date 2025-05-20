"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function PerformanceMonitor() {
  const pathname = usePathname()
  const [metrics, setMetrics] = useState<{
    fcp: number | null
    lcp: number | null
    cls: number | null
    fid: number | null
  }>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
  })

  useEffect(() => {
    // Reset metrics on route change
    setMetrics({
      fcp: null,
      lcp: null,
      cls: null,
      fid: null,
    })

    if (typeof window !== "undefined" && "performance" in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        if (entries.length > 0) {
          const fcp = entries[0]
          setMetrics((prev) => ({ ...prev, fcp: fcp.startTime }))
        }
      })
      fcpObserver.observe({ type: "paint", buffered: true })

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        setMetrics((prev) => ({ ...prev, lcp: lastEntry.startTime }))
      })
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        setMetrics((prev) => ({ ...prev, cls: clsValue }))
      })
      clsObserver.observe({ type: "layout-shift", buffered: true })

      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        if (entries.length > 0) {
          const firstInput = entries[0]
          setMetrics((prev) => ({ ...prev, fid: (firstInput as any).processingStart - firstInput.startTime }))
        }
      })
      fidObserver.observe({ type: "first-input", buffered: true })

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        clsObserver.disconnect()
        fidObserver.disconnect()
      }
    }
  }, [pathname])

  // Don't render anything in the DOM
  return null
}
