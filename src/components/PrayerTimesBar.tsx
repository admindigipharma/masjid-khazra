import { Link } from 'react-router-dom'
import prayerData from '../data/prayer-times.json'

interface PrayerTime { begins: string; iqamah: string }
interface DayData { date: number; day: string; fajr: PrayerTime; sunrise: string; zuhr: PrayerTime; asr: PrayerTime; maghrib: PrayerTime; isha: PrayerTime }

function getTodayPrayers(): DayData | null {
  const now = new Date()
  const month = String(now.getMonth() + 1)
  const day = now.getDate()
  const monthData = (prayerData.months as Record<string, DayData[]>)[month]
  if (!monthData) return null
  return monthData.find((d) => d.date === day) || null
}

function formatDate() {
  const now = new Date()
  const day = now.getDate()
  const suffix = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th'
  return now.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', year: 'numeric' }).replace(/^\w+/, (d) => d) .replace(/\d+/, `${day}${suffix}`)
}

export default function PrayerTimesBar() {
  const today = getTodayPrayers()
  if (!today) return null

  const prayers = [
    { name: 'Fajr', jamaat: today.fajr.iqamah, begins: today.fajr.begins },
    { name: 'Zuhr', jamaat: today.zuhr.iqamah, begins: today.zuhr.begins },
    { name: 'Asr', jamaat: today.asr.iqamah, begins: today.asr.begins },
    { name: 'Maghrib', jamaat: today.maghrib.iqamah, begins: today.maghrib.begins },
    { name: 'Isha', jamaat: today.isha.iqamah, begins: today.isha.begins },
  ]

  return (
    <div className="bg-primary text-white text-xs" role="complementary" aria-label="Today's prayer times">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1.5 gap-4 overflow-x-auto">
          <span className="shrink-0 font-medium text-white/80 hidden sm:inline">
            {formatDate()}
          </span>
          <div className="flex items-center gap-3 sm:gap-5">
            {prayers.map((p) => (
              <div key={p.name} className="flex items-center gap-1.5 shrink-0">
                <span className="font-semibold text-accent uppercase tracking-wide" style={{ fontSize: '10px' }}>{p.name}</span>
                <span className="text-white/60" style={{ fontSize: '10px' }}>Jamaat</span>
                <span className="font-bold">{p.jamaat}</span>
              </div>
            ))}
          </div>
          <Link
            to="/prayer-times"
            className="shrink-0 font-semibold text-accent hover:text-white transition-colors hidden sm:inline"
          >
            Full Timetable &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
