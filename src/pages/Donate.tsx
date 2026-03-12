import { Heart, Shield, Repeat, Gift } from 'lucide-react'

const MYDONA_URL = 'https://donate.mydona.com/masjid-e-khazra'

const donationTiers = [
  {
    amount: '£10',
    label: 'Feed a family for a day',
    description: 'Provide meals for a family in need during Ramadan or throughout the year.',
  },
  {
    amount: '£25',
    label: 'Support Quran classes',
    description: 'Help fund a week of Quran education for young learners at the mosque.',
  },
  {
    amount: '£50',
    label: 'Community outreach',
    description: 'Support our community outreach programmes including food banks and welfare services.',
  },
  {
    amount: '£100',
    label: 'Sustain the mosque',
    description: 'Help cover running costs including utilities, maintenance, and facilities for the community.',
  },
  {
    amount: '£250',
    label: 'Education programme',
    description: 'Fund a month of Islamic education and youth development programmes.',
  },
  {
    amount: 'Custom',
    label: 'Give any amount',
    description: 'Every contribution, no matter the size, makes a difference to our community.',
  },
]

const fundTypes = [
  { name: 'General Fund', description: 'Used where most needed' },
  { name: 'Zakat', description: 'Obligatory alms for eligible recipients' },
  { name: 'Sadaqah', description: 'Voluntary charity for any good cause' },
  { name: 'Mosque Maintenance', description: 'Keep the mosque running' },
]

export default function Donate() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Support Your Masjid</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            "The example of those who spend their wealth in the way of Allah is like a seed which grows seven
            ears; in each ear is a hundred grains." — Quran 2:261
          </p>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-12 sm:py-16" aria-labelledby="tiers-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="tiers-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Choose How You Give
          </h2>
          <p className="mt-2 text-text-light">
            Select an amount to see the impact of your generosity, then complete your donation securely via MyDona.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {donationTiers.map((tier) => (
              <a
                key={tier.amount}
                href={MYDONA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-cta hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-cta"
              >
                <span className="text-2xl font-bold text-cta">{tier.amount}</span>
                <h3 className="mt-2 font-semibold text-text group-hover:text-cta">{tier.label}</h3>
                <p className="mt-2 text-sm text-text-light">{tier.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-cta">
                  Donate {tier.amount !== 'Custom' ? tier.amount : ''} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Types */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="funds-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="funds-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Where Your Money Goes
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fundTypes.map((fund) => (
              <div key={fund.name} className="rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-text">{fund.name}</h3>
                <p className="mt-1 text-sm text-text-light">{fund.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 sm:py-16" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="trust-heading" className="sr-only">Why Donate With Us</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <Shield size={24} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-text">Secure Payments</h3>
                <p className="text-xs text-text-light">Donations processed securely via MyDona</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Gift size={24} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-text">Gift Aid</h3>
                <p className="text-xs text-text-light">UK taxpayers can boost their donation by 25%</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Repeat size={24} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-text">Monthly Giving</h3>
                <p className="text-xs text-text-light">Set up regular donations for ongoing support</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart size={24} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-text">100% for the Cause</h3>
                <p className="text-xs text-text-light">Every penny goes directly to the masjid and community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Donate CTA */}
      <section className="bg-primary py-12 sm:py-16" aria-labelledby="main-donate-heading">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="main-donate-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Give?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Your generosity keeps our doors open, our community programmes running, and families supported. May Allah reward you abundantly.
          </p>
          <a
            href={MYDONA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Donate via MyDona
          </a>
        </div>
      </section>
    </>
  )
}
