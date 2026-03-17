import { Outlet } from 'react-router-dom'
import PrayerTimesBar from './PrayerTimesBar'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <PrayerTimesBar />
      <Header />
      <main className="flex-1 gold-watermark" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
