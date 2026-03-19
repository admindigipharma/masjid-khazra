import { ExternalLink, GraduationCap } from 'lucide-react'
import { usePageTitle } from '../lib/usePageTitle'

export default function IslamicDiploma() {
  usePageTitle('Islamic Diploma')
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Islamic Diploma</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            A structured Islamic studies programme delivered in partnership with Hajveri Institute.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="diploma-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
              <GraduationCap size={32} />
            </div>
            <h2 id="diploma-heading" className="mt-6 text-2xl font-semibold text-text">
              Hajveri Institute Islamic Diploma
            </h2>
            <p className="mt-3 text-text-light leading-relaxed">
              Masjid-E-Khazra hosts the Hajveri Institute Islamic Diploma programme, offering
              a comprehensive course in Islamic studies. For full details on the curriculum,
              schedule, and enrolment, please visit the Hajveri Institute website.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://hajveriinstitute.com/diploma/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              >
                Find Out More
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              <a
                href="https://hajveriinstitute.com/diploma-register/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              >
                Register Here
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
