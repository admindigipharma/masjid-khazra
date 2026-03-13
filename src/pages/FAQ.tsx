import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import HeroSection from '../components/HeroSection'

const faqs = [
  {
    q: 'What is the process of registration for madrassa?',
    a: 'Parents are advised to attend during madrassa classes and one of the administration will guide you through the process, completing a registration form. Alternatively, forms can be collected from the main office, imam\'s office, or management staff.',
  },
  {
    q: 'Are classes held at Butterbiggins Road or Albert Road?',
    a: 'Evening madrassa operates at both mosque locations. Parents can select their preferred venue during enrolment.',
  },
  {
    q: 'When can I enrol my child into the madrassa?',
    a: 'Peak admissions are typically around August for the new academic year, but children can be enrolled throughout the year.',
  },
  {
    q: 'What is the minimum age for children\'s classes?',
    a: 'The mosque enrols children as young as 4 years old, including Quran Hifz classes for ages 5 and up.',
  },
  {
    q: 'How many days a week do you hold Quran classes?',
    a: 'Classes are offered daily. Please contact 0141 422 1154 for specific schedules.',
  },
  {
    q: 'Do you provide textbooks for the Alim course?',
    a: 'Yes, all course content and materials are provided upon enrolment.',
  },
  {
    q: 'Is Islamic studies taught during madrassa classes?',
    a: 'Yes, Islamic studies is incorporated into the madrassa curriculum alongside Quran recitation and memorisation.',
  },
  {
    q: 'How many children are in each group?',
    a: 'Groups contain 10–15 students to ensure each child receives adequate attention from the teacher.',
  },
  {
    q: 'What happens if a child is ill and misses lessons?',
    a: 'A letter explaining the absence is required; medical documentation is needed for extended illness. Teachers provide missed content and guide students through homework to catch up.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our madrassa, classes, and enrolment."
        startIndex={3}
      />

      <section className="py-12 sm:py-16" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="sr-only">Questions and Answers</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-primary/[0.02] focus:outline-2 focus:outline-offset-[-2px] focus:outline-primary"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="text-sm font-semibold text-text sm:text-base">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-text-light transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div id={`faq-answer-${i}`} className="border-t border-gray-100 px-6 py-4">
                      <p className="text-sm text-text-light leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-10 rounded-xl border border-gray-200 bg-primary/5 p-6 text-center">
            <p className="text-sm font-medium text-text">Still have questions?</p>
            <p className="mt-1 text-sm text-text-light">
              Call us on{' '}
              <a href="tel:01414221154" className="cursor-pointer font-medium text-primary hover:underline">0141 422 1154</a>
              {' '}or email{' '}
              <a href="mailto:masjidekhazra@gmail.com" className="cursor-pointer font-medium text-primary hover:underline">masjidekhazra@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
