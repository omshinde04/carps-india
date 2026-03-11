import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import StructuredData from "@/components/structured-data"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "CARPS Institute | Premium Tech & Soft Skills Training in India",
  description:
    "CARPS Institute provides industry-leading coaching in AI, ML, Data Analytics, Digital Marketing, and Corporate Readiness. Transform your career with our future-focused training programs.",
  keywords: [
    "CARPS India",
    "coaching institute",
    "tech training",
    "soft skills development",
    "corporate readiness",
    "AI training India",
    "digital marketing course",
    "career development",
    "professional skills",
    "HR management training",
    "business analytics",
    "startup mentor",
    "CARPS Institute",
    "skill development India",
  ],
  authors: [{ name: "CARPS Institute" }],
  creator: "CARPS Institute",
  publisher: "CARPS Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://carpsindia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CARPS Institute | Premium Tech & Soft Skills Training in India",
    description: "Professional tech and non-tech skill development programs. Building skills, careers, reputation, and long-term brand value.",
    url: "https://carpsindia.com",
    siteName: "CARPS Institute",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "CARPS Institute Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CARPS Institute | Premium Tech & Soft Skills Training",
    description: "Transform your career with CARPS. Industry-leading coaching in AI, Tech, and Professional Skills.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon-carps.svg",
    apple: "/favicon-carps.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
