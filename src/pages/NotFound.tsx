import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { usePageTitle } from '../lib/usePageTitle'

export default function NotFound() {
  usePageTitle('Page Not Found')

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-text sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-text/60">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          <Home size={18} aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
