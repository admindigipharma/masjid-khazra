import { useEffect, useState } from 'react'

const START_DATE = new Date('2026-05-26T00:00:00')
const END_DATE = new Date('2026-05-28T00:00:00')
const STORAGE_KEY = 'eid-banner-2026-dismissed'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const now = new Date()
    if (now < START_DATE || now >= END_DATE) return
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return
    setVisible(true)
  }, [])

  if (!visible) return null

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  return (
    <div
      role="region"
      aria-label="Eid al Adha announcement"
      className="relative text-white"
      style={{ background: 'linear-gradient(90deg, #065F46 0%, #047857 50%, #065F46 100%)' }}
    >
      <div className="container mx-auto px-4 py-3 pr-12 sm:pr-14">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-center text-sm sm:text-base">
          <span className="font-semibold tracking-wide" style={{ color: '#D4A843' }}>
            Eid al Adha Mubarak
          </span>
          <span className="hidden sm:inline" aria-hidden="true" style={{ color: 'rgba(212, 168, 67, 0.6)' }}>|</span>
          <span>
            Open <strong className="font-semibold">Wednesday 27 May, 9am – 12pm</strong>
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
