"use client"

import Script from "next/script"

type SEOStructuredDataProps = {
  type: "Person" | "WebPage" | "Article" | "CollectionPage" | "ContactPage" | "ImageGallery" | "Award"
  data: Record<string, any>
}

export default function SEOStructuredData({ type, data }: SEOStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script id={`schema-${type.toLowerCase()}`} type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}
