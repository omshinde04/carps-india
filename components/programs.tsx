"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BarChart, Truck, Globe, Megaphone, Briefcase, Brain, Users, Sparkles, GraduationCap, Shield, Mic2, MessageSquare, Heart, HelpingHand, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import DetailModal from "./detail-modal"

gsap.registerPlugin(ScrollTrigger)

const programs = [
  {
    icon: BarChart,
    category: "Data",
    title: "Advanced Excel & Power BI",
    duration: "Corporate Ready",
    description: "Mastery of data management, automation, analytics dashboards, and professional reporting.",
    details: {
      overview: "This program covers advanced data management, automation, analytics dashboards, and data visualization. Students gain hands-on exposure to real-world datasets, formulas, and reporting techniques used in corporate environments.",
      benefitsStudents: [
        "Mastery of tools widely used in corporate, finance, and IT sectors",
        "Improved analytical, logical, and presentation skills",
        "Enhanced employability in MIS, Data Analytics, and BI roles"
      ],
      benefitsColleges: [
        "Improves placement readiness in management, finance, and IT domains",
        "Adds certification-driven value to academic programs"
      ]
    }
  },
  {
    icon: Truck,
    category: "Operations",
    title: "Logistics & Supply Chain",
    duration: "Industry Oriented",
    description: "Practical exposure to warehousing, procurement, inventory control, and distribution management.",
    details: {
      overview: "Students gain practical exposure to transportation, warehousing, procurement, inventory control, and distribution management—key areas in India's growing industrial and export economy.",
      benefitsStudents: [
        "Career opportunities in operations, logistics, manufacturing, and e-commerce",
        "Development of decision-making, planning, and problem-solving skills"
      ],
      benefitsColleges: [
        "Aligns curriculum with current industry requirements",
        "Encourages collaborations with logistics and manufacturing organizations"
      ]
    }
  },
  {
    icon: Globe,
    category: "Global Trade",
    title: "Import & Export Management",
    duration: "International Business",
    description: "Documentation, customs procedures, shipping logistics, and foreign trade policies.",
    details: {
      overview: "This program covers international trade documentation, customs procedures, shipping logistics, foreign trade policies, and global marketing practices.",
      benefitsStudents: [
        "Prepares students for global business roles and entrepreneurship",
        "Provides hands-on understanding of international trade operations"
      ],
      benefitsColleges: [
        "Adds global exposure to the institution’s academic profile",
        "Promotes entrepreneurship and international business projects"
      ]
    }
  },
  {
    icon: Megaphone,
    category: "Marketing",
    title: "Digital Marketing & Branding",
    duration: "Strategic Skills",
    description: "SEO, SEM, content strategy, and branding fundamentals for the modern business landscape.",
    details: {
      overview: "Students learn SEO, SEM, content creation, social media strategy, analytics, and branding fundamentals aligned with modern digital business needs.",
      benefitsStudents: [
        "Builds high-demand digital marketing and freelancing skills",
        "Encourages creativity, innovation, and strategic thinking"
      ],
      benefitsColleges: [
        "Helps promote college events and achievements through digital platforms",
        "Attracts collaborations with startups and creative industries"
      ]
    }
  },
  {
    icon: Briefcase,
    category: "Employability",
    title: "Corporate Readiness Skills",
    duration: "Confidence First",
    description: "Workplace behavior, professional communication, etiquette, and overall employability.",
    details: {
      overview: "Focuses on workplace behavior, professional communication, corporate etiquette, adaptability, and overall employability development.",
      benefitsStudents: [
        "Builds confidence for interviews, internships, and placements",
        "Enhances teamwork, leadership, and professional communication"
      ],
      benefitsColleges: [
        "Improves placement outcomes and student credibility",
        "Strengthens the institution’s corporate image"
      ]
    }
  },
  {
    icon: Brain,
    category: "Psychology",
    title: "Behavioural Training",
    duration: "Mental Resilience",
    description: "Emotional intelligence, mindset building, resilience, and self-management through psychology.",
    details: {
      overview: "A unique program integrating psychology with personality development, focusing on emotional intelligence, mindset building, resilience, and self-management.",
      benefitsStudents: [
        "Improves motivation, focus, and self-esteem",
        "Reduces stress, anxiety, and performance pressure"
      ],
      benefitsColleges: [
        "Enhances student mental well-being and classroom engagement",
        "Builds a positive, emotionally balanced campus culture"
      ]
    }
  },
  {
    icon: Users,
    category: "Personality",
    title: "Soft Skills Development",
    duration: "Holistic Growth",
    description: "Communication, body language, presentation skills, grooming, and interpersonal effectiveness.",
    details: {
      overview: "Focused on non-technical skills including communication, body language, presentation skills, grooming, and interpersonal effectiveness.",
      benefitsStudents: [
        "Enhanced social and professional confidence",
        "Better collaboration and relationship building",
        "Polished professional presence"
      ],
      benefitsColleges: ["Produces well-rounded and articulate graduates"]
    }
  },
  {
    icon: Sparkles,
    category: "Future Tech",
    title: "Future-Focused Courses",
    duration: "Next Gen",
    description: "AI, ML, Cybersecurity, Sustainability, and UX/UI Design for Industry 4.0 readiness.",
    details: {
      overview: "Introduction to emerging technologies and concepts like AI, ML, Cybersecurity, Sustainability, and UX/UI Design.",
      benefitsStudents: [
        "Readiness for Industry 4.0",
        "Exposure to high-growth tech domains",
        "Future-proof career skills"
      ],
      benefitsColleges: ["Position as a forward-thinking institution"]
    }
  },
  {
    icon: GraduationCap,
    category: "Competitive",
    title: "Exam Preparation",
    duration: "UPSC / MPSC",
    description: "Structured guidance and mentoring for UPSC, MPSC, ISRO, and technical examinations.",
    details: {
      overview: "Structured guidance and mentoring for UPSC, MPSC, ISRO, and other technical competitive examinations.",
      benefitsStudents: [
        "Expert mentoring and structured study material",
        "Focus on core concepts and examination strategies",
        "Pathway to government and technical leadership roles"
      ],
      benefitsColleges: ["Boosts student success in national-level exams"]
    }
  },
  {
    icon: Shield,
    category: "Compliance & Safety",
    title: "POSH Training",
    duration: "Legal & Ethical",
    description: "Mandatory training on Prevention of Sexual Harassment for corporates and educational institutions.",
    details: {
      overview: "POSH (Prevention of Sexual Harassment) training is mandatory for organizations and educational institutions under the Sexual Harassment of Women at Workplace Act, 2013. This training covers legal obligations, rights and responsibilities, and creating a safe, respectful environment.",
      benefitsStudents: [
        "Ensures legal compliance and reduces risk of complaints",
        "Creates a safe, respectful, and inclusive environment",
        "Promotes ethical conduct and professional culture"
      ],
      benefitsColleges: [
        "Strengthens organizational and institutional credibility",
        "Builds awareness and accountability among employees and students"
      ]
    }
  },
  {
    icon: Mic2,
    category: "Professional Development",
    title: "Train the Trainer (TTT)",
    duration: "Facilitation Mastery",
    description: "Programs for professionals and educators to deliver structured, engaging, and effective training sessions.",
    details: {
      overview: "The TTT program focuses on confidence building, facilitation skills, communication, and professional delivery. It helps trainers engage audiences, handle resistance, and design impactful sessions using adult learning principles.",
      benefitsStudents: [
        "Builds confidence and professionalism in training delivery",
        "Improves communication and presentation effectiveness",
        "Enhances audience engagement and learning retention"
      ],
      benefitsColleges: [
        "Develops structured, outcome-oriented trainers",
        "Customizable for internal training teams and faculty"
      ]
    }
  },
  {
    icon: MessageSquare,
    category: "Future Skills",
    title: "Advanced Verbal Communication",
    duration: "2026 Edition",
    description: "Future-ready verbal communication program designed to help students communicate confidently, persuasively, and impactfully.",
    details: {
      overview: "Designed to help students communicate confidently, persuasively, and impactfully in academic, social, and professional settings. It goes beyond basic fluency to develop strategic, digital, and critical communication skills.",
      benefitsStudents: [
        "Speak with clarity, confidence, and credibility in any situation",
        "Handle interviews, group discussions, and presentations like professionals",
        "Become future-ready for hybrid workplaces and professional environments"
      ],
      benefitsColleges: [
        "Enhances student employability and campus placement rates",
        "Prepares students for modern hybrid work environments",
        "Offers flexible delivery modes: on-campus, online, or hybrid"
      ]
    }
  },
  {
    icon: Heart,
    category: "Corporate Wellness",
    title: "Stress Management",
    duration: "Resilience & Focus",
    description: "Practical tools to handle workplace pressure, maintain focus, and sustain high performance.",
    details: {
      overview: "Equips participants with practical tools, techniques, and strategies to manage stress, build resilience, and maintain well-being. Covers time management, mental relaxation, emotional regulation, and work-life balance.",
      benefitsStudents: [
        "Improves individual productivity and focus",
        "Enhances emotional intelligence and interpersonal relationships",
        "Reduces burnout and promotes personal well-being"
      ],
      benefitsColleges: [
        "Reduces absenteeism and turnover",
        "Builds a resilient and adaptable workforce",
        "Promotes a positive and healthy work culture"
      ]
    }
  },
  {
    icon: HelpingHand,
    category: "Counselling",
    title: "Student Counselling",
    duration: "All Age Groups",
    description: "Safe and supportive guidance focusing on academic clarity, emotional well-being, and personal development.",
    details: {
      overview: "A safe, supportive, and non-judgmental environment for learners across all age groups. Focuses on academic stress, career awareness, confidence building, and emotional well-being using solution-oriented guidance.",
      benefitsStudents: [
        "Builds clarity, resilience, and confidence",
        "Supports informed decision-making and academic performance",
        "Improves emotional well-being and social skills"
      ],
      benefitsColleges: [
        "Enhances student mental health and adjustment",
        "Promotes a safe and supportive campus culture",
        "Provides specialized guidance for diverse learner groups"
      ]
    }
  },
  {
    icon: TrendingUp,
    category: "Sales & Revenue",
    title: "Sales & Lead Generation",
    duration: "Result Oriented",
    description: "Skills to prospect, engage, and convert leads effectively while improving overall sales performance.",
    details: {
      overview: "Focuses on prospecting, building customer relationships, effective communication, negotiation, and closing techniques. Includes digital tools and CRM usage for modern result-driven sales.",
      benefitsStudents: [
        "Strengthens confidence and professional communication",
        "Improves client engagement and relationship management",
        "Develops high-demand sales and negotiation skills"
      ],
      benefitsColleges: [
        "Increases lead conversion and sales revenue",
        "Creates a structured and result-driven sales approach",
        "Enhances team collaboration and performance tracking"
      ]
    }
  }
]

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProgram, setSelectedProgram] = useState<any>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll("[data-program-card]")

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          },
        )
      })
    }
  }, [])

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative bg-black px-6 py-12 md:px-12 md:py-20 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">Programs & Services</div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Professional Skill Development</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Bridge the gap between academic learning and corporate expectations with our industry-oriented training.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                data-program-card
                className="group relative overflow-hidden border border-white/10 bg-white/5 p-8 transition-all hover:border-red-600 hover:bg-white/10"
              >
                <div className="mb-6 flex items-start justify-between">
                  <Icon className="h-12 w-12 text-red-600" strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-wider text-white/60">{program.category}</span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">{program.title}</h3>
                <p className="mb-4 text-sm font-medium text-red-600">{program.duration}</p>
                <p className="mb-6 leading-relaxed text-white/70">{program.description}</p>
                <Button
                  onClick={() => setSelectedProgram(program)}
                  variant="outline"
                  className="w-full border-white/20 bg-transparent text-white hover:bg-red-600 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            )
          })}
        </div>

        {selectedProgram && (
          <DetailModal
            isOpen={!!selectedProgram}
            onClose={() => setSelectedProgram(null)}
            title={selectedProgram.title}
            content={selectedProgram.details}
          />
        )}
      </div>
    </section>
  )
}
