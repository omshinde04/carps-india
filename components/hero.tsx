"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const heroRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  useEffect(() => {
    if (slideRef.current && textRef.current) {
      gsap.fromTo(
        slideRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
      )
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.3 },
      )
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section ref={heroRef} className="relative h-[60vh] md:h-screen w-full overflow-hidden bg-black">
      <div ref={slideRef} className="absolute inset-0">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt={`CARPS Institute - ${slides[currentSlide].title}`}
          className="h-full w-full object-contain md:object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div ref={textRef} className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">CARPS Institute</div>
        <h1 className="mb-6 max-w-5xl font-sans text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
          {slides[currentSlide].title}
        </h1>
        <p className="mb-12 max-w-2xl text-xl text-white/90 md:text-2xl">{slides[currentSlide].subtitle}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-red-600 px-8 py-6 text-base font-medium hover:bg-red-700">
            <a href="#programs">Explore Programs</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-white hover:text-black"
          >
            <a href="#trainers">Meet Trainers</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent px-8 py-6 text-base font-medium text-white hover:bg-white hover:text-black"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-4">
        <button
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-red-600" : "w-2 bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
