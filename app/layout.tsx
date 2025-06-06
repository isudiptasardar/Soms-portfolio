import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GoToTop from "@/components/go-to-top"
import PerformanceMonitor from "@/components/performance-monitor"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

// Optimize font loading with preload and variable font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://somenath.biomolecular.space"),
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
  ],
  authors: [{ name: "Somenath Dutta", url: "https://somenath.biomolecular.space" }],
  creator: "Somenath Dutta",
  publisher: "Pusan National University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somenath Dutta | Bioinformatician & Computational Biologist",
    description:
      "Portfolio of Somenath Dutta, PhD researcher specializing in CADD, miRNA therapeutics and RNA biology with expertise in computational approaches to biological problems.",
    images: ["/og-image.jpg"],
    creator: "@isudiptasardar",
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION || "",
  },
  category: "Science",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.microlink.io" />
        <link rel="dns-prefetch" href="https://doi.org" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <GoToTop />
          <PerformanceMonitor />
        </ThemeProvider>

        {/* Enhanced Structured Data for Person */}
        <Script id="schema-person" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Somenath Dutta",
              "url": "https://somenath.biomolecular.space",
              "image": {
                "@type": "ImageObject",
                "url": "https://somenath.biomolecular.space/images/somenath-profile.png",
                "width": 400,
                "height": 400
              },
              "jobTitle": "Bioinformatician & Computational Biology Researcher",
              "worksFor": {
                "@type": "Organization",
                "name": "Pusan National University",
                "url": "https://pusan.ac.kr",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "KR",
                  "addressLocality": "Busan"
                }
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
              "knowsAbout": [
                "CADD",
                "miRNA Therapeutics", 
                "RNA Biology",
                "Molecular Modeling",
                "Bioinformatics",
                "Machine Learning",
                "Drug Discovery",
                "Computational Medicine"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/somenath-dutta-a59181199",
                "https://www.researchgate.net/profile/Somenath-Dutta-3",
                "https://orcid.org/0000-0002-9580-6386",
                "https://scholar.google.com/citations?user=C-KFr7IAAAAJ"
              ],
              "nationality": "Indian",
              "gender": "Male"
            }
          `}
        </Script>

        {/* Website Structured Data */}
        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Somenath Dutta - Bioinformatics Portfolio",
              "url": "https://somenath.biomolecular.space",
              "description": "Portfolio of Somenath Dutta, PhD researcher specializing in CADD, miRNA therapeutics and RNA biology",
              "author": {
                "@type": "Person",
                "name": "Somenath Dutta"
              },
              "inLanguage": "en-US",
              "copyrightYear": ${new Date().getFullYear()},
              "genre": "Science",
              "keywords": "bioinformatics, computational biology, CADD, miRNA therapeutics, RNA biology"
            }
          `}
        </Script>
      </body>
    </html>
  )
}
