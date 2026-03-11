"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { X } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface Trainer {
  name: string
  expertise: string
  category: string
  image: string
  bio: string
  skills: string[]
}

const trainers: Trainer[] = [
  {
    name: "Collina Lawrence",
    expertise: "Founder & Head Trainer | Corporate Trainer | Counsellor",
    category: "Leadership & Coaching",
    image: "/trainers/COLLINA LAWRENCE.jpeg",
    bio: "Ms. Collina Raphael Lawrence is a highly experienced Corporate Trainer and Counsellor with over 15 years of expertise in human development. She leads the initiative to bridge the gap between academic learning and real-world readiness through psychology-based training. Expert in behavioural science and communication mastery.",
    skills: ["Behavioural Science", "Corporate Training", "Counselling", "Communication Mastery", "Leadership", "Motivational Speaking"],
  },
  {
    name: "Anup Pradhan",
    expertise: "Strategic HR Leader | HR Analytics | Organizational Development | Corporate Communication",
    category: "HR & Leadership",
    image: "/trainers/Anup Pradhan.jpeg",
    bio: "Strategic Human Resource professional with more than 10 years of progressive experience in HR business partnering, organizational development, workforce analytics, and compliance. Specialized in aligning people strategies with business goals, building performance-driven cultures, and implementing structured HR systems. Expert in HRIS and PMS implementation with a strong analytical orientation.",
    skills: ["HR Analytics", "Organizational Development", "Corporate Communication", "Performance Management", "Compliance", "HRIS Implementation", "Strategic HR"],
  },
  {
    name: "Ajay Munde",
    expertise: "Marketing, Funding, Innovation, Startups, Entrepreneurship Trainer",
    category: "Entrepreneurship & Marketing",
    image: "/trainers/Mr. Ajay Mund.jpeg",
    bio: "A dynamic trainer with proven expertise in Marketing, Funding, Innovation, Startups, and Entrepreneurship. Known for an energetic and practical approach, inspires participants to think creatively, secure resources, and transform ideas into thriving ventures. With a passion for empowering professionals and aspiring entrepreneurs, delivers interactive sessions that blend real-world startup strategies with innovative tools, ensuring every learner walks away with actionable insights and renewed confidence to drive growth.",
    skills: ["Marketing strategy and brand building", "Startup development and scaling", "Funding and investment readiness", "Innovation and creative problem-solving", "Entrepreneurial leadership and growth mindset"],
  },
  {
    name: "Abhed Chopade",
    expertise: "Professional Trainer | Training & Placement Officer",
    category: "Corporate Training",
    image: "/trainers/abhed chopade.jpeg",
    bio: "Dynamic Training & Placement Officer and Career Mentor with an MBA in Human Resource Management. Proven experience in student training, placement coordination, and corporate skill development. Passionate about career guidance and employability readiness.",
    skills: ["Training & Placement", "Career Guidance", "Corporate Training", "Student Mentorship", "Business Analytics", "HR Management"],
  },
  {
    name: "Prabhat R Chaubey",
    expertise: "Technical, AI, Cyber Security, DevOps Trainer",
    category: "Tech",
    image: "/trainers/Prabhat R Chaubey.jpeg",
    bio: "DevOps and QA Engineer with strong experience in automation, cloud, CI/CD, and system operations. Skilled in Docker, Kubernetes, AWS, Selenium, and Git. Mentors students in building solid technical foundations.",
    skills: ["DevOps", "AI", "Cyber Security", "Git", "AWS", "CI/CD", "Automation Testing"],
  },
  {
    name: "Sushmita Ingale",
    expertise: "Logistics and import export trainer",
    category: "Professional Training",
    image: "/trainers/sushmita ingale.jpeg",
    bio: "Electronics and Telecommunication Engineer with experience in professional training. Specialized in Soft Skills, Verbal Ability, and Logical Reasoning with a learner-centric approach. Capable of guiding diverse learner groups to build workplace-ready talent.",
    skills: ["Soft Skills", "Verbal Ability", "Logical Reasoning", "Communication", "Professional Etiquette", "Aptitude"],
  },
  {
    name: "Ruchi N Nagwanshi",
    expertise: "Freelance Softskill, Verbal, LR Trainer",
    category: "Soft Skills",
    image: "/trainers/Ruchi N Nagwanshi.jpeg",
    bio: "Passionate facilitator dedicated to bridging the gap between technical knowledge and practical application. Expert in Soft Skills, Verbal Ability, and Logical Reasoning. Experienced in delivering engaging sessions on both online and offline platforms.",
    skills: ["Soft Skills", "Verbal Ability", "Logical Reasoning", "Communication Skills", "Resume Building", "Leadership Skills", "Aptitude", "AIML", "Machine Learning", "Robotics"],
  },
  {
    name: "Abhaykumar R. Gavali",
    expertise: "Python | DSA | Automation | Data Science | AI Enthusiast",
    category: "Tech",
    image: "/trainers/Abhaykumar R. Gavali.jpeg",
    bio: "Experienced Python Trainer with expertise in Core Python, Object-Oriented Programming, Data Structures & Algorithms, Data Science, and real-world application development. Proven track record of delivering structured, industry-oriented training programs for engineering students and working professionals. Strong focus on building analytical thinking, clean coding practices, and problem-solving capabilities aligned with current industry standards. Committed to delivering practical, results-driven training with measurable learning outcomes.",
    skills: [
      "Core Python",
      "Data Structures & Algorithms",
      "Automation",
      "Data Science",
      "Artificial Intelligence",
      "Object-Oriented Programming",
      "Analytical Thinking",
      "Clean Coding"
    ],
  },
]

export default function Trainers() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedTrainer, setSelectedTrainer] = useState<(typeof trainers)[0] | null>(null)

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll("[data-trainer-card]")

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      className="relative bg-black px-6 py-12 md:px-12 md:py-20 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">Expert Trainers</div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Learn From The Best</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Our trainers are industry experts with years of real-world experience, dedicated to your success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              data-trainer-card
              onClick={() => setSelectedTrainer(trainer)}
              className="group cursor-pointer overflow-hidden bg-white transition-transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="mb-2 inline-block bg-red-600 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                    {trainer.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 font-medium text-black">{trainer.expertise}</p>
                <p className="text-sm text-red-600 font-bold">View Profile →</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Modal */}
      {selectedTrainer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedTrainer(null)}
        >
          <div
            className="relative max-h-[95vh] w-full max-w-5xl overflow-y-auto bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTrainer(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-black text-white transition hover:bg-red-600"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="relative h-[50vh] md:h-auto bg-gray-100">
                <img
                  src={selectedTrainer.image || "/placeholder.svg"}
                  alt={selectedTrainer.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-4 inline-block bg-red-600 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                  {selectedTrainer.category}
                </div>
                <h3 className="mb-2 text-4xl font-bold text-black">{selectedTrainer.name}</h3>
                <p className="mb-6 text-xl font-medium text-red-600">{selectedTrainer.expertise}</p>
                <p className="mb-8 leading-relaxed text-black/70 text-lg">{selectedTrainer.bio}</p>
                <div>
                  <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-black font-bold">Key Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrainer.skills.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="bg-black px-4 py-2 text-xs font-bold text-white uppercase tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
