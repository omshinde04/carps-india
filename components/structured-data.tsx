"use client"

export default function StructuredData() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "CARPS Institute",
        "url": "https://carpsindia.com",
        "logo": "https://carpsindia.com/logo.jpeg",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 9370682285",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://www.facebook.com/carpsindia",
            "https://www.linkedin.com/company/carps-learning-solutions",
            "https://www.instagram.com/carps_institute"
        ]
    };

    const businessData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "CARPS Institute",
        "image": "https://carpsindia.com/logo.jpeg",
        "url": "https://carpsindia.com",
        "telephone": "+91 9370682285",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "priceRange": "$$",
        "description": "Premium tech and soft skills training institute in India offering future-focused coaching in AI, Data Analytics, and Corporate Readiness."
    };

    const courses = [
        {
            "@type": "Course",
            "name": "Advanced Excel & Power BI",
            "description": "Mastery of data management, automation, analytics dashboards, and professional reporting.",
            "provider": {
                "@type": "Organization",
                "name": "CARPS Institute",
                "sameAs": "https://carpsindia.com"
            }
        },
        {
            "@type": "Course",
            "name": "Digital Marketing & Branding",
            "description": "SEO, SEM, content strategy, and branding fundamentals for the modern business landscape.",
            "provider": {
                "@type": "Organization",
                "name": "CARPS Institute",
                "sameAs": "https://carpsindia.com"
            }
        },
        {
            "@type": "Course",
            "name": "Corporate Readiness Skills",
            "description": "Workplace behavior, professional communication, etiquette, and overall employability.",
            "provider": {
                "@type": "Organization",
                "name": "CARPS Institute",
                "sameAs": "https://carpsindia.com"
            }
        },
        {
            "@type": "Course",
            "name": "Behavioural Training",
            "description": "Emotional intelligence, mindset building, resilience, and self-management through psychology.",
            "provider": {
                "@type": "Organization",
                "name": "CARPS Institute",
                "sameAs": "https://carpsindia.com"
            }
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
            />
            {courses.map((course, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            ...course
                        })
                    }}
                />
            ))}
        </>
    );
}
