"use client"

import { useEffect } from "react"

// Function to report Web Vitals
export function reportWebVitals(metric: any) {
  // You can send the metric to your analytics service here
  console.log(metric)
}

// Hook to monitor performance
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return

    // Check if the browser supports the Performance API
    if (typeof window !== "undefined" && "performance" in window) {
      // Get navigation timing
      const navigationTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      if (navigationTiming) {
        // Calculate key metrics
        const loadTime = navigationTiming.loadEventEnd - navigationTiming.startTime
        const domContentLoaded = navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime
        const timeToFirstByte = navigationTiming.responseStart - navigationTiming.requestStart

        // Log metrics
        console.log(`Load Time: ${loadTime.toFixed(2)}ms`)
        console.log(`DOM Content Loaded: ${domContentLoaded.toFixed(2)}ms`)
        console.log(`Time to First Byte: ${timeToFirstByte.toFixed(2)}ms`)
      }

      // Monitor Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log(`Largest Contentful Paint: ${lastEntry.startTime.toFixed(2)}ms`)
      })
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

      // Monitor First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          console.log(`First Input Delay: ${entry.processingStart - entry.startTime}ms`)
        })
      })
      fidObserver.observe({ type: "first-input", buffered: true })

      // Monitor Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0
        const entries = entryList.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        console.log(`Cumulative Layout Shift: ${clsValue.toFixed(4)}`)
      })
      clsObserver.observe({ type: "layout-shift", buffered: true })

      // Clean up observers
      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])
}
