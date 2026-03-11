"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Quote } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: "Sadik Korbu",
    role: "Application Developer at NexaNova",
    content:
      "CARPS transformed my career. The practical training and expert mentorship gave me the skills to land my dream job.",
  },
  {
    name: "Abhijeet Bhore",
    role: "SDE at CMS",
    content:
      "The technical training at CARPS was exceptional. I learned invaluable skills that helped me crack the interview at CMS.",
  },
  {
    name: "Ritesh Patwari",
    role: "SDE at CMS",
    content: "Best investment in my career. The instructors are world-class and the curriculum is completely industry-aligned.",
  },
]

export default function Brand() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll("[data-animate]")

      elements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      className="relative bg-white px-6 py-12 md:px-12 md:py-20 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Brand Section */}
        <div className="mb-16 text-center">
          <div data-animate className="mb-8 flex flex-col items-center justify-center">
            <div className="mb-8 overflow-hidden h-32 w-32 border-4 border-black bg-white">
              <img src="/logo.jpeg" alt="CARPS Logo" className="h-full w-full object-contain" />
            </div>
          </div>
          <h2 data-animate className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            Our True Impact
          </h2>
          <p data-animate className="mx-auto max-w-4xl text-lg leading-relaxed text-black/70 md:text-xl">
            We are here to help those who are eager to learn but don&apos;t know where to start.
            Many students are academically average but highly capable in real-life situations.
            Our mission is to transform these students into career-ready individuals.
            We don&apos;t just teach skills; we build clarity, confidence, and self-belief.
            Whether it&apos;s landing a dream job or starting a business, we ensure our
            students are ready for the challenge. At CARPS, your potential is our priority.
          </p>
        </div>

        {/* Testimonials */}
        <div>
          <div data-animate className="mb-12 text-center">
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">Success Stories</div>
            <h3 className="text-3xl font-bold text-black md:text-4xl">What Our Students Say</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} data-animate className="relative bg-black p-8">
                <Quote className="mb-6 h-10 w-10 text-red-600" />
                <p className="mb-6 text-lg leading-relaxed text-white/90">"{testimonial.content}"</p>
                <div className="border-t border-white/20 pt-6">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
