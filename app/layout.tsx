import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GoToTop from "@/components/go-to-top"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://somenath.biomolecular.space"),
  title: {
    template: "%s | Somenath Dutta - Bioinformatician & Computational Biologist",
    default: "Somenath Dutta | Expert in CADD, miRNA Therapeutics & RNA Biology",
  },
  description:
    "Portfolio of Somenath Dutta, PhD researcher specializing in Computer-Aided Drug Design (CADD), miRNA therapeutics, and RNA biology with expertise in computational approaches to biological problems.",
  keywords: [
    "bioinformatician",
    "computational biology",
    "CADD",
    "computer-aided drug design",
    "miRNA therapeutics",
    "RNA biology",
    "molecular modeling",
    "drug discovery",
    "bioinformatics researcher",
    "computational medicine",
    "Somenath Dutta",
    "PhD researcher",
    "Pusan National University",
    "scientific awards",
    "research recognition",
    "academic achievements",
  ],
  authors: [{ name: "Somenath Dutta", url: "https://somenath.biomolecular.space" }],
  creator: "Somenath Dutta",
  publisher: "Pusan National University",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://somenath.biomolecular.space",
    title: "Somenath Dutta | Bioinformatician & Computational Biology Researcher",
    description:
      "Portfolio of Somenath Dutta, PhD researcher specializing in CADD, miRNA therapeutics and RNA biology with expertise in computational approaches to biological problems.",
    siteName: "Somenath Dutta - Bioinformatics Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Somenath Dutta - Bioinformatician & Computational Biologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somenath Dutta | Bioinformatician & Computational Biologist",
    description:
      "Portfolio of Somenath Dutta, PhD researcher specializing in CADD, miRNA therapeutics and RNA biology with expertise in computational approaches to biological problems.",
    images: ["/og-image.jpg"],
    creator: "@SomenathDutta",
  },
  alternates: {
    canonical: "https://somenath.biomolecular.space",
    languages: {
      "en-US": "https://somenath.biomolecular.space",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/somenath-profile.png" as="image" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <GoToTop />
        </ThemeProvider>

        {/* Structured data for Person */}
        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Somenath Dutta",
              "url": "https://somenath.biomolecular.space",
              "image": "https://somenath.biomolecular.space/images/somenath-profile.png",
              "jobTitle": "Bioinformatician & Computational Biology Researcher",
              "worksFor": {
                "@type": "Organization",
                "name": "Pusan National University",
                "url": "https://pusan.ac.kr"
              },
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "Pondicherry Central University",
                  "url": "http://www.bicpu.edu.in/"
                },
                {
                  "@type": "Organization",
                  "name": "Vidyasagar University",
                  "url": "http://www.vidyasagar.ac.in/"
                }
              ],
              "description": "Specializing in Computer-Aided Drug Design, miRNA therapeutics, and RNA biology",
              "knowsAbout": ["CADD", "miRNA Therapeutics", "RNA Biology", "Molecular Modeling", "Bioinformatics", "Machine Learning"],
              "sameAs": [
                "https://www.linkedin.com/in/somenath-dutta-a59181199",
                "https://www.researchgate.net/profile/Somenath-Dutta-3",
                "https://orcid.org/0000-0002-9580-6386",
                "https://scholar.google.com/citations?user=C-KFr7IAAAAJ"
              ],
              "award": [
                "Max Planck Travel and Accommodation Grant for the 2024 Horizons Symposium",
                "First Prize in Quiz Competition at the 2nd Asian Student Council Symposium",
                "Merit-cum-Means Scholarship (Top Performer)"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}
