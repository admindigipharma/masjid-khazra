/**
 * Form security utilities — honeypot, sanitisation, validation, rate limiting.
 */

// --- Sanitisation ---
export function sanitize(input: string, maxLength = 500): string {
  if (!input || typeof input !== 'string') return ''

  let clean = input.trim().substring(0, maxLength)

  clean = clean
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')

  const suspiciousPatterns = [
    /https?:\/\//gi,
    /www\./gi,
    /<script/gi,
    /javascript:/gi,
    /on\w+=/gi,
    /(\bor\b|\band\b).*=/gi,
    /union\s+select/gi,
    /\bselect\b.*\bfrom\b/gi,
  ]

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(clean)) return '[blocked]'
  }

  return clean
}

// --- Email Validation ---
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  if (email.length > 254) return false
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false

  const disposableDomains = [
    'tempmail', 'throwaway', 'guerrillamail', 'mailinator',
    '10minutemail', 'fakeinbox', 'trashmail', 'temp-mail',
  ]

  const domain = email.split('@')[1].toLowerCase()
  for (const blocked of disposableDomains) {
    if (domain.includes(blocked)) return false
  }

  return true
}

// --- Phone Validation (UK & Ireland) ---
export function isValidPhone(phone: string): boolean {
  if (!phone) return true // optional field

  const cleaned = phone.replace(/[\s\-()]/g, '')

  const ukMobile = /^(\+44|0044)?0?7\d{9}$/
  const ukLandline = /^(\+44|0044)?0?[123]\d{8,9}$/
  const ieMobile = /^(\+353|00353)?0?8[3-9]\d{7}$/
  const ieLandline = /^(\+353|00353)?0?[12]\d{7,8}$/

  return ukMobile.test(cleaned) || ukLandline.test(cleaned) ||
    ieMobile.test(cleaned) || ieLandline.test(cleaned)
}

// --- Rate Limiting (3 submissions per 5 minutes) ---
const submissions = new Map<string, { count: number; firstSubmit: number }>()

export function checkRateLimit(formId: string): boolean {
  const now = Date.now()
  const fiveMinutes = 5 * 60 * 1000
  const state = submissions.get(formId)

  if (!state || now - state.firstSubmit > fiveMinutes) {
    submissions.set(formId, { count: 1, firstSubmit: now })
    return true
  }

  if (state.count >= 3) return false

  state.count++
  return true
}
