"use client"

import { useEffect } from "react"

type StructuredDataProps = {
  data: Record<string, any>
  id: string
}

export default function StructuredData({ data, id }: StructuredDataProps) {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id = id
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      ...data,
    })

    // Check if the script already exists
    const existingScript = document.getElementById(id)
    if (existingScript) {
      // Update existing script
      existingScript.innerHTML = script.innerHTML
    } else {
      // Add new script
      document.head.appendChild(script)
    }

    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById(id)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [data, id])

  return null
}
