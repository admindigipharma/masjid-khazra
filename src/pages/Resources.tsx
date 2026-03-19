import { FileText, ExternalLink, Download } from 'lucide-react'
import HeroSection from '../components/HeroSection'

const usefulLinks = [
  {
    title: 'MyMasjid App (Android)',
    url: 'https://play.google.com/store/apps/details?id=com.teo.mymasjid',
    description: 'Get daily prayer times and mosque updates on your Android device.',
  },
  {
    title: 'MyMasjid App (iPhone)',
    url: 'https://apps.apple.com/us/app/my-masjid-community/id1452575134',
    description: 'Get daily prayer times and mosque updates on your iPhone.',
  },
  {
    title: 'Google Qibla Finder',
    url: 'https://qiblafinder.withgoogle.com/intl/en/onboarding',
    description: 'Find the direction of the Qibla from anywhere using your phone.',
  },
  {
    title: 'WhatsApp Channel',
    url: 'https://whatsapp.com/channel/0029Vb7S4ZFD8SDtXfKSsU3X',
    description: 'Join our WhatsApp channel for daily prayer times and community announcements.',
  },
  {
    title: 'National Records of Scotland',
    url: 'https://www.nrscotland.gov.uk',
    description: 'Marriage notice forms and registration information for Scotland.',
  },
  {
    title: 'Donate via MyDona',
    url: 'https://donate.mydona.com/masjid-e-khazra',
    description: 'Make a secure online donation to Masjid-E-Khazra.',
  },
]

export default function Resources() {
  return (
    <>
      <HeroSection
        title="Resources"
        subtitle="Useful links, downloadable documents, and helpful tools for the community."
        startIndex={1}
      />

      {/* Useful Links */}
      <section className="py-12 sm:py-16" aria-labelledby="links-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="links-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Useful Links
          </h2>
          <p className="mt-2 text-text-light">
            Quick access to apps, tools, and external services.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {usefulLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                  <ExternalLink size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-text group-hover:text-primary transition-colors">{link.title}</h3>
                  <p className="mt-1 text-sm text-text-light leading-relaxed">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="islamic-pattern py-12 sm:py-16" aria-labelledby="downloads-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Download size={24} className="text-primary" aria-hidden="true" />
            <h2 id="downloads-heading" className="text-2xl font-semibold text-text sm:text-3xl">
              Downloads
            </h2>
          </div>
          <p className="mt-2 text-text-light">
            Downloadable documents and resources from Masjid-E-Khazra.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8 text-center">
            <FileText size={40} className="mx-auto text-text-light/30" aria-hidden="true" />
            <p className="mt-4 text-text-light">
              Downloadable resources are being prepared and will be available here soon, insha'Allah.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
