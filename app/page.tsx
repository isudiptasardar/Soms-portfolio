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

export const metadata: Metadata = {
  title: "Somenath Dutta | Bioinformatician",
  description:
    "Professional portfolio of Somenath Dutta, a bioinformatician specializing in CADD, miRNA therapeutics and RNA biology",
  keywords: ["bioinformatician", "CADD", "miRNA therapeutics", "RNA biology", "computational biology", "research"],
  openGraph: {
    title: "Somenath Dutta | Bioinformatician",
    description:
      "Professional portfolio of Somenath Dutta, a bioinformatician specializing in CADD, miRNA therapeutics and RNA biology",
    url: "https://somenath-dutta-portfolio.com",
    siteName: "Somenath Dutta Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Somenath Dutta Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Education />
      <Publications />
      <ScientificOutreach />
      <Awards />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
