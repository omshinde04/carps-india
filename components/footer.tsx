"use client"

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6 flex h-20 w-20 items-center justify-center overflow-hidden border-2 border-white bg-white">
              <img src="/logo.jpeg" alt="CARPS Logo" className="h-full w-full object-contain" />
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Programs", href: "#programs" },
                { name: "Business Modules", href: "#business-modules" },
                { name: "Trainers", href: "#trainers" },
                { name: "Gallery", href: "#gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 transition hover:text-red-600">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-white">Main Categories</h4>
            <ul className="space-y-3">
              {[
                { name: "Tech Training", href: "#programs" },
                { name: "Entrepreneurship", href: "#business-modules" },
                { name: "Soft Skills", href: "#trainers" },
                { name: "Impact", href: "#impact" },
              ].map((program) => (
                <li key={program.name}>
                  <a href={program.href} className="text-white/70 transition hover:text-red-600">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-white">
              <a href="/contact" className="hover:text-red-600 transition">Contact Us</a>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="h-5 w-5 flex-shrink-0 text-red-600" />
                <a href="mailto:admin@carpsindia.com" className="hover:text-red-600 transition">admin@carpsindia.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="h-5 w-5 flex-shrink-0 text-red-600" />
                <a href="tel:+919370682285" className="hover:text-red-600 transition">+91 9370682285</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-red-600 hover:bg-red-600"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} CARPS Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
