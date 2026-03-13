import { MapPin, Calendar, Users, Building } from 'lucide-react'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">About Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            The second largest masjid in Glasgow, serving our community with dedication and compassion for over five decades.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-12 sm:py-16" aria-labelledby="history-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 id="history-heading" className="text-2xl font-semibold text-text sm:text-3xl">Our History</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Established in the 1970s, Masjid-e-Khazra has grown to become one of Scotland's leading mosques.
                Located on Glasgow's southside at Butterbiggins Road, we have been a focal point for the Muslim
                community — providing a space for worship, education, and community gathering for over fifty years.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                As the second largest masjid in Glasgow, we serve thousands of worshippers and community members.
                Our doors are open for daily prayers, Jummah, Eid celebrations, religious education, community
                events, and welfare services.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-text mb-4">At a Glance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Calendar size={20} className="mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-text">Established</span>
                    <span className="text-sm text-text-light">1970s</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-text">Location</span>
                    <span className="text-sm text-text-light">138-140 Butterbiggins Road, Glasgow G42 7AF</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building size={20} className="mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-text">Size</span>
                    <span className="text-sm text-text-light">Second largest masjid in Glasgow</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={20} className="mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-text">Community</span>
                    <span className="text-sm text-text-light">Thousands of worshippers and families</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="bg-white py-12 sm:py-16" aria-labelledby="facilities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="facilities-heading" className="text-2xl font-semibold text-text sm:text-3xl">Our Facilities</h2>
          <p className="mt-2 text-text-light">
            Our mosque provides a welcoming environment for worship, learning, and community engagement.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Main Prayer Hall', description: 'Spacious prayer hall accommodating hundreds of worshippers for daily prayers and Jummah.' },
              { title: 'Education Rooms', description: 'Dedicated classrooms for Quran studies, Islamic education, and community learning programmes.' },
              { title: 'Community Space', description: 'Multipurpose areas for community events, lectures, meetings, and social gatherings.' },
              { title: 'Wudu Facilities', description: 'Clean and well-maintained ablution facilities for men and women.' },
              { title: 'Car Parking', description: 'Parking available for worshippers and visitors to the mosque.' },
              { title: 'Accessible Entry', description: 'We strive to make our mosque accessible to all members of the community.' },
            ].map((facility) => (
              <div key={facility.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-text">{facility.title}</h3>
                <p className="mt-2 text-sm text-text-light">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff & Committee */}
      <section id="staff" className="py-12 sm:py-16" aria-labelledby="staff-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="staff-heading" className="text-2xl font-semibold text-text sm:text-3xl">Staff & Committee</h2>
          <p className="mt-2 text-text-light">
            Our dedicated team of scholars, volunteers, and committee members serve the community.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Imam */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg" aria-hidden="true">
                AR
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">Allamah Mohammed Rizwan</h3>
              <p className="text-sm font-medium text-primary">Head Imam</p>
              <p className="mt-2 text-sm text-text-light">
                Leading daily prayers, Jummah khutbahs, and religious guidance for the community.
              </p>
            </div>

            {/* Funeral Director 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg" aria-hidden="true">
                TB
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">Tahir Bashir</h3>
              <p className="text-sm font-medium text-primary">Funeral Director</p>
              <p className="mt-2 text-sm text-text-light">
                Coordinating funeral services and supporting bereaved families across Glasgow.
              </p>
              <a href="tel:07980900882" className="mt-3 inline-block cursor-pointer text-sm font-medium text-primary hover:underline">
                07980 900 882
              </a>
            </div>

            {/* Funeral Director 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg" aria-hidden="true">
                AM
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">Amir Mushtaq</h3>
              <p className="text-sm font-medium text-primary">Funeral Director</p>
              <p className="mt-2 text-sm text-text-light">
                BSc (Hons) MCOptom. Funeral services coordination and community outreach.
              </p>
              <a href="tel:07508766843" className="mt-3 inline-block cursor-pointer text-sm font-medium text-primary hover:underline">
                07508 766 843
              </a>
            </div>
          </div>

          {/* Committee */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-text">Mosque Committee</h3>
            <p className="mt-2 text-sm text-text-light">
              The mosque is managed by a dedicated committee of community volunteers who oversee operations,
              maintenance, and strategic direction.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                'Sabir Sarwar',
              ].map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-text"
                >
                  {name}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full border border-dashed border-gray-300 px-4 py-2 text-sm text-text-light">
                Additional members to be confirmed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-12 sm:py-16" aria-labelledby="visit-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="visit-heading" className="text-2xl font-semibold text-text sm:text-3xl">Visit Us</h2>
          <p className="mt-2 max-w-2xl text-text-light">
            We welcome visitors of all backgrounds. If you would like to arrange a tour of the mosque,
            please contact us in advance so we can ensure someone is available to show you around.
          </p>
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
