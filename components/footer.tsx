export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
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
