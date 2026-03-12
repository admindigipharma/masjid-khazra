import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/funerals', label: 'Funerals' },
  { to: '/charity', label: 'Charity' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Masjid-e-Khazra home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg" aria-hidden="true">
            M
          </div>
          <div>
            <span className="block text-lg font-semibold text-primary leading-tight">Masjid-e-Khazra</span>
            <span className="block text-xs text-text-light leading-tight">Glasgow</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-text hover:bg-primary/5 hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="ml-2 rounded-lg bg-cta px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-cta-hover focus:outline-2 focus:outline-offset-2 focus:outline-cta"
          >
            Donate
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-text hover:bg-primary/5 md:hidden focus:outline-2 focus:outline-offset-2 focus:outline-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-text hover:bg-primary/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-lg bg-cta px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  )
}
