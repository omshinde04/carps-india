"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BookOpen, CheckCircle2, Award, Users, Lightbulb, Scale } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function School() {
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

    const highlights = [
        { icon: BookOpen, text: "21st-century skill development" },
        { icon: Lightbulb, text: "Experiential and activity-based learning" },
        { icon: Users, text: "Mental health and student well-being" },
        { icon: Award, text: "Career awareness and life skills" },
        { icon: Scale, text: "Ethical values and citizenship" },
    ]

    const benefits = [
        "Enhances student confidence and communication",
        "Supports teachers through improved engagement",
        "Promotes a positive and inclusive culture",
        "Supports NEP 2020 compliance",
        "Positions school as progressive and student-focused",
    ]

    return (
        <section
            ref={sectionRef}
            id="school"
            data-scroll-section
            className="relative bg-white px-6 py-12 md:px-12 md:py-20 lg:px-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-8">
                        <div data-animate>
                            <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">Educational Alignment</div>
                            <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">NEP 2020 Justification</h2>
                            <p className="text-lg leading-relaxed text-black/70 md:text-xl">
                                As per the National Education Policy (NEP) 2020, schools are encouraged to focus on the holistic
                                development of students beyond academic learning. Our programs are designed to align perfectly with these national objectives.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2" data-animate>
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:bg-gray-50">
                                    <item.icon className="h-5 w-5 text-red-600" />
                                    <span className="text-sm font-medium text-black/80">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4" data-animate>
                            <h3 className="text-xl font-bold text-black">Implementation Approach</h3>
                            <ul className="grid gap-3 text-black/70">
                                <li className="flex gap-2">
                                    <span className="font-bold text-red-600">•</span> Age-appropriate and curriculum-supportive
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-red-600">•</span> Short, structured, and interactive sessions
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-red-600">•</span> Flexible delivery formats (Orientation, Enrichment days)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative" data-animate>
                        <div className="absolute -inset-4 rounded-xl bg-gray-50 lg:-inset-8" />
                        <div className="relative space-y-8 rounded-xl bg-black p-8 text-white shadow-2xl md:p-12">
                            <h3 className="text-2xl font-bold lg:text-3xl">Value to the Institution</h3>
                            <div className="space-y-6">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                                        <p className="text-lg text-white/80">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-8 border-t border-white/10">
                                <p className="italic text-white/60">
                                    "These programs are intended to complement academic education and fully align with the vision of
                                    NEP 2020, supporting the development of confident, capable, and future-ready students."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
