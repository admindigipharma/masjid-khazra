import { useState } from 'react'
import { FileText, ExternalLink, Download, ChevronDown } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import { usePageTitle } from '../lib/usePageTitle'

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

const downloads = [
  { title: 'Understanding the Four Madhabs', file: '_Understanding the 4 Madhabs (AHM).pdf' },
  { title: 'In the Defence of the Sunnah', file: '159_In the Defence of the Sunnah.pdf' },
  { title: 'Aspects of the Salaat', file: 'Aspects_of_the_Salaat.pdf' },
  { title: 'Benefits of Saints', file: 'BenefitsOfSaints_Ihsanica.pdf' },
  { title: 'Dalail al-Khayrat', file: 'Dalail al Khayrat.pdf' },
  { title: 'Differences are a Mercy', file: 'Differences_are_a_Mercy.pdf' },
  { title: 'Evidence of 20 Rakahs Taraweeh', file: 'Evidence of 20 rakahs Taraweeh.pdf' },
  { title: 'A Glimpse into Prophetic Beauty', file: 'GlimpseintoPropheticBeauty.pdf' },
  { title: 'Kissing our Thumbs', file: 'Kissing our Thumbs.pdf' },
  { title: 'Knowledge of the Unseen', file: 'Knowledge of the unseen.pdf' },
  { title: 'The Martyrdom of Husayn', file: 'MartyrdomOfHusayn.pdf' },
  { title: 'Nisf Sha\u2019ban', file: 'Nisf Shaban.pdf' },
  { title: 'Of Pure Origin', file: 'Of_Pure_Origin_Ihsanica.pdf' },
  { title: 'The Pinnacle of Beauty', file: 'PinnacleOfBeauty_Ihsanica.pdf' },
  { title: 'Ruqya in Islam', file: 'Ruqya in Islam.pdf' },
  { title: 'The Love for the Prophet \uFDFA', file: 'The Love for the Prophet.pdf' },
  { title: 'Etiquettes of Handling the Qur\u2019an', file: 'The_Etiquettes_of_Handling_the_Quran..pdf' },
  { title: 'The Permissibility of the Hadrah', file: 'The_Permissibility_of_the_Hadrah.pdf' },
  { title: 'What Islam Really Says About Domestic Abuse', file: 'What_Islam_Really_Says_About_Domestic_Abuse.pdf' },
]

const INITIAL_SHOW = 6

function DownloadsList() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? downloads : downloads.slice(0, INITIAL_SHOW)

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white divide-y divide-gray-100">
        {visible.map((doc) => (
          <a
            key={doc.file}
            href={`/Masjid%20images/${encodeURIComponent(doc.file)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-primary/[0.02] focus:outline-2 focus:outline-offset-[-2px] focus:outline-primary"
          >
            <FileText size={18} className="shrink-0 text-accent" aria-hidden="true" />
            <span className="flex-1 text-sm font-medium text-text">{doc.title}</span>
            <Download size={16} className="shrink-0 text-text-light" aria-hidden="true" />
          </a>
        ))}
      </div>
      {downloads.length > INITIAL_SHOW && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-3 flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-light transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          Show all {downloads.length} resources
          <ChevronDown size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default function Resources() {
  usePageTitle('Resources')
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

          <DownloadsList />
        </div>
      </section>
    </>
  )
}
