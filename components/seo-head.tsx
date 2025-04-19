import Head from "next/head"

type SEOHeadProps = {
  title: string
  description: string
  canonicalUrl: string
  ogType?: string
  ogImage?: string
  twitterCard?: string
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = "/og-image.jpg",
  twitterCard = "summary_large_image",
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
