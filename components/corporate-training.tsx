"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
    Users,
    Target,
    Brain,
    Zap,
    Shield,
    MessageSquare,
    TrendingUp,
    Clock,
    Heart,
    Briefcase,
    Globe,
    Award,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const philosophy = [
    { text: "Focus on behaviour change, not just knowledge", icon: Brain },
    { text: "Practical application over theory", icon: Settings },
    { text: "Real workplace scenarios and case discussions", icon: Briefcase },
    { text: "Future-ready skills aligned with evolving business needs", icon: TrendingUp },
    { text: "Customization based on organization and role", icon: Target },
]

const corePrograms = [
    {
        title: "Workplace Communication 2.0 (Digital & AI Era)",
        description: "Enhancing professional communication in digital, hybrid, and high-speed work environments, including email, chat, and virtual collaboration.",
        icon: MessageSquare,
    },
    {
        title: "Professional Mindset & Ownership Culture",
        description: "Building accountability, responsibility, and outcome ownership to create high-performance workplace behaviour.",
        icon: Target,
    },
    {
        title: "Human Skills in the Age of AI",
        description: "Developing critical thinking, ethical judgment, adaptability, and decision-making skills that complement AI-driven workplaces.",
        icon: Brain,
    },
    {
        title: "Emotional Intelligence for High-Performance Teams",
        description: "Strengthening self-awareness, emotional regulation, empathy, and trust to improve teamwork and leadership effectiveness.",
        icon: Heart,
    },
    {
        title: "Agile Thinking & Adaptability at Workplace",
        description: "Helping professionals adapt to change, build resilience, and develop a continuous learning mindset.",
        icon: Zap,
    },
    {
        title: "Leadership Readiness for Next-Generation Managers",
        description: "Preparing professionals for leadership roles with focus on people management, coaching, and decision-making.",
        icon: Users,
    },
    {
        title: "Productivity & Focus in a Distracted Workplace",
        description: "Improving focus, prioritization, and energy management to enhance productivity without burnout.",
        icon: Clock,
    },
    {
        title: "Client Experience & Relationship Excellence",
        description: "Enhancing client communication, expectation management, and long-term relationship building.",
        icon: Globe,
    },
    {
        title: "Ethics, Compliance & Responsible Workplace Behaviour",
        description: "Promoting ethical decision-making, respectful conduct, inclusion, and compliance-driven behaviour.",
        icon: Shield,
    },
    {
        title: "Cross-Functional Collaboration & Influence",
        description: "Improving collaboration across departments and influencing stakeholders without authority.",
        icon: Users,
    },
    {
        title: "Managing Pressure, Change & Uncertainty",
        description: "Building resilience and performance capability in high-pressure and uncertain environments.",
        icon: TrendingUp,
    },
    {
        title: "Business Communication for Impact",
        description: "Developing executive presence, clarity, and confidence in professional and leadership communication.",
        icon: Briefcase,
    },
]

const specializedPrograms = [
    "Behavioural Safety & Risk Mindset (Manufacturing / Logistics)",
    "Digital Professionalism & Online Reputation",
    "Women Leadership & Workplace Confidence",
    "POSH Awareness & Workplace Sensitization",
]

const benefits = [
    "Improved communication and professionalism",
    "Stronger leadership and accountability",
    "Better teamwork and collaboration",
    "Reduced conflicts and workplace issues",
    "Future-ready workforce capabilities",
    "Sustainable performance improvement",
]

// Import Settings icon locally to avoid conflict if not exported from lucide-react in all versions
import { Settings } from "lucide-react"

export default function CorporateTraining() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (sectionRef.current) {
            const items = sectionRef.current.querySelectorAll("[data-animate]")
            items.forEach((item, index) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.05,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                        },
                    },
                )
            })
        }
    }, [])

    return (
        <section ref={sectionRef} className="bg-neutral-950 px-6 py-12 md:px-12 md:py-20 lg:px-24">
            <div className="mx-auto max-w-7xl text-white">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div data-animate className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">
                        Corporate Training
                    </div>
                    <h2 data-animate className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                        Future-Ready Human Skills
                    </h2>
                    <p data-animate className="mx-auto max-w-3xl text-lg text-white/70">
                        We deliver impact-driven corporate training programs that focus on human skills, professional mindset, and
                        workplace performance. Our programs build capable, adaptable, and accountable professionals.
                    </p>
                </div>

                {/* Philosophy */}
                <div className="mb-20">
                    <h3 data-animate className="mb-10 text-center text-2xl font-bold text-white">
                        Our Training Philosophy
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {philosophy.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={index}
                                    data-animate
                                    className="flex flex-col items-center text-center p-6 border border-white/10 bg-white/5 rounded-lg hover:border-red-600/50 transition-colors"
                                >
                                    <Icon className="mb-4 h-8 w-8 text-red-600" />
                                    <p className="text-sm font-medium">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Core Programs */}
                <div className="mb-20">
                    <h3 data-animate className="mb-10 text-center text-3xl font-bold text-white">
                        Core Corporate Training Programs
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {corePrograms.map((program, index) => {
                            const Icon = program.icon
                            return (
                                <div
                                    key={index}
                                    data-animate
                                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-red-600"
                                >
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h4 className="mb-3 text-xl font-bold text-white">{program.title}</h4>
                                    <p className="text-sm leading-relaxed text-white/60">{program.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Specialized & Benefits Grid */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Specialized Programs */}
                    <div data-animate className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
                        <h3 className="mb-6 text-2xl font-bold text-white flex items-center gap-3">
                            <Award className="h-6 w-6 text-red-600" /> Specialized Programs
                        </h3>
                        <ul className="space-y-4">
                            {specializedPrograms.map((program, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/80">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                                    <span>{program}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div data-animate className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
                        <h3 className="mb-6 text-2xl font-bold text-white flex items-center gap-3">
                            <TrendingUp className="h-6 w-6 text-red-600" /> How Organizations Benefit
                        </h3>
                        <ul className="grid gap-4 sm:grid-cols-2">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/80">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Delivery Modes & Who We Work With */}
                <div className="grid gap-12 lg:grid-cols-2 mt-12">
                    {/* Delivery Modes */}
                    <div data-animate className="rounded-2xl border border-white/10 bg-white/5 p-8">
                        <h3 className="mb-6 text-2xl font-bold text-white flex items-center gap-3">
                            <Clock className="h-6 w-6 text-red-600" /> Training Delivery Modes
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                "On-site classroom training",
                                "Virtual / online training",
                                "Short workshops & deep-dives",
                                "Department-specific sessions",
                            ].map((mode, i) => (
                                <div key={i} className="flex items-center gap-2 text-white/70">
                                    <div className="h-1 w-1 rounded-full bg-red-600" />
                                    <span className="text-sm">{mode}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Who We Work With */}
                    <div data-animate className="rounded-2xl border border-white/10 bg-white/5 p-8">
                        <h3 className="mb-6 text-2xl font-bold text-white flex items-center gap-3">
                            <Users className="h-6 w-6 text-red-600" /> Who We Work With
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Corporate Organizations",
                                "IT & Service Companies",
                                "Manufacturing Units",
                                "Logistics Companies",
                                "MSMEs",
                            ].map((partner, i) => (
                                <span key={i} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-xs text-white/80">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div data-animate className="mt-20 text-center">
                    <p className="mb-6 text-white/60">
                        Trusted by Corporate Organizations, IT Companies, Manufacturing Units, and Growing Businesses.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 hover:bg-red-700"
                    >
                        Request a Training Proposal
                    </a>
                </div>
            </div>
        </section>
    )
}
