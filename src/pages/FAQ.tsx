import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import { usePageTitle } from '../lib/usePageTitle'

const faqs = [
  // General
  {
    q: 'What are the opening hours of the mosque?',
    a: 'The mosque is open daily for all five prayers. The mosque is accessible from early morning (Fajr) through to after the last prayer (Isha). Please check the prayer timetable for specific times.',
  },
  {
    q: 'Where is Masjid-E-Khazra located?',
    a: 'Our main mosque is at 138-140 Butterbiggins Road, Glasgow G42 7AF. We also have a branch at 69 Albert Road, Glasgow G42 8DP.',
  },
  {
    q: 'Can I visit the mosque if I am not Muslim?',
    a: 'Yes, we welcome visitors of all faiths and backgrounds. We offer guided tours — please contact us in advance to arrange a visit. We ask visitors to dress modestly and remove shoes before entering the prayer hall.',
  },
  {
    q: 'How do I arrange a funeral?',
    a: 'Contact our Funeral Directors: Tahir Bashir on 07980 900 882, Amir Mushtaq on 07508 766 843, or the office on 0141 422 1154 (Option 2). Our funeral service is free and run entirely by volunteers.',
  },
  {
    q: 'How do I book the mosque for a Nikah?',
    a: 'Contact us on 0141 422 1154 or speak with Haji Mohammed Akram on 07871 206 102. Please note that the Imam requires a Marriage Schedule from the registrar before solemnising any marriage.',
  },
  {
    q: 'How can I donate to the mosque?',
    a: 'You can donate online via MyDona, by bank transfer, or by cheque/postal order. Visit our Donate page for full details including bank account numbers for specific causes.',
  },
  {
    q: 'Does the mosque have parking?',
    a: 'Street parking is available on Butterbiggins Road and surrounding streets. On busy days such as Friday (Juma) prayer, we recommend arriving early.',
  },
  {
    q: 'Is the mosque accessible for disabled visitors?',
    a: 'Yes, the mosque has elevator access to all floors and disabled toilet facilities.',
  },
  {
    q: 'Are there any prayer facilities for women?',
    a: 'Yes, the mosque has a dedicated women\'s prayer area. Female worshippers are welcome to attend daily prayers, Juma, and special events such as Taraweeh during Ramadan.',
  },
  // Madrassa
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
  usePageTitle('FAQ')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Common questions about the mosque, our services, madrassa, and enrolment."
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
