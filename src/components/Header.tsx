import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const aboutLinks = [
  { to: '/about', label: 'About the Mosque' },
  { to: '/about#facilities', label: 'Facilities' },
  { to: '/about#staff', label: 'Staff & Committee' },
]

const serviceLinks = [
  { to: '/funerals', label: 'Funeral Services' },
  { to: '/services', label: 'All Services' },
  { to: '/islamic-diploma', label: 'Islamic Diploma' },
]


export default function Header() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || mobileOpen

  const navLink = (isActive: boolean) =>
    `cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
      isActive
        ? solid ? 'bg-primary/10 text-primary' : 'bg-white/15 text-white'
        : solid ? 'text-text hover:bg-primary/5 hover:text-primary' : 'text-white/90 hover:bg-white/10 hover:text-white'
    }`

  const dropdownBtn = solid
    ? 'flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text transition-colors duration-150 hover:bg-primary/5 hover:text-primary'
    : 'flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors duration-150 hover:bg-white/10 hover:text-white'

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${solid ? 'border-b border-gray-100 bg-white/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center cursor-pointer" aria-label="Masjid-e-Khazra home">
          <img
            src="/images/logo-landscape.png"
            alt="Masjid-e-Khazra"
            className={`h-10 w-auto sm:h-12 transition-all duration-300 ${solid ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => navLink(isActive)}
          >
            Home
          </NavLink>

          {/* About Dropdown */}
          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button
              className={dropdownBtn}
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              onClick={() => {
                setAboutOpen(false)
                navigate('/about')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              About Us
              <ChevronDown size={14} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-full w-48 pt-2" role="presentation">
                <div className="rounded-lg border border-gray-100 bg-white py-1 shadow-lg" role="menu">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => {
                        setAboutOpen(false)
                        const hash = link.to.split('#')[1]
                        if (hash) {
                          setTimeout(() => {
                            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
                          }, 100)
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      }}
                      className="block cursor-pointer px-4 py-2 text-sm text-text transition-colors hover:bg-primary/5 hover:text-primary"
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/prayer-times"
            className={({ isActive }) => navLink(isActive)}
          >
            Prayer Times
          </NavLink>

          <NavLink
            to="/charity"
            className={({ isActive }) => navLink(isActive)}
          >
            News
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              className={dropdownBtn}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => {
                setServicesOpen(false)
                navigate('/services')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-48 pt-2" role="presentation">
                <div className="rounded-lg border border-gray-100 bg-white py-1 shadow-lg" role="menu">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setServicesOpen(false)}
                      className="block cursor-pointer px-4 py-2 text-sm text-text transition-colors hover:bg-primary/5 hover:text-primary"
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/faq"
            className={({ isActive }) => navLink(isActive)}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => navLink(isActive)}
          >
            Contact
          </NavLink>

          <Link
            to="/donate"
            className="pulse-cta ml-2 cursor-pointer rounded-lg bg-cta px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-cta-hover hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-cta"
          >
            Donate
          </Link>
        </nav>

        <button
          className={`cursor-pointer rounded-lg p-2 transition-colors lg:hidden focus:outline-2 focus:outline-offset-2 focus:outline-primary ${solid ? 'text-text hover:bg-primary/5' : 'text-white hover:bg-white/10'}`}
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
          className="border-t border-gray-100 bg-white/95 backdrop-blur-lg px-4 pb-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Us' },
            { to: '/prayer-times', label: 'Prayer Times' },
            { to: '/charity', label: 'News' },
            { to: '/funerals', label: 'Funeral Services' },
            { to: '/services', label: 'All Services' },
            { to: '/islamic-diploma', label: 'Islamic Diploma' },
            { to: '/faq', label: 'FAQ' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block cursor-pointer rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-text hover:bg-primary/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block cursor-pointer rounded-lg bg-cta px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  )
}
