import { Suspense } from "react"
import dynamic from "next/dynamic"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Loading from "./loading"

// Lazy load heavy components
const Publications = dynamic(() => import("@/components/publications"), {
  loading: () => <Loading />,
  ssr: true,
})

const ScientificOutreach = dynamic(() => import("@/components/scientific-outreach"), {
  loading: () => <Loading />,
  ssr: true,
})

const Awards = dynamic(() => import("@/components/awards"), {
  loading: () => <Loading />,
  ssr: true,
})

const Gallery = dynamic(() => import("@/components/gallery"), {
  loading: () => <Loading />,
  ssr: true,
})

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <Loading />,
  ssr: true,
})

export const metadata: Metadata = {
  title: "Somenath Dutta | Expert in CADD, miRNA Therapeutics & RNA Biology",
  description:
    "Portfolio of Somenath Dutta, PhD researcher at Pusan National University specializing in Computer-Aided Drug Design (CADD), miRNA therapeutics, and RNA biology with expertise in computational approaches to biological problems.",
  keywords: [
    "Somenath Dutta",
    "bioinformatician",
    "computational biology",
    "CADD",
    "computer-aided drug design",
    "miRNA therapeutics",
    "RNA biology",
    "molecular modeling",
    "drug discovery",
    "Pusan National University",
    "PhD researcher",
    "bioinformatics portfolio",
  ],
  openGraph: {
    title: "Somenath Dutta | Expert in CADD, miRNA Therapeutics & RNA Biology",
    description:
      "Portfolio of Somenath Dutta, PhD researcher specializing in Computer-Aided Drug Design, miRNA therapeutics, and RNA biology.",
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
  twitter: {
    card: "summary_large_image",
    title: "Somenath Dutta | Expert in CADD, miRNA Therapeutics & RNA Biology",
    description:
      "Portfolio of Somenath Dutta, PhD researcher specializing in Computer-Aided Drug Design, miRNA therapeutics, and RNA biology.",
    images: ["/og-image.jpg"],
    creator: "@isudiptasardar",
  },
  alternates: {
    canonical: "https://somenath.biomolecular.space",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id="home" aria-label="Hero section">
          <Hero />
        </section>

        <section id="about" aria-label="About section">
          <About />
        </section>

        <section id="education" aria-label="Education section">
          <Education />
        </section>

        <Suspense fallback={<Loading />}>
          <section id="publications" aria-label="Publications section">
            <Publications />
          </section>
        </Suspense>

        <Suspense fallback={<Loading />}>
          <section id="scientific-outreach" aria-label="Scientific outreach section">
            <ScientificOutreach />
          </section>
        </Suspense>

        <Suspense fallback={<Loading />}>
          <section id="awards" aria-label="Awards section">
            <Awards />
          </section>
        </Suspense>

        <Suspense fallback={<Loading />}>
          <section id="gallery" aria-label="Gallery section">
            <Gallery />
          </section>
        </Suspense>

        <Suspense fallback={<Loading />}>
          <section id="contact" aria-label="Contact section">
            <Contact />
          </section>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
