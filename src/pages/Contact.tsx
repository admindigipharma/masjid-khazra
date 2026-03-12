import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Placeholder — will wire up form submission later
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            We'd love to hear from you. Whether you have a question, need to arrange a service, or want to get involved — reach out.
          </p>
        </div>
      </section>

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
                    <span className="block text-sm font-medium text-text">Address</span>
                    <span className="text-sm text-text-light">
                      138-140 Butterbiggins Road,<br />
                      Glasgow G42 7AF
                    </span>
                  </div>
                </li>
                <li>
                  <a href="tel:01414221154" className="flex items-start gap-3 group">
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
                  <a href="tel:07871206102" className="flex items-start gap-3 group">
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
                  <a href="mailto:masjidekhazra@gmail.com" className="flex items-start gap-3 group">
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
                    Tahir Bashir: <a href="tel:07980900882" className="text-primary font-medium hover:underline">07980 900 882</a><br />
                    Amir Mushtaq: <a href="tel:07508766843" className="text-primary font-medium hover:underline">07508 766 843</a><br />
                    Office: <a href="tel:01414221154" className="text-primary font-medium hover:underline">0141 422 1154 (Option 2)</a><br />
                    Email: <a href="mailto:fsmek@outlook.com" className="text-primary font-medium hover:underline">fsmek@outlook.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center" role="alert">
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
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text placeholder:text-text-light/50 focus:border-primary focus:outline-2 focus:outline-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text placeholder:text-text-light/50 focus:border-primary focus:outline-2 focus:outline-primary"
                        placeholder="you@example.com"
                      />
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
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text placeholder:text-text-light/50 focus:border-primary focus:outline-2 focus:outline-primary"
                        placeholder="07xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text focus:border-primary focus:outline-2 focus:outline-primary"
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
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text placeholder:text-text-light/50 focus:border-primary focus:outline-2 focus:outline-primary resize-y"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                    >
                      Send Message
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.3!2d-4.26!3d55.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDUwJzI0LjAiTiA0wrAxNSczNi4wIlc!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Masjid-e-Khazra location on Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  )
}
