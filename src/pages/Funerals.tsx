import { Link } from 'react-router-dom'
import { Phone, Heart, Clock, Users } from 'lucide-react'

export default function Funerals() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Funeral Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Compassionate care during life's most difficult moments. We are one of the few mosques offering dedicated funeral services, guided by Islamic tradition.
          </p>
        </div>
      </section>

      {/* Immediate Contact */}
      <section className="bg-accent/10 py-8" aria-labelledby="urgent-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div>
              <h2 id="urgent-heading" className="text-lg font-semibold text-text">
                Need to arrange a funeral?
              </h2>
              <p className="mt-1 text-sm text-text-light">
                Contact our Funeral Director, Amir Mushtaq, directly.
              </p>
            </div>
            <a
              href="tel:01414221154"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            >
              <Phone size={18} aria-hidden="true" />
              Call Now: 0141 422 1154
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 sm:py-16" aria-labelledby="overview-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="overview-heading" className="text-2xl font-semibold text-text sm:text-3xl">
              A Service Rooted in Compassion
            </h2>
            <p className="mt-4 text-text-light leading-relaxed">
              In Islam, the funeral process is sacred. It should be handled with urgency, dignity, and
              according to the Sunnah. At Masjid-e-Khazra, we understand how important it is for families
              to have support during these difficult times.
            </p>
            <p className="mt-4 text-text-light leading-relaxed">
              Our Funeral Director, Amir Mushtaq, works closely with families to ensure every aspect of the
              funeral is handled with care and respect, in accordance with Islamic principles.
            </p>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="provide-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="provide-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            How We Help
          </h2>
          <p className="mt-2 text-text-light">
            Our funeral service is here to guide families through every step.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6">
              <Clock size={24} className="text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-text">Prompt Arrangements</h3>
              <p className="mt-2 text-sm text-text-light">
                Islamic tradition calls for burial as soon as possible. We work promptly to arrange all aspects of the funeral without unnecessary delay.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <Heart size={24} className="text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-text">Guided by the Sunnah</h3>
              <p className="mt-2 text-sm text-text-light">
                Every step follows Islamic principles — ensuring the deceased is treated with the respect and dignity our faith demands.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <Users size={24} className="text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-text">Family Support</h3>
              <p className="mt-2 text-sm text-text-light">
                We guide families through the process, handling coordination so you can focus on your family during this time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-12 sm:py-16" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="steps-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            What to Do When Someone Passes Away
          </h2>
          <div className="mt-8 max-w-3xl space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold" aria-hidden="true">
                1
              </div>
              <div>
                <h3 className="font-semibold text-text">Contact the mosque immediately</h3>
                <p className="mt-1 text-sm text-text-light">
                  Call us on <a href="tel:01414221154" className="text-primary font-medium hover:underline">0141 422 1154</a> or
                  contact Amir Mushtaq directly. We are here to help at any time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold" aria-hidden="true">
                2
              </div>
              <div>
                <h3 className="font-semibold text-text">We will guide you through the process</h3>
                <p className="mt-1 text-sm text-text-light">
                  Our Funeral Director will explain the next steps and coordinate everything needed according to Islamic requirements.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold" aria-hidden="true">
                3
              </div>
              <div>
                <h3 className="font-semibold text-text">Janazah prayer at the mosque</h3>
                <p className="mt-1 text-sm text-text-light">
                  The community joins together for the Janazah prayer at Masjid-e-Khazra, coming together to pray for the deceased.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-12 sm:py-16" aria-labelledby="funeral-contact-heading">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="funeral-contact-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Funeral Director: Amir Mushtaq
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            For funeral arrangements or any questions about our funeral services, please do not hesitate to get in touch.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:01414221154"
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100 focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              <Phone size={18} aria-hidden="true" />
              0141 422 1154
            </a>
            <Link
              to="/contact"
              className="rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
