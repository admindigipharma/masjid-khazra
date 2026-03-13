import { useState, useEffect } from 'react'

const heroImages = [
  '/images/hero-prayer-hall.jpg',
  '/images/hero-congregation.jpg',
  '/images/hero-mihrab.jpg',
  '/images/hero-mihrab-glow.jpg',
  '/images/hero-dome-detail.jpg',
]

interface HeroSectionProps {
  title: string
  subtitle: string
  startIndex?: number
}

export default function HeroSection({ title, subtitle, startIndex = 0 }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(startIndex % heroImages.length)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-16 sm:pt-36 sm:pb-20">
      {heroImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
      </div>
    </section>
  )
}
