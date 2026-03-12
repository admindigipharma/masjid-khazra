import { Clock, Smartphone, MessageCircle } from 'lucide-react'

const prayerTimes = [
  { name: 'Fajr', start: '4:35 AM', jamaat: '6:00 AM' },
  { name: 'Zuhr', start: '12:32 PM', jamaat: '1:00 PM' },
  { name: 'Asr', start: '4:13 PM', jamaat: '4:39 PM' },
  { name: 'Maghrib', start: '6:20 PM', jamaat: '6:20 PM' },
  { name: 'Isha', start: '7:59 PM', jamaat: '8:30 PM' },
  { name: 'Jummah', start: '12:30 PM', jamaat: '1:10 PM' },
]

export default function PrayerTimes() {
  const today = new Date()
  const dateStr = today.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Prayer Times</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Daily and monthly prayer timetables for Masjid-e-Khazra, Glasgow.
          </p>
        </div>
      </section>

      {/* Today's Times */}
      <section className="py-12 sm:py-16" aria-labelledby="today-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
              <Clock size={20} className="text-primary" />
            </div>
            <h2 id="today-heading" className="text-2xl font-semibold text-text sm:text-3xl">
              Today's Prayer Times
            </h2>
          </div>
          <p className="mb-8 text-sm text-text-light">{dateStr}</p>

          <div className="max-w-2xl overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="bg-primary/5">
                  <th scope="col" className="py-4 pl-5 pr-4 text-left font-semibold text-text">Prayer</th>
                  <th scope="col" className="py-4 px-4 text-left font-semibold text-text">Begins</th>
                  <th scope="col" className="py-4 pl-4 pr-5 text-left font-semibold text-text">Jamaat</th>
                </tr>
              </thead>
              <tbody>
                {prayerTimes.map((prayer, i) => (
                  <tr key={prayer.name} className={`border-t border-gray-100 transition-colors hover:bg-primary/[0.02] ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
                    <td className="py-4 pl-5 pr-4 font-medium text-text">{prayer.name}</td>
                    <td className="py-4 px-4 text-text-light">{prayer.start}</td>
                    <td className="py-4 pl-4 pr-5 font-semibold text-primary">{prayer.jamaat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-text-light">
            Times are approximate and may change. Please check the MyMasjid app or WhatsApp channel for daily updates.
          </p>
        </div>
      </section>

      {/* Monthly Timetable */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="monthly-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="monthly-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Monthly Timetable
          </h2>
          <p className="mt-2 text-text-light">
            Full monthly prayer timetables are available on our existing website. We are working on integrating the full 12-month timetable here.
          </p>
          <a
            href="https://www.masjidkhazra.org/prayer-times/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-primary-light"
          >
            View full monthly timetable &rarr;
          </a>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-12 sm:py-16" aria-labelledby="updated-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="updated-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Never Miss a Prayer
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-2xl">
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <Smartphone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-text">MyMasjid App</h3>
                <p className="mt-1 text-sm text-text-light">
                  Accurate daily prayer times and mosque notifications. Available on Android and iOS.
                </p>
              </div>
            </div>
            <a
              href="https://whatsapp.com/channel/0029Vb7S4ZFD8SDtXfKSsU3X"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-text">WhatsApp Channel</h3>
                <p className="mt-1 text-sm text-text-light">
                  Join our WhatsApp channel for daily prayer times and community announcements.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
