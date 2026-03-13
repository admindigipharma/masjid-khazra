import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Heart,
  Eye,
  MessageCircle,
  Smartphone,
  Cross,
  Phone,
  BookOpen,
  Users,
  Mail,
  ExternalLink,
  AlertTriangle,
} from 'lucide-react'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            From funeral services to education and marriage — we provide a range of services to support our community's spiritual, educational, and social needs.
          </p>
        </div>
      </section>

      {/* Funeral Services Card */}
      <section className="py-12 sm:py-16" aria-labelledby="funeral-card-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
              <Cross size={24} />
            </div>
            <h2 id="funeral-card-heading" className="mt-4 text-xl font-semibold text-text">Funeral Services</h2>
            <p className="mt-3 text-text-light leading-relaxed">
              One of the few mosques offering dedicated funeral services. Our Funeral Director, Amir Mushtaq, provides compassionate support and guidance through every step, in accordance with Islamic tradition.
            </p>
            <Link
              to="/funerals"
              className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-light transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-primary"
            >
              Learn More &rarr;
            </Link>
          </article>
        </div>
      </section>

      {/* Marriage & Visits Grid */}
      <section className="pb-12 sm:pb-16" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="sr-only">Marriage and Visit Services</h2>
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Marriage Services */}
            <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <Heart size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text">Marriage Services</h3>
              <p className="mt-3 text-text-light leading-relaxed">
                We offer Nikah (Islamic marriage) solemnisation services at the mosque or at an appointed venue with the Imam. Our Imam will guide you through the process and ensure all religious requirements are fulfilled.
              </p>

              <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <h4 className="font-semibold text-text flex items-center gap-2">
                  <AlertTriangle size={16} className="text-accent shrink-0" aria-hidden="true" />
                  Scotland Legal Requirements
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-text-light">
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    Couples must give notice of marriage to the registrar of their district.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    Notice must be given within three months prior to the wedding, and no later than 29 days before the ceremony.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    The Marriage Schedule must be collected in person from the registration office.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    Forms are available at{' '}
                    <a
                      href="https://www.nrscotland.gov.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary-light transition-colors"
                    >
                      www.nrscotland.gov.uk
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4 rounded-lg border border-accent/30 bg-accent/5 p-4">
                <p className="text-sm font-semibold text-text">
                  The Imam will not solemnise a marriage without the Marriage Schedule.
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <h4 className="text-sm font-semibold text-text">Contact for Marriage Services</h4>
                <a
                  href="tel:01414221154"
                  className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary-light transition-colors"
                >
                  <Phone size={14} aria-hidden="true" />
                  0141 422 1154 (speak with Imams)
                </a>
                <a
                  href="tel:07871206102"
                  className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary-light transition-colors"
                >
                  <Phone size={14} aria-hidden="true" />
                  Haji Mohammed Akram — 07871 206 102
                </a>
              </div>
            </article>

            {/* Visits & Tours */}
            <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                <Eye size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text">Visits &amp; Tours</h3>
              <p className="mt-3 text-text-light leading-relaxed">
                We welcome visitors of all faiths and backgrounds to tour our mosque. All visits must be booked in advance by email, post, or telephone.
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-text">What Your Visit Includes</h4>
                <ul className="mt-3 space-y-2 text-sm text-text-light">
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    Guided building tour with a faith guide
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    Presentation on the Islamic faith
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    Question and answer session
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    Opportunity to observe prayer
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg border border-gray-200 bg-bg p-4">
                <h4 className="text-sm font-semibold text-text">Visitor Guidelines</h4>
                <ul className="mt-3 space-y-2 text-sm text-text-light">
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-light" aria-hidden="true" />
                    Please dress modestly
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-light" aria-hidden="true" />
                    Respect worshippers at all times
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-light" aria-hidden="true" />
                    Remove shoes before entering the prayer hall
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-light" aria-hidden="true" />
                    No food or drink except in approved areas
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-text-light" aria-hidden="true" />
                    No smoking on the premises
                  </li>
                </ul>
                <p className="mt-3 text-xs text-text-light italic">
                  The mosque reserves the right to discontinue any visit if disrespectful behaviour occurs.
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-block text-sm font-semibold text-primary hover:text-primary-light transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              >
                Book a Visit &rarr;
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* Education & Weekly Gatherings — Featured Section */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="education-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
            <GraduationCap size={28} />
          </div>
          <h2 id="education-heading" className="mt-4 text-2xl font-semibold text-text sm:text-3xl">
            Weekly Gatherings &amp; Education
          </h2>
          <p className="mt-2 max-w-3xl text-text-light">
            We offer a comprehensive programme of Islamic education, Qur&apos;anic study, and community gatherings for all ages. Classes run throughout the week — everyone is welcome.
          </p>

          {/* Pearls of Wisdom & Daily Dars highlights */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <Users size={20} className="text-primary shrink-0" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-text">Pearls of Wisdom</h3>
              </div>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                A monthly gathering featuring guest scholars and inspiring talks. Delivered in English only. Food is served after the programme. Open to all — everyone is welcome.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-bg p-6">
              <div className="flex items-center gap-3">
                <BookOpen size={20} className="text-primary shrink-0" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-text">Daily Dars</h3>
              </div>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                Islamic lessons delivered daily after Zuhr prayer. A consistent opportunity to deepen your understanding of the faith throughout the week.
              </p>
            </div>
          </div>

          {/* Weekly Timetable */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-text">Weekly Class Timetable</h3>
            <p className="mt-1 text-sm text-text-light">
              Evening classes follow Maghrib prayer in spring/summer and Isha prayer in autumn/winter.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="bg-primary/5">
                    <th scope="col" className="py-3.5 pl-5 pr-4 text-left font-semibold text-text">Day</th>
                    <th scope="col" className="py-3.5 pl-4 pr-5 text-left font-semibold text-text">Class</th>
                    <th scope="col" className="hidden py-3.5 pl-4 pr-5 text-left font-semibold text-text sm:table-cell">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 pl-5 pr-4 font-medium text-text align-top">Daily</td>
                    <td className="py-3 pl-4 pr-5 text-text-light">Dars (Islamic lessons)</td>
                    <td className="hidden py-3 pl-4 pr-5 text-text-light sm:table-cell">After Zuhr</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="py-3 pl-5 pr-4 font-medium text-text align-top">Monday</td>
                    <td className="py-3 pl-4 pr-5 text-text-light">Qur&apos;an classes</td>
                    <td className="hidden py-3 pl-4 pr-5 text-text-light sm:table-cell">After Maghrib / Isha</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 pl-5 pr-4 font-medium text-text align-top" rowSpan={2}>Tuesday</td>
                    <td className="py-3 pl-4 pr-5 text-text-light">Adult Quranic Arabic &amp; Tajweed</td>
                    <td className="hidden py-3 pl-4 pr-5 text-text-light sm:table-cell">After Maghrib / Isha</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 pl-4 pr-5 text-text-light">
                      Ladies Qur&apos;an &amp; Fiqh
                      <span className="ml-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Women's section
                      </span>
                    </td>
                    <td className="hidden py-3 pl-4 pr-5 text-text-light sm:table-cell">11:00am &ndash; 1:00pm</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="py-3 pl-5 pr-4 font-medium text-text align-top">Wednesday</td>
                    <td className="py-3 pl-4 pr-5 text-text-light">Fiqh classes</td>
                    <td className="hidden py-3 pl-4 pr-5 text-text-light sm:table-cell">After Maghrib / Isha</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 pl-5 pr-4 font-medium text-text align-top">Thursday</td>
                    <td className="py-3 pl-4 pr-5 text-text-light">Mehfil e Dhikr &amp; Khatme Khwajagan</td>
                    <td className="hidden py-3 pl-4 pr-5 text-text-light sm:table-cell">After Maghrib / Isha</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="py-3 pl-5 pr-4 font-medium text-text align-top">Saturday</td>
                    <td className="py-3 pl-4 pr-5 text-text-light">Basic Arabic</td>
                    <td className="hidden py-3 pl-4 pr-5 text-text-light sm:table-cell">After Maghrib / Isha</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 pl-5 pr-4 font-medium text-text align-top">Monthly</td>
                    <td className="py-3 pl-4 pr-5 text-text-light" colSpan={2}>
                      Gayarwi Shareef — Qur&apos;anic recitation, nasheed, and talks
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-text-light">
              <span className="font-medium">Note:</span> "After Maghrib / Isha" means after Maghrib in spring and summer months, and after Isha in autumn and winter months.
            </p>
          </div>

          {/* Children's Programs */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-text">Children's &amp; Youth Programmes</h3>
            <p className="mt-2 text-text-light">
              A range of structured programmes for children and young people, from age 5 upwards.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Evening Madrassa',
                  desc: 'Regular evening classes for children covering Qur&apos;an reading, Islamic studies, and basic Arabic.',
                },
                {
                  title: 'Hifz Classes',
                  desc: 'Dedicated Qur&apos;an memorisation programme for committed students.',
                },
                {
                  title: 'iSyllabus for Schools',
                  desc: 'Structured Islamic education programme for children aged 5 and above.',
                },
                {
                  title: 'Girls Saturday School',
                  desc: 'Weekly Saturday classes for girls, covering Qur&apos;an, Islamic studies, and faith development.',
                },
                {
                  title: 'Weekend Islamic Scholarship',
                  desc: 'A 3-year Alim course providing in-depth Islamic scholarship for dedicated students.',
                },
              ].map((prog) => (
                <div key={prog.title} className="rounded-xl border border-gray-200 bg-bg p-5">
                  <h4 className="font-semibold text-text">{prog.title}</h4>
                  <p className="mt-1.5 text-sm text-text-light leading-relaxed">{prog.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Contact */}
          <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <h4 className="font-semibold text-text">Enquire About Classes</h4>
            <p className="mt-1 text-sm text-text-light">
              For more information about any of our classes or to register, please contact us.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="mailto:hasan@masjidkhazra.org"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                <Mail size={14} aria-hidden="true" />
                hasan@masjidkhazra.org
              </a>
              <a
                href="tel:01414221154"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                <Phone size={14} aria-hidden="true" />
                0141 422 1154
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-12 sm:py-16" aria-labelledby="connected-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="connected-heading" className="text-2xl font-semibold text-text sm:text-3xl">Stay Connected</h2>
          <p className="mt-2 max-w-2xl text-text-light">
            Get daily prayer times, event updates, and community announcements straight to your phone.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
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
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
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
