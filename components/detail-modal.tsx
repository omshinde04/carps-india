"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { X } from "lucide-react"

interface DetailModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    content: {
        overview: string
        benefitsStudents: string[]
        benefitsColleges: string[]
    }
}

export default function DetailModal({ isOpen, onClose, title, content }: DetailModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    const backdropRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            if (backdropRef.current && modalRef.current) {
                gsap.to(backdropRef.current, { opacity: 1, duration: 0.3 })
                gsap.fromTo(
                    modalRef.current,
                    { opacity: 0, scale: 0.9, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
                )
            }
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                ref={backdropRef}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0"
                onClick={onClose}
            />
            <div
                ref={modalRef}
                className="relative w-full max-w-2xl bg-white p-8 md:p-12 shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 text-black hover:bg-gray-100 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>

                <h3 className="mb-8 text-3xl font-bold text-black border-l-4 border-red-600 pl-4">{title}</h3>

                <div className="space-y-8 overflow-y-auto max-h-[70vh] pr-4 custom-scrollbar">
                    <div>
                        <h4 className="mb-3 font-bold text-red-600 uppercase text-sm tracking-wider">Overview</h4>
                        <p className="text-black/70 leading-relaxed">{content.overview}</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h4 className="mb-4 font-bold text-black border-b border-gray-100 pb-2">Benefits for Students</h4>
                            <ul className="space-y-2">
                                {content.benefitsStudents.map((b, i) => (
                                    <li key={i} className="text-sm text-black/70 flex gap-2">
                                        <span className="text-red-600 font-bold">•</span> {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 font-bold text-black border-b border-gray-100 pb-2">Benefits for Colleges</h4>
                            <ul className="space-y-2">
                                {content.benefitsColleges.map((b, i) => (
                                    <li key={i} className="text-sm text-black/70 flex gap-2">
                                        <span className="text-red-600 font-bold">•</span> {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
