"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const philosophy = [
    { letter: "C", word: "Confidence" },
    { letter: "A", word: "Attitude" },
    { letter: "R", word: "Responsibility" },
    { letter: "P", word: "Personality" },
    { letter: "S", word: "Success" },
]

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current) {
            const items = containerRef.current.querySelectorAll("[data-animate]")
            gsap.fromTo(
                items,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                    },
                },
            )
        }
    }, [])

    return (
        <section className="bg-white py-12 md:py-20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 text-center" ref={containerRef}>
                {/* Logo */}
                <div data-animate className="mb-16 inline-block">
                    <div className="border-4 border-black p-1 bg-white inline-block">
                        <img src="/logo.jpeg" alt="CARPS Logo" className="h-40 w-40 object-contain" />
                    </div>
                </div>

                {/* C-A-R-P-S Row */}
                <div className="flex flex-wrap justify-center items-stretch gap-0">
                    {philosophy.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-1 min-w-[120px] items-center"
                        >
                            {/* Left Separator (except first item) */}
                            {index > 0 && (
                                <div className="h-16 w-[2px] bg-red-600 self-center" />
                            )}
                            {/* First Separator (for start) */}
                            {index === 0 && (
                                <div className="h-16 w-[2px] bg-red-600 self-center" />
                            )}

                            <div data-animate className="flex-1 px-4 py-4">
                                <div className="text-5xl font-black text-red-600 mb-2">{item.letter}</div>
                                <div className="text-lg font-bold text-gray-500 uppercase tracking-wide">{item.word}</div>
                            </div>

                            {/* Last Separator (for end) */}
                            {index === philosophy.length - 1 && (
                                <div className="h-16 w-[2px] bg-red-600 self-center" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
