"use client"

import { useState } from "react"
import { ArrowLeft, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    })

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setStatus("idle")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                setStatus("success")
                setFormData({
                    name: "",
                    phone: "",
                    message: ""
                })
            } else {
                setStatus("error")
            }
        } catch (error) {
            setStatus("error")
        }

        setLoading(false)
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 py-6">
                <a href="/" className="inline-flex items-center text-white/70 hover:text-red-600 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </a>
            </div>

            <div className="container mx-auto px-6 py-12 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

                    {/* Contact Info Side */}
                    <div>
                        <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-red-600">
                            Get in Touch
                        </div>

                        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                            Let's Start Your Journey
                        </h1>

                        <p className="mb-12 text-lg text-white/70">
                            Have questions about our programs? Want to enroll?
                            Reach out to us and we'll get back to you as soon as possible.
                        </p>

                        <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                                    <Mail className="h-6 w-6 text-red-600" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold">Email Us</h3>
                                    <a href="mailto:admin@carpsindia.com" className="text-white/70 hover:text-white transition">
                                        admin@carpsindia.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                                    <Phone className="h-6 w-6 text-red-600" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold">Call Us</h3>
                                    <a href="tel:+919370682285" className="text-white/70 hover:text-white transition">
                                        +91 9370682285
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="rounded-2xl bg-white p-8 md:p-12 text-black">
                        <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-black"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    required
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-black"
                                    placeholder="+91 9876543210"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Message
                                </label>

                                <textarea
                                    required
                                    rows={4}
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-black"
                                    placeholder="Tell us about your learning goals..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </div>

                            {/* Success Message */}
                            {status === "success" && (
                                <p className="text-green-600 font-medium">
                                    ✅ Message submitted successfully. We will contact you soon.
                                </p>
                            )}

                            {/* Error Message */}
                            {status === "error" && (
                                <p className="text-red-600 font-medium">
                                    ❌ Something went wrong. Please try again.
                                </p>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                disabled={loading}
                                className="w-full bg-red-600 py-6 text-lg hover:bg-red-700"
                            >
                                {loading ? "Sending..." : "Send Message"}
                                <Send className="ml-2 h-5 w-5" />
                            </Button>

                        </form>
                    </div>

                </div>
            </div>
        </main>
    )
}