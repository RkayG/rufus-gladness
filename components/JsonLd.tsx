import React from "react";

export function JsonLd() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rufusgladness.com";

    const personData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rufus Gladness",
        "url": baseUrl,
        "jobTitle": "Backend Engineer & Technical Co-founder",
        "sameAs": [
            "https://github.com/RkayG",
            "https://www.linkedin.com/in/gladness-rufus/",
            "https://x.com/gladness_rkay"
        ],
        "description": "Backend Engineer & Technical Co-founder with 4+ years architecting production systems in AI, SaaS, logistics, and social commerce. Python, Node.js, TypeScript, PostgreSQL."
    };

    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Rufus Gladness Portfolio",
        "url": baseUrl,
        "author": {
            "@type": "Person",
            "name": "Rufus Gladness"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
            />
        </>
    );
}
