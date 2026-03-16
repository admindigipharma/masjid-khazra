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
    { name: 'Fajr', begins: today.fajr.begins, jamaat: today.fajr.iqamah },
    { name: 'Zuhr', begins: today.zuhr.begins, jamaat: today.zuhr.iqamah },
    { name: 'Asr', begins: today.asr.begins, jamaat: today.asr.iqamah },
    { name: 'Maghrib', begins: today.maghrib.begins, jamaat: today.maghrib.iqamah },
    { name: 'Isha', begins: today.isha.begins, jamaat: today.isha.iqamah },
    { name: 'Juma', begins: '12:30', jamaat: '1:10' },
  ]

  return (
    <div className="bg-primary text-white" role="complementary" aria-label="Today's prayer times">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: single row */}
        <div className="hidden sm:flex items-center justify-between py-1.5 gap-4 text-xs">
          <span className="shrink-0 font-medium text-white/80">
            {formatDate()}
          </span>
          <div className="flex items-center gap-4">
            {prayers.map((p) => (
              <div key={p.name} className="flex items-center gap-1.5 shrink-0">
                <span className="font-semibold text-accent uppercase tracking-wide" style={{ fontSize: '10px' }}>{p.name}</span>
                <span className="font-bold">{p.begins}</span>
                <span className="text-white/40">|</span>
                <span className="font-bold text-accent">{p.jamaat}</span>
              </div>
            ))}
          </div>
          <Link
            to="/prayer-times"
            className="shrink-0 font-semibold text-accent hover:text-white transition-colors"
          >
            Full Timetable &rarr;
          </Link>
        </div>

        {/* Mobile: compact grid showing all prayers */}
        <div className="sm:hidden py-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-medium text-white/80">{formatDate()}</span>
            <Link
              to="/prayer-times"
              className="text-[10px] font-semibold text-accent hover:text-white transition-colors"
            >
              Full Timetable &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-6 gap-1 text-center">
            {prayers.map((p) => (
              <div key={p.name} className="rounded bg-white/10 px-1 py-1.5">
                <span className="block text-[9px] font-semibold text-accent uppercase tracking-wide">{p.name}</span>
                <span className="block text-[10px] font-medium text-white/70 mt-0.5">{p.begins}</span>
                <span className="block text-[11px] font-bold text-white mt-0.5">{p.jamaat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
