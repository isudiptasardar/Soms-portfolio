import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

type BreadcrumbItem = {
  label: string
  href: string
  isCurrent?: boolean
}

type BreadcrumbNavigationProps = {
  items: BreadcrumbItem[]
}

export default function BreadcrumbNavigation({ items }: BreadcrumbNavigationProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex flex-wrap items-center text-sm text-zinc-600 dark:text-zinc-400"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li className="flex items-center" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
          <Link
            href="/"
            className="flex items-center hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            itemProp="item"
          >
            <Home className="h-4 w-4 mr-1" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          <ChevronRight className="h-4 w-4 mx-2" />
        </li>

        {items.map((item, index) => (
          <li
            key={item.href}
            className="flex items-center"
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            {item.isCurrent ? (
              <span className="font-medium text-zinc-900 dark:text-zinc-100" aria-current="page" itemProp="name">
                {item.label}
              </span>
            ) : (
              <>
                <Link
                  href={item.href}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </>
            )}
            <meta itemProp="position" content={`${index + 2}`} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
