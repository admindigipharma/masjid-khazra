/**
 * Juma (Friday) prayer times for both MEK centres.
 * Auto-adjusts for UK BST (summer) and GMT (winter).
 *
 * UK DST rules:
 *   BST starts: last Sunday in March at 1:00 AM GMT
 *   GMT starts: last Sunday in October at 2:00 AM BST
 */

interface JumaTimes {
  butterbiggins: string
  albertRoad: string
}

const JUMA_GMT: JumaTimes = {
  butterbiggins: '1:00 PM',
  albertRoad: '12:45 PM',
}

const JUMA_BST: JumaTimes = {
  butterbiggins: '2:00 PM',
  albertRoad: '1:45 PM',
}

/** Check if a given date is in UK BST using Intl timezone data */
function isUKSummerTime(date: Date = new Date()): boolean {
  const jan = new Date(date.getFullYear(), 0, 1)
  const jul = new Date(date.getFullYear(), 6, 1)

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    timeZoneName: 'short',
  })

  const janTZ = formatter.format(jan)
  const julTZ = formatter.format(jul)
  const nowTZ = formatter.format(date)

  // In winter (GMT) the timezone abbreviation matches January
  // In summer (BST) it matches July
  const winterAbbr = janTZ.split(' ').pop()
  const summerAbbr = julTZ.split(' ').pop()
  const currentAbbr = nowTZ.split(' ').pop()

  return currentAbbr === summerAbbr && currentAbbr !== winterAbbr
}

export function getJumaTimes(): JumaTimes {
  return isUKSummerTime() ? JUMA_BST : JUMA_GMT
}
