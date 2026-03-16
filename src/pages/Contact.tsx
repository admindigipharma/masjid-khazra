import { useState, useRef, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react'
import { sanitize, isValidEmail, isValidPhone, checkRateLimit } from '../lib/form-security'
import HeroSection from '../components/HeroSection'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  form?: string
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const errorRef = useRef<HTMLDivElement>(null)

  function validateForm(data: FormData): FormErrors {
    const errs: FormErrors = {}

    // Honeypot — if filled, it's a bot
    const honeypot = data.get('website') as string
    if (honeypot) {
      errs.form = 'Submission blocked.'
      return errs
    }

    // Rate limit
    if (!checkRateLimit('contact-form')) {
      errs.form = 'Too many submissions. Please try again in a few minutes.'
      return errs
    }

    const name = (data.get('name') as string || '').trim()
    const email = (data.get('email') as string || '').trim()
    const phone = (data.get('phone') as string || '').trim()
    const subject = data.get('subject') as string || ''
    const message = (data.get('message') as string || '').trim()

    if (!name || name.length < 2) {
      errs.name = 'Please enter your full name.'
    } else if (sanitize(name, 100) === '[blocked]') {
      errs.name = 'Name contains invalid characters.'
    }

    if (!email) {
      errs.email = 'Please enter your email address.'
    } else if (!isValidEmail(email)) {
      errs.email = 'Please enter a valid email address.'
    }

    if (phone && !isValidPhone(phone)) {
      errs.phone = 'Please enter a valid UK or Ireland phone number.'
    }

    if (!subject) {
      errs.subject = 'Please select a subject.'
    }

    if (!message || message.length < 10) {
      errs.message = 'Please enter a message (at least 10 characters).'
    } else if (sanitize(message, 2000) === '[blocked]') {
      errs.message = 'Message contains blocked content. Please remove any links or code.'
    }

    return errs
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const validationErrors = validateForm(data)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      errorRef.current?.focus()
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Sanitised data ready for submission
    // Will wire up to email service (e.g. Formspree, Resend)
    void sanitize(data.get('name') as string, 100)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question, need to arrange a service, or want to get involved — reach out."
        startIndex={4}
      />

      <section className="py-12 sm:py-16" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="contact-heading" className="sr-only">Contact Information and Form</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-text">Get in Touch</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-text">Main Mosque</span>
                    <span className="text-sm text-text-light">
                      138-140 Butterbiggins Road,<br />
                      Glasgow G42 7AF
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-text">Albert Road Branch</span>
                    <span className="text-sm text-text-light">
                      69 Albert Road,<br />
                      Glasgow G42 8DP
                    </span>
                  </div>
                </li>
                <li>
                  <a href="tel:01414221154" className="flex items-start gap-3 cursor-pointer group">
                    <Phone size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <span className="block text-sm font-medium text-text">Phone</span>
                      <span className="text-sm text-text-light group-hover:text-primary transition-colors">
                        0141 422 1154
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:07871206102" className="flex items-start gap-3 cursor-pointer group">
                    <Phone size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <span className="block text-sm font-medium text-text">Mobile</span>
                      <span className="text-sm text-text-light group-hover:text-primary transition-colors">
                        07871 206 102
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:masjidekhazra@gmail.com" className="flex items-start gap-3 cursor-pointer group">
                    <Mail size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <span className="block text-sm font-medium text-text">Email</span>
                      <span className="text-sm text-text-light group-hover:text-primary transition-colors">
                        masjidekhazra@gmail.com
                      </span>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-text">Open</span>
                    <span className="text-sm text-text-light">
                      Open daily for all five prayers
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-text">Funeral Enquiries</h4>
                  <p className="mt-1 text-sm text-text-light">
                    Tahir Bashir: <a href="tel:07980900882" className="cursor-pointer text-primary font-medium hover:underline">07980 900 882</a><br />
                    Amir Mushtaq: <a href="tel:07508766843" className="cursor-pointer text-primary font-medium hover:underline">07508 766 843</a><br />
                    Office: <a href="tel:01414221154" className="cursor-pointer text-primary font-medium hover:underline">0141 422 1154 (Option 2)</a><br />
                    Email: <a href="mailto:fsmek@outlook.com" className="cursor-pointer text-primary font-medium hover:underline">fsmek@outlook.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cta/10 text-cta" aria-hidden="true">
                    <Mail size={32} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-text">Message Sent</h3>
                  <p className="mt-2 text-text-light">
                    Thank you for getting in touch. We will respond as soon as possible, insha'Allah.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-text">Send a Message</h3>
                  <p className="mt-1 text-sm text-text-light">We'll get back to you as soon as we can.</p>

                  {/* Error summary */}
                  {hasErrors && (
                    <div
                      ref={errorRef}
                      role="alert"
                      aria-live="assertive"
                      tabIndex={-1}
                      className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="shrink-0 text-red-600" aria-hidden="true" />
                        <p className="text-sm font-medium text-red-800">
                          {errors.form || 'Please fix the errors below.'}
                        </p>
                      </div>
                      {!errors.form && (
                        <ul className="mt-2 list-disc pl-5 text-sm text-red-700">
                          {errors.name && <li>{errors.name}</li>}
                          {errors.email && <li>{errors.email}</li>}
                          {errors.phone && <li>{errors.phone}</li>}
                          {errors.subject && <li>{errors.subject}</li>}
                          {errors.message && <li>{errors.message}</li>}
                        </ul>
                      )}
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                    {/* Honeypot — hidden from real users, bots will fill it */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text">
                        Full Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        maxLength={100}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`mt-1 block w-full cursor-pointer rounded-lg border px-4 py-2.5 text-sm text-text placeholder:text-text-light/50 focus:outline-2 focus:outline-primary ${
                          errors.name ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-primary'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text">
                        Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        maxLength={254}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`mt-1 block w-full cursor-pointer rounded-lg border px-4 py-2.5 text-sm text-text placeholder:text-text-light/50 focus:outline-2 focus:outline-primary ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-primary'
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text">
                        Phone <span className="text-text-light font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        maxLength={20}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`mt-1 block w-full cursor-pointer rounded-lg border px-4 py-2.5 text-sm text-text placeholder:text-text-light/50 focus:outline-2 focus:outline-primary ${
                          errors.phone ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-primary'
                        }`}
                        placeholder="07xxx xxx xxx"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text">
                        Subject <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        className={`mt-1 block w-full cursor-pointer rounded-lg border px-4 py-2.5 text-sm text-text focus:outline-2 focus:outline-primary ${
                          errors.subject ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-primary'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Enquiry</option>
                        <option value="funeral">Funeral Services</option>
                        <option value="marriage">Marriage / Nikah</option>
                        <option value="education">Education & Classes</option>
                        <option value="tour">Mosque Tour / Visit</option>
                        <option value="donation">Donations</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-xs text-red-600">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text">
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        maxLength={2000}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`mt-1 block w-full cursor-pointer rounded-lg border px-4 py-2.5 text-sm text-text placeholder:text-text-light/50 focus:outline-2 focus:outline-primary resize-y ${
                          errors.message ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-primary'
                        }`}
                        placeholder="How can we help you?"
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light focus:outline-2 focus:outline-offset-2 focus:outline-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="map-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="map-heading" className="text-2xl font-semibold text-text sm:text-3xl">Find Us</h2>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.5!2d-4.2615!3d55.8398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846a5e4a7e5c1%3A0x5c5e5c5c5c5c5c5c!2s138-140+Butterbiggins+Rd%2C+Glasgow+G42+7AF!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Masjid-e-Khazra, 138-140 Butterbiggins Road, Glasgow"
            />
          </div>
        </div>
      </section>
    </>
  )
}
