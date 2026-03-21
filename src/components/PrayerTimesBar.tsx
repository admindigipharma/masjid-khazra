import { Link } from 'react-router-dom'
import { toHijri } from 'hijri-converter'
import prayerData from '../data/prayer-times.json'
import { getJumaTimes } from '../lib/juma-times'

interface PrayerTime { begins: string; iqamah: string }
interface DayData { date: number; day: string; fajr: PrayerTime; sunrise: string; zuhr: PrayerTime; asr: PrayerTime; maghrib: PrayerTime; isha: PrayerTime }

const HIJRI_MONTHS = [
  'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
  'Jumada al-Ula', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
  'Ramadan', 'Shawwal', 'Dhul Qi\'dah', 'Dhul Hijjah',
]

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

/**
 * Hijri day adjustment for local moon-sighting differences.
 * 0  = use automatic calculation (default)
 * +1 = mosque started the month 1 day before the algorithm
 * -1 = mosque started the month 1 day after the algorithm
 * Adjusts the input date fed to the converter, so month/year
 * boundaries are handled automatically — no more stale overrides.
 */
const HIJRI_DAY_ADJUSTMENT = 0

function getHijriDate() {
  const now = new Date()
  if (HIJRI_DAY_ADJUSTMENT !== 0) {
    now.setDate(now.getDate() + HIJRI_DAY_ADJUSTMENT)
  }
  const { hy, hm, hd } = toHijri(now.getFullYear(), now.getMonth() + 1, now.getDate())
  return `${hd} ${HIJRI_MONTHS[hm - 1]} ${hy} AH`
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
  ]

  return (
    <div className="bg-primary text-white" role="complementary" aria-label="Today's prayer times">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: single row */}
        <div className="hidden sm:flex items-center justify-between py-1.5 gap-4 text-xs">
          <div className="shrink-0">
            <span className="font-medium text-white/80">{formatDate()}</span>
            <span className="mx-2 text-white/30">|</span>
            <span className="font-medium text-accent/80">{getHijriDate()}</span>
          </div>
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

        {/* Mobile: compact layout */}
        <div className="sm:hidden py-2">
          {/* Date row with Islamic date */}
          <div className="flex items-center justify-between mb-1.5">
            <div>
              <span className="text-[10px] font-medium text-white/80">{formatDate()}</span>
              <span className="mx-1 text-white/30">·</span>
              <span className="text-[10px] font-medium text-accent/80">{getHijriDate()}</span>
            </div>
            <Link
              to="/prayer-times"
              className="text-[10px] font-semibold text-accent hover:text-white transition-colors"
            >
              Full Timetable &rarr;
            </Link>
          </div>

          {/* 5 daily prayers with Start/Jamat labels */}
          <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] gap-x-1 gap-y-0 text-center items-center">
            {/* Header row with labels */}
            <div className="text-left pr-1" />
            {prayers.map((p) => (
              <div key={p.name} className="text-[9px] font-semibold text-accent uppercase tracking-wide">
                {p.name}
              </div>
            ))}
            {/* Start row */}
            <div className="text-left pr-1 text-[8px] font-medium text-white/50 uppercase tracking-wide">Start</div>
            {prayers.map((p) => (
              <div key={`s-${p.name}`} className="rounded-t bg-white/10 px-0.5 py-1 text-[10px] font-medium text-white/70">
                {p.begins}
              </div>
            ))}
            {/* Jamat row */}
            <div className="text-left pr-1 text-[8px] font-medium text-white/50 uppercase tracking-wide">Jamat</div>
            {prayers.map((p) => (
              <div key={`j-${p.name}`} className="rounded-b bg-white/10 px-0.5 py-1 text-[11px] font-bold text-white border-t border-white/5">
                {p.jamaat}
              </div>
            ))}
          </div>

          {/* Juma times for both centres — auto-adjusts for BST/GMT */}
          {(() => { const juma = getJumaTimes(); return (
          <div className="mt-1.5 flex items-center justify-between gap-2 rounded bg-accent/15 px-2 py-1">
            <div className="text-[9px] font-semibold text-accent uppercase tracking-wide">Juma</div>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="text-white/90"><span className="font-bold">{juma.butterbiggins}</span> <span className="text-white/50">Butterbiggins Rd</span></span>
              <span className="text-white/30">|</span>
              <span className="text-white/90"><span className="font-bold">{juma.albertRoad}</span> <span className="text-white/50">Albert Rd</span></span>
            </div>
          </div>
          ); })()}

          {/* Qibla Finder link */}
          <div className="mt-1 flex items-center justify-center">
            <a
              href="https://qiblafinder.withgoogle.com/intl/en/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-medium text-accent/70 hover:text-accent transition-colors"
            >
              🧭 Qibla Finder
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
