import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import CursorSunbursts from './components/CursorSunbursts'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PrayerTimes from './pages/PrayerTimes'
import Services from './pages/Services'
import Funerals from './pages/Funerals'
import Charity from './pages/Charity'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Resources from './pages/Resources'
import IslamicDiploma from './pages/IslamicDiploma'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <CursorSunbursts />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="prayer-times" element={<PrayerTimes />} />
          <Route path="services" element={<Services />} />
          <Route path="funerals" element={<Funerals />} />
          <Route path="charity" element={<Charity />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="resources" element={<Resources />} />
          <Route path="islamic-diploma" element={<IslamicDiploma />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
