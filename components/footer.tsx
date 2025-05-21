import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4">
            <Link
              href="#home"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              scroll={true}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              scroll={true}
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              scroll={true}
            >
              Education
            </Link>
            <Link
              href="#publications"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              scroll={true}
            >
              Publications
            </Link>
            <Link
              href="#scientific-outreach"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              scroll={true}
            >
              Scientific Outreach
            </Link>
            <Link
              href="#awards"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              scroll={true}
            >
              Awards
            </Link>
            <Link
              href="#gallery"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              scroll={true}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              scroll={true}
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4">
            <Link
              href="/publications"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              prefetch={true}
            >
              All Publications
            </Link>
            <Link
              href="/awards"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              prefetch={true}
            >
              All Awards
            </Link>
            <Link
              href="/gallery"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              prefetch={true}
            >
              Full Gallery
            </Link>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            &copy; {currentYear} Somenath Dutta. Crafted with <span className="text-red-300">&hearts; </span> by{" "}
            <a href="https://sudipta.biomolecular.space" className="hover:underline">
              {" "}
              Sudipta{" "}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
