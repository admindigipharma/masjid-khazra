import { Link } from 'react-router-dom'
import { Heart, Utensils, GraduationCap, Users } from 'lucide-react'
import HeroSection from '../components/HeroSection'

const updates = [
  {
    id: 1,
    title: 'Ramadan Food Parcels 2026',
    date: '10/03/2026',
    category: 'Food Bank',
    excerpt: 'This Ramadan, we are distributing food parcels to families across Glasgow\'s southside. Your donations help us provide essential items during the holy month.',
    image: null,
  },
  {
    id: 2,
    title: 'Community Iftar Programme',
    date: '08/03/2026',
    category: 'Community Events',
    excerpt: 'Join us every evening for community Iftar at the mosque. All are welcome — come together to break your fast with your brothers and sisters.',
    image: null,
  },
  {
    id: 3,
    title: 'Winter Clothing Drive',
    date: '15/01/2026',
    category: 'Outreach',
    excerpt: 'Thank you to everyone who donated warm clothing for those in need this winter. Your generosity helped dozens of families across Glasgow stay warm.',
    image: null,
  },
  {
    id: 4,
    title: 'Youth Education Fund',
    date: '05/01/2026',
    category: 'Education',
    excerpt: 'We are expanding our youth education programmes to include weekend workshops, homework clubs, and mentoring for young people in the community.',
    image: null,
  },
]

const impactAreas = [
  {
    icon: Utensils,
    title: 'Food & Welfare',
    description: 'Food parcels, hot meals, and essential supplies for families in need across Glasgow.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Quran classes, youth programmes, Islamic education, and community learning initiatives.',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    description: 'Interfaith dialogue, community events, and support for vulnerable members of our community.',
  },
  {
    icon: Heart,
    title: 'Emergency Relief',
    description: 'Rapid response support for families facing hardship, both locally and internationally.',
  },
]

function getCategoryColour(category: string) {
  switch (category) {
    case 'Food Bank': return 'bg-green-100 text-green-800'
    case 'Community Events': return 'bg-blue-100 text-blue-800'
    case 'Education': return 'bg-purple-100 text-purple-800'
    case 'Outreach': return 'bg-orange-100 text-orange-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Charity() {
  return (
    <>
      <HeroSection
        title="Charity & Community"
        subtitle="Serving humanity through compassion. See how your support makes a difference in the lives of families across Glasgow and beyond."
      />

      {/* Impact Areas */}
      <section className="py-12 sm:py-16" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="impact-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Where Your Support Goes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((area) => (
              <div key={area.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
                  <area.icon size={24} />
                </div>
                <h3 className="mt-3 font-semibold text-text">{area.title}</h3>
                <p className="mt-2 text-sm text-text-light">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="updates-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="updates-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Latest Updates
          </h2>
          <p className="mt-2 text-text-light">
            Keep up with our latest charity work and community activities.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {updates.map((update) => (
              <article
                key={update.id}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <div className="aspect-video bg-primary/5 flex items-center justify-center">
                  <span className="text-sm text-text-light">Photo coming soon</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium ${getCategoryColour(update.category)}`}>
                      {update.category}
                    </span>
                    <time className="text-xs text-text-light" dateTime={update.date.split('/').reverse().join('-')}>
                      {update.date}
                    </time>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-text">{update.title}</h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">{update.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="bg-primary py-12 sm:py-16" aria-labelledby="charity-donate-heading">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="charity-donate-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Every Contribution Counts
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Whether it's Zakat, Sadaqah, or a general donation — your support helps us continue serving those who need it most.
          </p>
          <Link
            to="/donate"
            className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </>
  )
}
