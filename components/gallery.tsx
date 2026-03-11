"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { X } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [images, setImages] = useState<string[]>([])
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/gallery")
        const data = await response.json()

        if (Array.isArray(data)) {
          setImages(data)
        }
      } catch (error) {
        console.error("Error fetching gallery images:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  useEffect(() => {
    if (sectionRef.current && images.length > 0) {
      const galleryItems = sectionRef.current.querySelectorAll("[data-gallery-image]")

      galleryItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }
  }, [images])

  if (loading) {
    return (
      <section className="bg-white py-20 text-center">
        <div className="animate-pulse text-red-600 font-medium">Loading Environment...</div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      className="relative bg-white px-6 py-12 md:px-12 md:py-20 lg:px-24"
    >
      <div className="mx-auto max-max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">Photo Gallery</div>
          <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">Our Learning Environment</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-black/70 md:text-xl">
            Explore our state-of-the-art facilities and vibrant learning community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[250px]">
          {images.map((url, index) => {
            const isWide = index % 7 === 0 || index % 11 === 0
            const isTall = index % 5 === 0 || index % 13 === 0

            return (
              <div
                key={url}
                data-gallery-image
                onClick={() => setLightboxImage(url)}
                className={`group relative cursor-pointer overflow-hidden rounded-sm bg-gray-100 ${isWide ? "md:col-span-2" : ""
                  } ${isTall ? "md:row-span-2" : ""}`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={url || "/placeholder.svg"}
                    alt={`Environment photo ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                </div>
              </div>
            )
          })}
        </div>

        {images.length === 0 && (
          <div className="py-20 text-center text-black/40 italic">
            No environment photos available yet.
          </div>
        )}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-red-600"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery image"
              className="h-full w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}