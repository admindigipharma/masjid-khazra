import { Outlet } from 'react-router-dom'
import PrayerTimesBar from './PrayerTimesBar'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        Skip to main content
      </a>
      <PrayerTimesBar />
      <Header />
      <main className="flex-1 islamic-pattern" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
