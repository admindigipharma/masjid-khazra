import type { VercelRequest, VercelResponse } from '@vercel/node'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY
const TO_EMAIL = 'masjidekhazra@gmail.com'
const FROM_EMAIL = 'Masjid-E-Khazra <contact@masjidkhazra.org>'

const SUBJECT_LABELS: Record<string, string> = {
  general: 'General Enquiry',
  funeral: 'Funeral Services',
  marriage: 'Marriage / Nikah',
  education: 'Education & Classes',
  tour: 'Mosque Tour / Visit',
  donation: 'Donations',
  other: 'Other',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, subject, message, recaptchaToken } = req.body || {}

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  // Verify reCAPTCHA
  if (RECAPTCHA_SECRET && recaptchaToken) {
    const captchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
    })
    const captchaData = await captchaRes.json()

    if (!captchaData.success || captchaData.score < 0.5) {
      return res.status(403).json({ error: 'Spam detected. Please try again.' })
    }
  }

  // Send via Resend
  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured.' })
  }

  const subjectLabel = SUBJECT_LABELS[subject] || subject
  const phoneLine = phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: `[Website] ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #16a34a; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phoneLine}
          <p><strong>Subject:</strong> ${subjectLabel}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #374151;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">
            Sent from the Masjid-E-Khazra website contact form
          </p>
        </div>
      `,
    }),
  })

  if (!emailRes.ok) {
    const err = await emailRes.json().catch(() => ({}))
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }

  return res.status(200).json({ success: true })
}
