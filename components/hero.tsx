"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/banner/WhatsApp Image 2025-12-18 at 4.56.39 PM.jpeg",
    title: "Build Your Skills",
    subtitle: "Transform Your Career With CARPS",
  },
  {
    image: "/banner/WhatsApp Image 2025-12-18 at 6.06.30 PM.jpeg",
    title: "Master Technology",
    subtitle: "Expert Tech Training Programs",
  },
  {
    image: "/banner/WhatsApp Image 2026-01-06 at 9.17.37 PM.jpeg",
    title: "Grow Your Reputation",
    subtitle: "Professional Non-Tech Skills",
  },
  {
    image: "/banner/WhatsApp Image 2026-01-06 at 9.18.05 PM.jpeg",
    title: "Future-Ready Learning",
    subtitle: "Industry-Aligned Courses for Success",
  },
  {
    image: "/banner/WhatsApp Image 2026-01-07 at 11.11.25 PM.jpeg",
    title: "Expert Mentorship",
    subtitle: "Learn From Industry Leaders",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (slideRef.current && textRef.current) {
      gsap.fromTo(
        slideRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      )

      gsap.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15 }
      )
    }
  }, [currentSlide])

  const next = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[100svh] md:h-screen w-full overflow-hidden bg-black">

      {/* Background */}
      <div ref={slideRef} className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="h-full w-full object-cover"
        />

        {/* Better readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex h-full flex-col justify-center md:justify-center items-center text-center px-6"
      >

        <div className="mb-3 text-[12px] md:text-sm tracking-[0.35em] uppercase text-red-500">
          CARPS INSTITUTE
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight max-w-3xl">
          {slides[currentSlide].title}
        </h1>

        <p className="text-white/85 text-base sm:text-lg md:text-2xl mt-3 max-w-xl">
          {slides[currentSlide].subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-8 w-full max-w-xs sm:flex-row sm:max-w-none">

          <Button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg rounded-xl shadow-xl"
          >
            Explore Programs
          </Button>

          <Button
            variant="outline"
            className="border-white text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black py-6 text-lg rounded-xl"
          >
            Meet Trainers
          </Button>

          <Button
            variant="outline"
            className="border-white text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black py-6 text-lg rounded-xl"
          >
            Contact Us
          </Button>

        </div>

      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">

        <button
          onClick={prev}
          className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${i === currentSlide
                ? "w-8 bg-red-600"
                : "w-2 bg-white/50"
                }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition"
        >
          <ChevronRight size={22} />
        </button>

      </div>

    </section>
  )
}