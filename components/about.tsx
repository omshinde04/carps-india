"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Eye, Target, Rocket, ShieldCheck } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll("[data-animate]")

      elements.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          },
        )
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white px-6 py-12 md:px-12 md:py-20 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div data-animate className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">About CARPS</div>
          <h2 data-animate className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            Bridging the Academic-Corporate Gap
          </h2>
          <p data-animate className="mx-auto max-w-3xl text-lg leading-relaxed text-black/70 md:text-xl">
            At CARPS Learning Solutions, our mission is to develop students&apos; confidence,
            communication, attitude, and professional behavior to make them career-ready.
          </p>
        </div>

        <div data-animate className="mb-16 flex flex-col items-center justify-center">
          <div className="mb-8 overflow-hidden h-24 w-24 border-4 border-black bg-white md:h-32 md:w-32">
            <img src="/logo.jpeg" alt="CARPS Institute Logo - Bridging Academic-Corporate Gap" className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-nowrap justify-center gap-1 sm:gap-4">
            {[
              { letter: "C", word: "Confidence" },
              { letter: "A", word: "Attitude" },
              { letter: "R", word: "Responsibility" },
              { letter: "P", word: "Personality" },
              { letter: "S", word: "Success" },
            ].map((item, i) => (
              <div key={i} className="flex min-w-[55px] flex-col items-center border-l border-red-600 pl-1 sm:border-l-2 sm:pl-4 sm:min-w-[70px]">
                <span className="text-lg font-bold text-red-600 sm:text-3xl">{item.letter}</span>
                <span className="text-[9px] font-medium text-black/60 sm:text-sm">{item.word}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Vision */}
          <div data-animate className="group border-l-4 border-red-600 pl-8">
            <div className="mb-4 flex items-center gap-4">
              <Eye className="h-8 w-8 text-red-600" strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-black uppercase tracking-tight">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed text-black/70">
              To become a trusted and impactful Campus to Corporate learning partner,
              empowering students with confidence, right attitude, responsibility,
              strong personality, and success-oriented skills.
            </p>
          </div>

          {/* Mission */}
          <div data-animate className="group border-l-4 border-black pl-8">
            <div className="mb-4 flex items-center gap-4">
              <Target className="h-8 w-8 text-black" strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-black uppercase tracking-tight">Our Mission</h3>
            </div>
            <ul className="space-y-2 text-black/70 font-medium">
              <li className="flex gap-2"><span>•</span> Bridge the gap through industry training.</li>
              <li className="flex gap-2"><span>•</span> Develop confidence & professional behavior.</li>
              <li className="flex gap-2"><span>•</span> Provide high-impact structured internships.</li>
              <li className="flex gap-2"><span>•</span> Create an ecosystem focused on ethics.</li>
            </ul>
          </div>

          {/* Internship Vision */}
          <div data-animate className="group border-l-4 border-red-600 pl-8">
            <div className="mb-4 flex items-center gap-4">
              <Rocket className="h-8 w-8 text-red-600" strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-black uppercase tracking-tight">Vision for Internships</h3>
            </div>
            <p className="text-lg leading-relaxed text-black/70">
              To create meaningful internship opportunities that transform students
              into industry-ready professionals through practical tasks, mentorship,
              and real corporate exposure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
