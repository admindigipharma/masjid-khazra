import { Link } from 'react-router-dom'
import { Clock, Heart, Users, BookOpen, Star, Shield, HandHeart, MapPin } from 'lucide-react'
import prayerData from '../data/prayer-times.json'

interface PrayerTime { begins: string; iqamah: string }
interface DayData { date: number; day: string; fajr: PrayerTime; sunrise: string; zuhr: PrayerTime; asr: PrayerTime; maghrib: PrayerTime; isha: PrayerTime }

function getTodayPrayers() {
  const now = new Date()
  const month = String(now.getMonth() + 1)
  const day = now.getDate()
  const monthData = (prayerData.months as Record<string, DayData[]>)[month]
  if (!monthData) return null
  return monthData.find((d) => d.date === day) || null
}

function buildPrayerList(today: DayData | null) {
  if (!today) return [
    { name: 'Fajr', start: '—', jamaat: '—' },
    { name: 'Zuhr', start: '—', jamaat: '—' },
    { name: 'Asr', start: '—', jamaat: '—' },
    { name: 'Maghrib', start: '—', jamaat: '—' },
    { name: 'Isha', start: '—', jamaat: '—' },
    { name: 'Jummah', start: '12:30 PM', jamaat: '1:10 PM' },
  ]
  return [
    { name: 'Fajr', start: today.fajr.begins, jamaat: today.fajr.iqamah },
    { name: 'Zuhr', start: today.zuhr.begins, jamaat: today.zuhr.iqamah },
    { name: 'Asr', start: today.asr.begins, jamaat: today.asr.iqamah },
    { name: 'Maghrib', start: today.maghrib.begins, jamaat: today.maghrib.iqamah },
    { name: 'Isha', start: today.isha.begins, jamaat: today.isha.iqamah },
    { name: 'Jummah', start: '12:30 PM', jamaat: '1:10 PM' },
  ]
}

export default function Home() {
  const today = getTodayPrayers()
  const prayerTimes = buildPrayerList(today)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-28 lg:py-36">
        <img
          src="/images/hero-dome-ceiling.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              Glasgow's Southside — Since the 1970s
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to<br />
              <span className="text-accent">Masjid-e-Khazra</span>
            </h1>
            <p className="mt-4 text-base text-white/70">
              <MapPin size={14} className="inline -mt-0.5 mr-1" aria-hidden="true" />
              138-140 Butterbiggins Road, Glasgow G42 7AF
            </p>
            <p className="mt-3 text-lg leading-relaxed text-white/80 sm:text-xl">
              A focal point for Glasgow's Muslim community. One of Scotland's leading mosques, serving worship, education, and community care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="pulse-cta cursor-pointer rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                Support Your Masjid
              </Link>
              <a
                href="https://maps.google.com/?q=138-140+Butterbiggins+Road+Glasgow+G42+7AF"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 hover:-translate-y-0.5 focus:outline-2 focus:outline-offset-2 focus:outline-white"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-100 bg-white py-6" aria-label="Key facts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <Star size={20} className="shrink-0 text-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-text">50+ Years Serving</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={20} className="shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-text">Registered Charity</span>
            </div>
            <div className="flex items-center gap-3">
              <HandHeart size={20} className="shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-text">Funeral Services</span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={20} className="shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-text">2nd Largest in Glasgow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Times */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="prayer-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
              <Clock size={20} className="text-primary" />
            </div>
            <h2 id="prayer-heading" className="text-2xl font-semibold text-text sm:text-3xl">
              Prayer Times
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="bg-primary/5">
                  <th scope="col" className="py-3.5 pl-5 pr-4 text-left font-semibold text-text">Prayer</th>
                  <th scope="col" className="py-3.5 px-4 text-left font-semibold text-text">Begins</th>
                  <th scope="col" className="py-3.5 pl-4 pr-5 text-left font-semibold text-text">Jamaat</th>
                </tr>
              </thead>
              <tbody>
                {prayerTimes.map((prayer, i) => (
                  <tr key={prayer.name} className={`border-t border-gray-100 transition-colors hover:bg-primary/[0.02] ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
                    <td className="py-3.5 pl-5 pr-4 font-medium text-text">{prayer.name}</td>
                    <td className="py-3.5 px-4 text-text-light">{prayer.start}</td>
                    <td className="py-3.5 pl-4 pr-5 font-semibold text-primary">{prayer.jamaat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-text-light">
            Times are approximate. Please check the MyMasjid app or WhatsApp broadcast for daily updates.
          </p>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="bg-bg py-12 sm:py-16" aria-labelledby="highlights-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="highlights-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Serving Our Community
          </h2>
          <p className="mt-2 max-w-2xl text-text-light">
            From daily prayers to community welfare, we are here to support you.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/funerals"
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white" aria-hidden="true">
                <Heart size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text group-hover:text-primary transition-colors">
                Funeral Services
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                Compassionate funeral services guided by Islamic tradition. Contact our Funeral Director for arrangements.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </Link>

            <Link
              to="/charity"
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white" aria-hidden="true">
                <Users size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text group-hover:text-primary transition-colors">
                Community & Charity
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                Supporting families across Glasgow through food banks, community events, education, and outreach programmes.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </Link>

            <Link
              to="/services"
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white" aria-hidden="true">
                <BookOpen size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text group-hover:text-primary transition-colors">
                Education & Services
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                Islamic education, Quran classes, marriage services, mosque tours, and weekly gatherings with guest scholars.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Storytelling / Impact Section */}
      <section className="py-12 sm:py-16" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 id="impact-heading" className="text-2xl font-semibold text-text sm:text-3xl">
                  More Than a Place of Worship
                </h2>
                <p className="mt-4 text-text-light leading-relaxed">
                  For over fifty years, Masjid-e-Khazra has been at the heart of Glasgow's southside.
                  We are not just a mosque — we are a community. From providing funeral services to
                  running food banks, from educating our youth to welcoming visitors of all faiths,
                  we are here to serve.
                </p>
                <p className="mt-3 text-text-light leading-relaxed">
                  Your support helps us keep our doors open and our programmes running. Together,
                  we can continue to make a difference.
                </p>
                <Link
                  to="/about"
                  className="mt-6 inline-block cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-primary-light focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                >
                  Read our story &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-primary/5 p-5 text-center">
                  <span className="block text-3xl font-bold text-primary">50+</span>
                  <span className="mt-1 block text-sm text-text-light">Years Serving</span>
                </div>
                <div className="rounded-xl bg-primary/5 p-5 text-center">
                  <span className="block text-3xl font-bold text-primary">5</span>
                  <span className="mt-1 block text-sm text-text-light">Daily Prayers</span>
                </div>
                <div className="rounded-xl bg-accent/10 p-5 text-center">
                  <span className="block text-3xl font-bold text-accent">1000s</span>
                  <span className="mt-1 block text-sm text-text-light">Families Supported</span>
                </div>
                <div className="rounded-xl bg-primary/5 p-5 text-center">
                  <span className="block text-3xl font-bold text-primary">2nd</span>
                  <span className="mt-1 block text-sm text-text-light">Largest in Glasgow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="bg-primary py-12 sm:py-16" aria-labelledby="donate-cta-heading">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="donate-cta-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Support Your Masjid
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Your generosity keeps our doors open and our community programmes running. Every contribution makes a difference.
          </p>
          <Link
            to="/donate"
            className="pulse-cta mt-6 inline-block cursor-pointer rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-xl focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </>
  )
}
