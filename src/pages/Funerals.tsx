import { Link } from 'react-router-dom'
import { Phone, Clock, Heart, Users, Truck, MapPin, FileText, AlertCircle } from 'lucide-react'

const cemeteries = [
  {
    name: 'Linn Cemetery Extension — Muslim Section',
    address: '3 Rev\'d MacAulay Rd, Glasgow G45 9QE',
    note: 'Primary burial location for most funerals.',
    primary: true,
  },
  {
    name: 'Cathcart Cemetery',
    address: 'Netherlee Road, Glasgow G44 3PB',
    note: 'Now full. Reserved plots and under 18 burials only.',
    primary: false,
  },
]

const otherCemeteries = [
  'Cambusnethen',
  'Dunipace (Falkirk)',
  'Bearsden Langfaulds Cemetery',
  'Cumbernauld Eastfield Cemetery',
  'New Dumbarton Cemetery',
]

export default function Funerals() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Funeral Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            A free, volunteer-run funeral service providing compassionate care guided by Islamic tradition. We handle everything so families can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="bg-accent/10 py-6" aria-labelledby="urgent-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="urgent-heading" className="text-lg font-semibold text-text">
            Need to arrange a funeral? Contact us now.
          </h2>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="tel:07980900882"
              className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-primary-light"
            >
              <Phone size={16} aria-hidden="true" />
              Tahir Bashir — 07980 900 882
            </a>
            <a
              href="tel:07508766843"
              className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-primary-light"
            >
              <Phone size={16} aria-hidden="true" />
              Amir Mushtaq — 07508 766 843
            </a>
            <a
              href="tel:01414221154"
              className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-primary-light"
            >
              <Phone size={16} aria-hidden="true" />
              Office — 0141 422 1154 (Option 2)
            </a>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-12 sm:py-16" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            What We Provide
          </h2>
          <p className="mt-2 max-w-2xl text-text-light">
            Our funeral service is completely free, run entirely by volunteers. We provide a comprehensive, end-to-end service so families don't have to worry about a thing.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileText, title: 'Administration', desc: 'All paperwork, death registration coordination, and cemetery booking handled on your behalf.' },
              { icon: Truck, title: 'Transportation', desc: 'Private ambulance and hearse for collection and transportation of the deceased.' },
              { icon: Heart, title: 'Ghusl & Kafn', desc: 'Islamic ritual washing and shrouding carried out with the utmost care and respect.' },
              { icon: Users, title: 'Janazah Prayer', desc: 'Funeral prayer held at Masjid-e-Khazra with the community coming together.' },
              { icon: Clock, title: 'Mortuary & Storage', desc: 'Body storage facilities available. We also coordinate with hospital mortuaries.' },
              { icon: MapPin, title: 'Burial Coordination', desc: 'Cemetery communication, booking burial plots, and coordinating the burial itself.' },
            ].map((service) => (
              <div key={service.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <service.icon size={22} className="text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-semibold text-text">{service.title}</h3>
                <p className="mt-1.5 text-sm text-text-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-text">Also Available</h3>
            <ul className="mt-2 grid gap-1 text-sm text-text-light sm:grid-cols-2">
              <li>Full catering facilities</li>
              <li>Separate sitting halls for men and women</li>
              <li>Khatams and Kuls facilities</li>
              <li>24-hour reliable service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Guidance at Time of Death */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="guidance-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="guidance-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Guidance at the Time of Passing Away
          </h2>
          <p className="mt-2 text-text-light">
            When a loved one passes, these steps should be taken immediately.
          </p>

          <ol className="mt-8 max-w-3xl space-y-4">
            {[
              'As soon as a person dies their eyes should be gently closed.',
              'Gently press the chin upwards while holding the top of their head, a strip of cotton cloth or bandage, which should be tied firmly under the chin and around the head.',
              'Remove any jewellery such as rings, necklaces, anklets, bracelets, earrings and nose studs.',
              'Straighten the limbs carefully and gently. If they do not straighten (i.e. due to stroke) do not force them, as this could cause breakage.',
              'Place the feet together and bind the ankles or toes together using a piece of cotton cloth or bandage.',
              'If the deceased was in the hospital, the nursing staff remove any cannula, catheters or any such attachments from the body.',
              'Do not cut nails or remove any unwanted hair from the dead body. Cover the body with a clean sheet.',
              'Contact the MEK Funeral Directors to make arrangements for the next procedure.',
              'The Funeral Directors will make all arrangements, including collecting the deceased, registering the death, booking grave plot, ghusl, burial and janaza prayer.',
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="text-sm text-text-light leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="process-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            How the Process Works
          </h2>

          <div className="mt-8 max-w-3xl space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold" aria-hidden="true">
                1
              </div>
              <div>
                <h3 className="font-semibold text-text">Contact a Funeral Director</h3>
                <p className="mt-1 text-sm text-text-light">
                  Call Tahir Bashir on <a href="tel:07980900882" className="text-primary font-medium hover:underline">07980 900 882</a> or
                  Amir Mushtaq on <a href="tel:07508766843" className="text-primary font-medium hover:underline">07508 766 843</a>,
                  or the office on <a href="tel:01414221154" className="text-primary font-medium hover:underline">0141 422 1154 (Option 2)</a>.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold" aria-hidden="true">
                2
              </div>
              <div>
                <h3 className="font-semibold text-text">Complete the Funeral Form</h3>
                <p className="mt-1 text-sm text-text-light">
                  We'll send you a form to collect all the information we need. This is used for booking the burial plot and our obituary announcement.
                </p>
                <a
                  href="https://forms.office.com/r/ESugADWji0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-primary-light"
                >
                  <FileText size={14} aria-hidden="true" />
                  Open Funeral Form &rarr;
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold" aria-hidden="true">
                !
              </div>
              <div>
                <h3 className="font-semibold text-text">Ensure the MCCD is Issued Quickly</h3>
                <p className="mt-1 text-sm text-text-light">
                  The Medical Certificate of Cause of Death (MCCD) is the most important document. Ask the doctor to send it to the local registrar as quickly as possible — this allows us to start the registration process and can enable same-day or next-day burials.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold" aria-hidden="true">
                3
              </div>
              <div>
                <h3 className="font-semibold text-text">We Handle Everything</h3>
                <p className="mt-1 text-sm text-text-light">
                  Collection, registration, ghusl & kafn, booking the burial plot, janazah prayer at the mosque, and burial. You focus on your family — we take care of the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="costs-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="costs-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Costs
          </h2>
          <p className="mt-2 max-w-2xl text-text-light">
            Our service is free and run entirely by volunteers. The only charges are council fees and the coffin.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm" role="table">
              <thead>
                <tr className="bg-primary/5">
                  <th scope="col" className="py-3.5 pl-5 pr-4 text-left font-semibold text-text">Item</th>
                  <th scope="col" className="py-3.5 pl-4 pr-5 text-right font-semibold text-text">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="py-3 pl-5 pr-4 text-text">Lair (burial plot)</td>
                  <td className="py-3 pl-4 pr-5 text-right font-medium text-text">£1,542</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="py-3 pl-5 pr-4 text-text">Interment</td>
                  <td className="py-3 pl-4 pr-5 text-right font-medium text-text">£1,148</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-3 pl-5 pr-4 text-text">Wooden coffin housing</td>
                  <td className="py-3 pl-4 pr-5 text-right font-medium text-text">£260</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50/50">
                  <td className="py-3 pl-5 pr-4 text-text">Coffin</td>
                  <td className="py-3 pl-4 pr-5 text-right font-medium text-text">£295</td>
                </tr>
                <tr className="border-t-2 border-primary/20 bg-primary/5">
                  <td className="py-3 pl-5 pr-4 font-semibold text-text">Total</td>
                  <td className="py-3 pl-4 pr-5 text-right font-bold text-primary">~£3,245</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-2">
            <p className="flex items-start gap-2 text-sm text-text-light">
              <AlertCircle size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              Weekend and bank holiday surcharge: £123 (council charge)
            </p>
            <p className="flex items-start gap-2 text-sm text-text-light">
              <AlertCircle size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              Council prices typically change every April
            </p>
            <p className="flex items-start gap-2 text-sm text-text-light">
              <AlertCircle size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              No burials on Christmas Day or New Year's Day
            </p>
            <p className="flex items-start gap-2 text-sm text-text-light">
              <Clock size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              Paperwork must be submitted before 10am for same-day burials
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm text-text">
              <strong>Donations welcome.</strong> Our funeral service is run by volunteers at no charge. We encourage donations to help us continue providing this service to the community.
            </p>
          </div>
        </div>
      </section>

      {/* Cemeteries */}
      <section className="py-12 sm:py-16" aria-labelledby="cemeteries-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="cemeteries-heading" className="text-2xl font-semibold text-text sm:text-3xl">
            Burial Locations
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cemeteries.map((cem) => (
              <div key={cem.name} className={`rounded-xl border p-5 ${cem.primary ? 'border-primary/30 bg-primary/5' : 'border-gray-200 bg-white'}`}>
                <h3 className="font-semibold text-text">{cem.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-text-light">
                  <MapPin size={14} className="shrink-0" aria-hidden="true" />
                  {cem.address}
                </p>
                <p className="mt-2 text-sm text-text-light">{cem.note}</p>
                {cem.primary && (
                  <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                    Primary Location
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-text">Other Cemeteries We Serve</h3>
            <p className="mt-1 text-sm text-text-light">
              We can carry out Muslim burials at any of the following locations, as long as the funeral takes place at Masjid-e-Khazra:
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {otherCemeteries.map((name) => (
                <li key={name} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-text">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-12 sm:py-16" aria-labelledby="funeral-contact-heading">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="funeral-contact-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Funeral Directors
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Available 24/7. Please do not hesitate to contact us at any time.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="tel:07980900882"
              className="flex items-center gap-2 cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-gray-100 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              <Phone size={18} aria-hidden="true" />
              Tahir Bashir — 07980 900 882
            </a>
            <a
              href="tel:07508766843"
              className="flex items-center gap-2 cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-gray-100 hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              <Phone size={18} aria-hidden="true" />
              Amir Mushtaq — 07508 766 843
            </a>
          </div>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="tel:01414221154"
              className="cursor-pointer text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Office: 0141 422 1154 (Option 2)
            </a>
            <a
              href="mailto:fsmek@outlook.com"
              className="cursor-pointer text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Email: fsmek@outlook.com
            </a>
          </div>
          <div className="mt-6">
            <Link
              to="/contact"
              className="cursor-pointer rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:border-white hover:bg-white/10 focus:outline-2 focus:outline-offset-2 focus:outline-white"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
