import { Link } from 'react-router-dom'
import { Clock, Heart, Users, BookOpen } from 'lucide-react'

const prayerTimes = [
  { name: 'Fajr', start: '4:35 AM', jamaat: '6:00 AM' },
  { name: 'Zuhr', start: '12:32 PM', jamaat: '1:00 PM' },
  { name: 'Asr', start: '4:13 PM', jamaat: '4:39 PM' },
  { name: 'Maghrib', start: '6:20 PM', jamaat: '6:20 PM' },
  { name: 'Isha', start: '7:59 PM', jamaat: '8:30 PM' },
  { name: 'Jummah', start: '12:30 PM', jamaat: '1:10 PM' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Welcome to<br />Masjid-e-Khazra
            </h1>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              A focal point for Glasgow's Muslim community since the 1970s. One of Scotland's leading mosques, serving worship, education, and community care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                Support Your Masjid
              </Link>
              <Link
                to="/about"
                className="rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-2 focus:outline-offset-2 focus:outline-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Times */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="prayer-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Clock size={24} className="text-primary" aria-hidden="true" />
            <h2 id="prayer-heading" className="text-2xl font-semibold text-text sm:text-3xl">
              Prayer Times
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="border-b-2 border-primary/10">
                  <th scope="col" className="py-3 pr-4 text-left font-semibold text-text">Prayer</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold text-text">Begins</th>
                  <th scope="col" className="py-3 pl-4 text-left font-semibold text-text">Jamaat</th>
                </tr>
              </thead>
              <tbody>
                {prayerTimes.map((prayer) => (
                  <tr key={prayer.name} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium text-text">{prayer.name}</td>
                    <td className="py-3 px-4 text-text-light">{prayer.start}</td>
                    <td className="py-3 pl-4 font-semibold text-primary">{prayer.jamaat}</td>
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
      <section className="py-12 sm:py-16" aria-labelledby="highlights-heading">
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
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <Heart size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text group-hover:text-primary">
                Funeral Services
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Compassionate funeral services guided by Islamic tradition. Contact our Funeral Director for arrangements.
              </p>
            </Link>

            <Link
              to="/charity"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <Users size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text group-hover:text-primary">
                Community & Charity
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Supporting families across Glasgow through food banks, community events, education, and outreach programmes.
              </p>
            </Link>

            <Link
              to="/services"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <BookOpen size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text group-hover:text-primary">
                Education & Services
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Islamic education, Quran classes, marriage services, mosque tours, and weekly gatherings with guest scholars.
              </p>
            </Link>
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
            className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </>
  )
}
