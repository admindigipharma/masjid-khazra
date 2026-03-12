import { useState } from 'react'
import { Clock, Smartphone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import prayerData from '../data/prayer-times.json'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

interface PrayerTime {
  begins: string
  iqamah: string
}

interface DayData {
  date: number
  day: string
  fajr: PrayerTime
  sunrise: string
  zuhr: PrayerTime
  asr: PrayerTime
  maghrib: PrayerTime
  isha: PrayerTime
}

function getTodayData(): DayData | null {
  const now = new Date()
  const month = String(now.getMonth() + 1)
  const day = now.getDate()
  const monthData = (prayerData.months as Record<string, DayData[]>)[month]
  if (!monthData) return null
  return monthData.find((d) => d.date === day) || null
}

export default function PrayerTimes() {
  const now = new Date()
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth() + 1)
  const today = getTodayData()

  const monthData = (prayerData.months as Record<string, DayData[]>)[String(selectedMonth)] || []

  const todayStr = now.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const isToday = (dayDate: number) => {
    return selectedMonth === now.getMonth() + 1 && dayDate === now.getDate()
  }

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
      {today && (
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
            <p className="mb-8 text-sm text-text-light">{todayStr}</p>

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
                  {[
                    { name: 'Fajr', begins: today.fajr.begins, iqamah: today.fajr.iqamah },
                    { name: 'Sunrise', begins: today.sunrise, iqamah: '—' },
                    { name: 'Zuhr', begins: today.zuhr.begins, iqamah: today.zuhr.iqamah },
                    { name: 'Asr', begins: today.asr.begins, iqamah: today.asr.iqamah },
                    { name: 'Maghrib', begins: today.maghrib.begins, iqamah: today.maghrib.iqamah },
                    { name: 'Isha', begins: today.isha.begins, iqamah: today.isha.iqamah },
                  ].map((prayer, i) => (
                    <tr key={prayer.name} className={`border-t border-gray-100 ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
                      <td className="py-4 pl-5 pr-4 font-medium text-text">{prayer.name}</td>
                      <td className="py-4 px-4 text-text-light">{prayer.begins}</td>
                      <td className="py-4 pl-4 pr-5 font-semibold text-primary">{prayer.iqamah}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Monthly Timetable */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="monthly-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 id="monthly-heading" className="text-2xl font-semibold text-text sm:text-3xl">
              Monthly Timetable
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedMonth((m) => (m <= 1 ? 12 : m - 1))}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-text transition-colors hover:bg-primary/5 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="cursor-pointer rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-text focus:border-primary focus:outline-2 focus:outline-primary"
                aria-label="Select month"
              >
                {MONTH_NAMES.map((name, i) => (
                  <option key={name} value={i + 1}>{name} 2026</option>
                ))}
              </select>
              <button
                onClick={() => setSelectedMonth((m) => (m >= 12 ? 1 : m + 1))}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-text transition-colors hover:bg-primary/5 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[800px] text-xs" role="table">
              <thead>
                <tr className="bg-primary text-white">
                  <th scope="col" rowSpan={2} className="py-2 pl-3 pr-2 text-left font-semibold">Date</th>
                  <th scope="col" rowSpan={2} className="py-2 px-2 text-left font-semibold">Day</th>
                  <th scope="colgroup" colSpan={2} className="py-1 px-2 text-center font-semibold border-l border-white/20">Fajr</th>
                  <th scope="col" rowSpan={2} className="py-2 px-2 text-center font-semibold border-l border-white/20">Sunrise</th>
                  <th scope="colgroup" colSpan={2} className="py-1 px-2 text-center font-semibold border-l border-white/20">Zuhr</th>
                  <th scope="colgroup" colSpan={2} className="py-1 px-2 text-center font-semibold border-l border-white/20">Asr</th>
                  <th scope="colgroup" colSpan={2} className="py-1 px-2 text-center font-semibold border-l border-white/20">Maghrib</th>
                  <th scope="colgroup" colSpan={2} className="py-1 px-2 text-center font-semibold border-l border-white/20">Isha</th>
                </tr>
                <tr className="bg-primary-light text-white/90">
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium border-l border-white/20">Start</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium">Jamaat</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium border-l border-white/20">Start</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium">Jamaat</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium border-l border-white/20">Start</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium">Jamaat</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium border-l border-white/20">Start</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium">Jamaat</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium border-l border-white/20">Start</th>
                  <th scope="col" className="py-1 px-2 text-center text-[10px] font-medium">Jamaat</th>
                </tr>
              </thead>
              <tbody>
                {monthData.map((day, i) => {
                  const isFriday = day.day === 'Friday'
                  const highlighted = isToday(day.date)
                  return (
                    <tr
                      key={day.date}
                      className={`border-t border-gray-100 transition-colors ${
                        highlighted
                          ? 'bg-accent/10 font-medium'
                          : isFriday
                          ? 'bg-primary/[0.03]'
                          : i % 2 === 1
                          ? 'bg-gray-50/50'
                          : ''
                      }`}
                    >
                      <td className="py-2 pl-3 pr-2 font-medium text-text">{day.date}</td>
                      <td className={`py-2 px-2 ${isFriday ? 'font-semibold text-primary' : 'text-text-light'}`}>
                        {day.day.slice(0, 3)}
                      </td>
                      <td className="py-2 px-2 text-center text-text-light border-l border-gray-100">{day.fajr.begins}</td>
                      <td className="py-2 px-2 text-center font-medium text-text">{day.fajr.iqamah}</td>
                      <td className="py-2 px-2 text-center text-text-light border-l border-gray-100">{day.sunrise}</td>
                      <td className="py-2 px-2 text-center text-text-light border-l border-gray-100">{day.zuhr.begins}</td>
                      <td className="py-2 px-2 text-center font-medium text-text">{day.zuhr.iqamah}</td>
                      <td className="py-2 px-2 text-center text-text-light border-l border-gray-100">{day.asr.begins}</td>
                      <td className="py-2 px-2 text-center font-medium text-text">{day.asr.iqamah}</td>
                      <td className="py-2 px-2 text-center text-text-light border-l border-gray-100">{day.maghrib.begins}</td>
                      <td className="py-2 px-2 text-center font-medium text-text">{day.maghrib.iqamah}</td>
                      <td className="py-2 px-2 text-center text-text-light border-l border-gray-100">{day.isha.begins}</td>
                      <td className="py-2 px-2 text-center font-medium text-text">{day.isha.iqamah}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-text-light">
            Jamaat times are set by the mosque committee and may be adjusted. Fridays are highlighted.
            Today's date is highlighted in orange.
          </p>
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
