import { Heart, Shield, Repeat, Gift, Building2, Mail } from 'lucide-react'

const MYDONA_URL = 'https://donate.mydona.com/masjid-e-khazra'

const donationTiers = [
  {
    amount: 'Sustain',
    label: 'Sustain the Mosque',
    description: 'Help cover running costs including utilities, maintenance, and facilities for the community.',
  },
  {
    amount: 'Sadaqah',
    label: 'Sadaqah',
    description: 'Give voluntary charity (Sadaqah) to support those in need through our community programmes.',
  },
  {
    amount: 'Funeral',
    label: 'Funeral Services',
    description: 'Support our free, volunteer-run funeral service so we can continue serving families during their most difficult times.',
  },
  {
    amount: 'Custom',
    label: 'Custom Amount',
    description: 'Every contribution, no matter the size, makes a difference to our community.',
  },
]

const bankAccounts = [
  { name: 'Masjid (General)', account: '00108404', description: 'General mosque operations and maintenance' },
  { name: 'Fitrana / Sadaqa / Zakat', account: '10034069', description: 'Obligatory and voluntary charity' },
  { name: 'Community Funeral Fund', account: '', description: 'For those who cannot afford funeral costs' },
  { name: 'Mosque Funeral Account', account: '10033963', description: 'Running the funeral service' },
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {donationTiers.map((tier) => (
              <a
                key={tier.amount}
                href={MYDONA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-cta hover:shadow-lg hover:-translate-y-1 focus:outline-2 focus:outline-offset-2 focus:outline-cta"
              >
                <h3 className="text-xl font-bold text-cta transition-colors group-hover:text-cta">{tier.label}</h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">{tier.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cta transition-transform group-hover:translate-x-1">
                  Donate &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Transfer */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="bank-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 size={24} className="text-primary" aria-hidden="true" />
            <h2 id="bank-heading" className="text-2xl font-semibold text-text sm:text-3xl">
              Donate by Bank Transfer
            </h2>
          </div>
          <p className="mt-2 text-text-light">
            For larger donations, you can transfer directly to the relevant account below.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-bg p-5">
            <p className="text-sm font-medium text-text">Beneficiary: <span className="font-semibold">Anjum Ehl Sunnat Wal Jamaat Masjid e Khazra</span></p>
            <p className="mt-1 text-sm text-text-light">Bank of Scotland, Victoria Road, Glasgow</p>
            <p className="mt-1 text-sm text-text-light">Sort Code: <span className="font-semibold text-text">80-15-59</span></p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {bankAccounts.map((acc) => (
              <div key={acc.account} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-text">{acc.name}</h3>
                <p className="mt-1 text-sm text-text-light">{acc.description}</p>
                {acc.account && (
                  <p className="mt-2 text-sm">
                    Account: <span className="font-semibold text-primary">{acc.account}</span>
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cheque / Postal Order */}
      <section className="py-12 sm:py-16" aria-labelledby="cheque-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Mail size={24} className="text-primary" aria-hidden="true" />
            <h2 id="cheque-heading" className="text-2xl font-semibold text-text sm:text-3xl">
              Cheque / Postal Order
            </h2>
          </div>
          <p className="mt-2 text-text-light">
            You can also donate by cheque or postal order sent through the post.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-text-light">Make cheques payable to:</p>
            <p className="mt-1 text-base font-semibold text-text">Masjid-E-Khazra</p>
            <p className="mt-4 text-sm text-text-light">Post to:</p>
            <p className="mt-1 text-base font-semibold text-text">
              Masjid-E-Khazra, 138-140 Butterbiggins Road, Glasgow, G42 7AF
            </p>
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
            className="pulse-cta mt-6 inline-block rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-2 focus:outline-offset-2 focus:outline-accent"
          >
            Donate via MyDona
          </a>
        </div>
      </section>
    </>
  )
}
