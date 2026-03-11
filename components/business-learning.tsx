"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Rocket, Lightbulb, TrendingUp, PieChart, ShieldCheck, Users, Briefcase, Search, Globe, Settings, PenTool, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import DetailModal from "./detail-modal"

gsap.registerPlugin(ScrollTrigger)

const modules = [
    {
        icon: Users,
        title: "HR Management",
        description: "Recruitment, training, performance management, and HR analytics.",
        details: {
            overview: "Covers recruitment, training & development, performance management, employee engagement, and HR analytics.",
            benefitsStudents: [
                "Understanding corporate HR processes",
                "Exposure to recruitment, training, and people management",
                "Career pathways in HR and talent acquisition"
            ],
            benefitsColleges: ["Prepares students for management roles", "Stronger industry alignment"]
        }
    },
    {
        icon: Briefcase,
        title: "Corporate Training",
        description: "L&D frameworks, leadership development, and coaching strategies.",
        details: {
            overview: "Focuses on training needs analysis, learning models, leadership development, and organizational growth strategies.",
            benefitsStudents: [
                "Understanding corporate training frameworks",
                "Skills to design and deliver training programs",
                "Exposure to coaching and facilitation"
            ],
            benefitsColleges: ["Develops institutional leadership capabilities"]
        }
    },
    {
        icon: PieChart,
        title: "Business Analytics",
        description: "Data-driven decision making, KPIs, and business intelligence.",
        details: {
            overview: "Introduces data-driven decision-making using analytics tools, dashboards, KPIs, and business intelligence concepts.",
            benefitsStudents: [
                "Analytical thinking and business problem-solving",
                "Understanding data interpretation for management decisions",
                "Career exposure in analytics and consulting"
            ],
            benefitsColleges: ["Modernizes management curriculum"]
        }
    },
    {
        icon: TrendingUp,
        title: "Market Psychology",
        description: "Consumer behavior, buying trends, and branding influence.",
        details: {
            overview: "Covers consumer behavior, buying psychology, branding influence, and customer experience management.",
            benefitsStudents: [
                "Ability to analyze customer needs and expectations",
                "Strong foundation for marketing and sales careers",
                "Application in startups and service industries"
            ],
            benefitsColleges: ["Enhances marketing department outcomes"]
        }
    },
    {
        icon: Rocket,
        title: "Startup Management",
        description: "Idea generation, business planning, and scaling strategies.",
        details: {
            overview: "End-to-end understanding of startup creation—from idea validation to business launch and scaling.",
            benefitsStudents: [
                "Idea generation & validation (Business Model Canvas)",
                "Funding basics & bootstrapping knowledge",
                "Startup operations and scaling strategies"
            ],
            benefitsColleges: ["Promotes on-campus entrepreneurship culture"]
        }
    },
    {
        icon: ShieldCheck,
        title: "Financial Management",
        description: "Budgeting, cost control, and investment analysis.",
        details: {
            overview: "Introduces financial planning, budgeting, cost control, investment analysis, and working capital management.",
            benefitsStudents: [
                "Financial decision-making capability",
                "Understanding startup and corporate finance",
                "Foundation for managerial roles"
            ],
            benefitsColleges: ["Improves financial literacy among graduates"]
        }
    },
    {
        icon: Search,
        title: "Operations Research",
        description: "Optimization techniques, resource allocation, and workflow modeling.",
        details: {
            overview: "Application of analytical methods to help make better decisions and optimize complex systems.",
            benefitsStudents: [
                "Mathematical problem-solving skills",
                "Understanding process optimization",
                "Analytical decision-making frameworks"
            ],
            benefitsColleges: ["Strengthens technical management track"]
        }
    },
    {
        icon: Search,
        title: "Research Methodology",
        description: "Data collection, hypothesis testing, and academic/business research.",
        details: {
            overview: "Techniques for identifying, selecting, processing, and analyzing information about a topic.",
            benefitsStudents: [
                "Scientific approach to business problems",
                "Skills in data collection and analysis",
                "Foundation for consulting and white-paper writing"
            ],
            benefitsColleges: ["Increases research output and quality"]
        }
    },
    {
        icon: Settings,
        title: "Production & Operations",
        description: "Process design, supply chain integration, and quality management.",
        details: {
            overview: "Managing the transformation process that turns inputs into outputs (goods or services).",
            benefitsStudents: [
                "Understanding factory and service operations",
                "Skills in quality control and process design",
                "Foundation for industrial management"
            ],
            benefitsColleges: ["Bridging engineering and management"]
        }
    },
    {
        icon: Globe,
        title: "Service Management",
        description: "Customer service strategy, experience design, and loyalty programs.",
        details: {
            overview: "Strategies for delivering high-quality services and managing customer experiences.",
            benefitsStudents: [
                "Understanding the service economy",
                "Skills in customer experience (CX) design",
                "Foundation for hospitality and retail management"
            ],
            benefitsColleges: ["Prepares students for the booming service sector"]
        }
    },
    {
        icon: PenTool,
        title: "Innovation & Design Thinking",
        description: "Creative problem solving, prototyping, and human-centered design.",
        details: {
            overview: "Human-centered approach to innovation that integrates the needs of people, the possibilities of technology, and the requirements for business success.",
            benefitsStudents: [
                "Creative problem-solving capability",
                "Exposure to prototyping and user testing",
                "Innovation mindset for corporate and startups"
            ],
            benefitsColleges: ["Fosters a culture of creativity and innovation"]
        }
    }
]

export default function BusinessLearning() {
    const sectionRef = useRef<HTMLElement>(null)
    const [selectedModule, setSelectedModule] = useState<any>(null)

    useEffect(() => {
        if (sectionRef.current) {
            const items = sectionRef.current.querySelectorAll("[data-animate]")
            items.forEach((item, index) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "back.out(1.7)",
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
        <section ref={sectionRef} className="bg-white px-6 py-12 md:px-12 md:py-20 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <div data-animate className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">
                        Startup & Business
                    </div>
                    <h2 data-animate className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
                        Entrepreneurship Models
                    </h2>
                    <p data-animate className="mx-auto max-w-3xl text-lg text-black/70">
                        We believe every student should be business-ready. Our programs develop strategic thinking
                        and managerial capability for real-world entrepreneurial challenges.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {modules.map((module, index) => {
                        const Icon = module.icon
                        return (
                            <div
                                key={index}
                                data-animate
                                className="flex flex-col border border-black/5 bg-gray-50 p-8 transition-all hover:bg-red-50 hover:shadow-lg group"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-black text-white group-hover:bg-red-600 transition-colors">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-black">{module.title}</h3>
                                <p className="mb-8 text-black/60 leading-relaxed">{module.description}</p>
                                <Button
                                    onClick={() => setSelectedModule(module)}
                                    variant="link"
                                    className="mt-auto self-start px-0 text-red-600 font-bold hover:no-underline"
                                >
                                    View Learning Outcomes →
                                </Button>
                            </div>
                        )
                    })}
                </div>

                {selectedModule && (
                    <DetailModal
                        isOpen={!!selectedModule}
                        onClose={() => setSelectedModule(null)}
                        title={selectedModule.title}
                        content={selectedModule.details}
                    />
                )}
            </div>
        </section>
    )
}
