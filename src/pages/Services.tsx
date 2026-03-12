import { Link } from 'react-router-dom'
import { GraduationCap, Heart, Users, Eye, MessageCircle, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Marriage Services',
    description: 'We offer Nikah (Islamic marriage) solemnisation services at the mosque. Our Imam will guide you through the process and ensure all religious requirements are fulfilled.',
    cta: { label: 'Contact Us', to: '/contact' },
  },
  {
    icon: GraduationCap,
    title: 'Islamic Education',
    description: 'Quran classes, Islamic studies, and educational programmes for children and adults. We also offer an Islamic Diploma programme for those seeking deeper knowledge.',
    cta: null,
  },
  {
    icon: Users,
    title: 'Pearls of Wisdom',
    description: 'Weekly gatherings featuring guest scholars and speakers. Join us for inspiring talks, discussions, and community learning every week.',
    cta: null,
  },
  {
    icon: Eye,
    title: 'Mosque Tours',
    description: 'We welcome visitors of all faiths and backgrounds to tour our mosque. Please book in advance so we can arrange a guide to show you around and answer your questions.',
    cta: { label: 'Book a Visit', to: '/contact' },
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Beyond daily prayers, we provide a range of services to support our community's spiritual, educational, and social needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="sr-only">All Services</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                  <service.icon size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text">{service.title}</h3>
                <p className="mt-3 text-text-light leading-relaxed">{service.description}</p>
                {service.cta && (
                  <Link
                    to={service.cta.to}
                    className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-light transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                  >
                    {service.cta.label} &rarr;
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="connected-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="connected-heading" className="text-2xl font-semibold text-text sm:text-3xl">Stay Connected</h2>
          <p className="mt-2 max-w-2xl text-text-light">
            Get daily prayer times, event updates, and community announcements straight to your phone.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-bg p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-text">MyMasjid App</h3>
                <p className="mt-1 text-sm text-text-light">
                  Download the MyMasjid app for accurate prayer times, event notifications, and mosque updates. Available on Android and iOS.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-bg p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-text">WhatsApp Broadcast</h3>
                <p className="mt-1 text-sm text-text-light">
                  Join our WhatsApp broadcast list for daily prayer time reminders and important community announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funeral CTA */}
      <section className="bg-primary/5 py-12 sm:py-16" aria-labelledby="funeral-cta-heading">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="funeral-cta-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Funeral Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-light">
            We provide compassionate funeral services guided by Islamic tradition. This is a service not commonly offered by mosques — we are here to help families during their most difficult times.
          </p>
          <Link
            to="/funerals"
            className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-light focus:outline-2 focus:outline-offset-2 focus:outline-primary"
          >
            Learn About Our Funeral Services
          </Link>
        </div>
      </section>
    </>
  )
}
