import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full mb-6">
      <ol className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
        <li>
          <Link 
            href="/" 
            className="hover:text-primary transition-colors duration-200 flex items-center"
          >
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <svg
              className="w-4 h-4 mx-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-900 dark:text-white truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}