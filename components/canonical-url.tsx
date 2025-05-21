"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

export default function CanonicalUrl({ baseUrl = "https://somenath.biomolecular.space" }) {
  const pathname = usePathname()

  // Ensure the path has a trailing slash for consistency
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`

  // Construct the full canonical URL
  const canonicalUrl = `${baseUrl}${path}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}
