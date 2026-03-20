/**
 * reCAPTCHA v3 — invisible spam scoring.
 * Loads the script on demand and executes with an action name.
 * Token is sent with form data for server-side verification.
 */

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined

let scriptLoaded = false

function loadScript(): Promise<void> {
  if (scriptLoaded || !SITE_KEY) return Promise.resolve()

  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src*="recaptcha"]')) {
      scriptLoaded = true
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
    script.async = true
    script.onload = () => {
      scriptLoaded = true
      resolve()
    }
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA'))
    document.head.appendChild(script)
  })
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

/**
 * Execute reCAPTCHA v3 and return a token.
 * Returns null if reCAPTCHA is not configured (missing site key).
 */
export async function executeRecaptcha(action: string): Promise<string | null> {
  if (!SITE_KEY) return null

  await loadScript()

  return new Promise((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action })
        .then(resolve)
        .catch(() => resolve(null))
    })
  })
}

/** Whether reCAPTCHA is configured (site key present) */
export const recaptchaEnabled = !!SITE_KEY
