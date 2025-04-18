import type React from "react"
import "@/app/globals.css"
//import { ThemeProvider } from "@/components/theme-provider"
import { ThemeProvider } from "next-themes"
import GoToTop from "@/components/go-to-top"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures text remains visible during font loading
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
    template: "%s | Somenath Dutta",
    default: "Somenath Dutta | Bioinformatician & Computational Biology Researcher",
  },
  description:
    "Professional portfolio of Somenath Dutta, a bioinformatician specializing in CADD, miRNA therapeutics and RNA biology with expertise in computational approaches to biological problems.",
  keywords: [
    "bioinformatician",
    "CADD",
    "miRNA therapeutics",
    "RNA biology",
    "computational biology",
    "research",
    "Somenath Dutta",
    "Sudipta Sardar"
  ],
  authors: [{ name: "Sudipta Sardar" }],
  creator: "Sudipta Sardar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://somenath.biomolecular.space",
    title: "Somenath Dutta | Bioinformatician & Computational Biology Researcher",
    description:
      "Professional portfolio of Somenath Dutta, a bioinformatician specializing in CADD, miRNA therapeutics and RNA biology",
    siteName: "Somenath Dutta Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Somenath Dutta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somenath Dutta | Bioinformatician",
    description:
      "Professional portfolio of Somenath Dutta, a bioinformatician specializing in CADD, miRNA therapeutics and RNA biology",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://somenath.biomolecular.space",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
              "jobTitle": "Bioinformatician & Computational Biology Researcher",
              "worksFor": {
                "@type": "Organization",
                "name": "Pusan National University"
              },
              "description": "Specializing in Computer-Aided Drug Design, miRNA therapeutics, and RNA biology",
              "knowsAbout": ["CADD", "miRNA Therapeutics", "RNA Biology", "Molecular Modeling", "Bioinformatics", "Machine Learning"]
            }
          `}
        </Script>
      </body>
    </html>
  )
}
