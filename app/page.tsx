import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Publications from "@/components/publications"
import ScientificOutreach from "@/components/scientific-outreach"
import Awards from "@/components/awards"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Somenath Dutta | Bioinformatician & Computational Biology Researcher",
  description:
    "Professional portfolio of Somenath Dutta, a PhD researcher specializing in Computer-Aided Drug Design (CADD), miRNA therapeutics, and RNA biology with expertise in computational approaches to biological problems.",
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
  openGraph: {
    title: "Somenath Dutta | Bioinformatician & Computational Biology Researcher",
    description:
      "Professional portfolio of Somenath Dutta, a PhD researcher specializing in CADD, miRNA therapeutics and RNA biology with expertise in computational approaches to biological problems.",
    url: "https://somenath.biomolecular.space",
    siteName: "Somenath Dutta - Bioinformatics Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Somenath Dutta - Bioinformatician & Computational Biologist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
        <Hero />
        <About />
        <Education />
        <Publications />
        <ScientificOutreach />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Structured data for WebPage */}
      <Script id="schema-webpage" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Somenath Dutta - Bioinformatician & Computational Biology Researcher",
            "description": "Professional portfolio of Somenath Dutta, a PhD researcher specializing in Computer-Aided Drug Design (CADD), miRNA therapeutics, and RNA biology with expertise in computational approaches to biological problems.",
            "url": "https://somenath.biomolecular.space",
            "author": {
              "@type": "Person",
              "name": "Somenath Dutta"
            },
            "about": {
              "@type": "Person",
              "name": "Somenath Dutta"
            },
            "mainEntity": {
              "@type": "Person",
              "name": "Somenath Dutta"
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#about", "#education", "#publications"]
            },
            "specialty": ["Bioinformatics", "Computational Biology", "CADD", "RNA Biology"]
          }
        `}
      </Script>
    </>
  )
}
