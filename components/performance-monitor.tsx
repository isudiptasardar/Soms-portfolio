"use client"

import { usePerformanceMonitoring } from "@/lib/performance"

export default function PerformanceMonitor() {
  // Use the performance monitoring hook
  usePerformanceMonitoring()

  // This component doesn't render anything
  return null
}
