import { useEffect } from 'react'

const BASE = 'Masjid-E-Khazra'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Glasgow`
  }, [title])
}
