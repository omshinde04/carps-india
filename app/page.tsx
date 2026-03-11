"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "@/components/hero"
import About from "@/components/about"
import Philosophy from "@/components/philosophy"
import Trainers from "@/components/trainers"
import Gallery from "@/components/gallery"
import Programs from "@/components/programs"
import School from "@/components/school"
import BusinessLearning from "@/components/business-learning"
import CorporateTraining from "@/components/corporate-training"
import Brand from "@/components/brand"
import Footer from "@/components/footer"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Smooth scroll setup
    if (mainRef.current) {
      const sections = mainRef.current.querySelectorAll("[data-scroll-section]")
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }
  }, [])

  return (
    <main ref={mainRef} className="overflow-x-hidden">
      <Hero />
      <section id="about" className="bg-white">
        <About />
      </section>
      {/* <Philosophy /> */}
      <section id="trainers" className="bg-gray-50">
        <Trainers />
      </section>
      <section id="gallery" className="bg-white">
        <Gallery />
      </section>
      <section id="programs" className="bg-black">
        <Programs />
      </section>
      <section id="school" className="bg-white">
        <School />
      </section>
      <section id="corporate-training" className="bg-black">
        <CorporateTraining />
      </section>
      <section id="business-modules" className="bg-white">
        <BusinessLearning />
      </section>
      <section id="impact" className="bg-gray-50">
        <Brand />
      </section>
      <section id="contact" className="bg-black">
        <Footer />
      </section>
    </main>
  )
}
