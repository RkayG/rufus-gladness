import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import Link from "next/link";
import { allProjects } from "@/data/projects";
import { AnimatedButton } from "@/components/AnimatedButton";

const skills = [
  {
    name: "Python",
    iconUrl: "python",
    iconAlt: "Python logo",
  },
  {
    name: "Solidity",
    iconUrl: "solidity",
    iconAlt: "Solidity logo",
  },
  {
    name: "React",
    iconUrl: "react",
    iconAlt: "React logo",
  },
  {
    name: "JavaScript",
    iconUrl: "javascript",
    iconAlt: "JavaScript logo",
  },
  {
    name: "Docker",
    iconUrl: "docker",
    iconAlt: "Docker logo",
  },
  {
    name: "Node.js",
    iconUrl: "nodedotjs",
    iconAlt: "Node.js logo",
  },
  {
    name: "PostgreSQL",
    iconUrl: "postgresql",
    iconAlt: "PostgreSQL logo",
  },
  {
    name: "Tailwind",
    iconUrl: "tailwindcss",
    iconAlt: "Tailwind CSS logo",
  },
  {
    name: "Ethers.js",
    iconUrl: "ethereum",
    iconAlt: "Ethers.js logo",
  },
  {
    name: "AWS",
    iconUrl: "amazonaws",
    iconAlt: "AWS logo",
  },
  {
    name: "Heroku",
    iconUrl: "heroku",
    iconAlt: "Heroku logo",
  },
  {
    name: "Cloudinary",
    iconUrl: "cloudinary",
    iconAlt: "Cloudinary logo",
  },
  {
    name: "Rust",
    iconUrl: "rust",
    iconAlt: "Rust logo",
  },
  {
    name: "Bash",
    iconUrl: "gnubash",
    iconAlt: "Bash logo",
  },
  {
    name: "C",
    iconUrl: "c",
    iconAlt: "C logo",
  },
];

const experiences = [
  {
    period: "2024 – Present",
    title: "Co-founder & Backend Engineer",
    company: "SmartMention | Remote",
    points: [
      "Co-founded SmartMention, an AI-powered social listening and brand monitoring platform that tracks real-time mentions across thousands of platforms using custom keywords and hashtags.",
      "Architected and built the core crawler engine — a fault-tolerant system capable of high-volume tracking and job queues.",
      "Implemented an intelligent keyword monitoring pipeline and utilized Gemini Flash 2.0 to classify signals into leads, crises, trends, and anomalies with sub-second latency and ~87% accuracy.",
      "Benchmarked multiple sentiment analysis solutions (Vader, Hugging Face, Gemini Flash) and designed a hybrid approach: Gemini Flash 2.0 as primary engine with Vader as a high-speed fallback for simple cases.",
      "Built the scheduler system managing monitoring tasks, collection intervals, and alert triggers; assisted team in building the analytics dashboard frontend."
    ],
    stack: "Python, Node.js, React, Vite, PostgreSQL, Redis, AWS, NLP"
  },
  {
    period: "2025 – Present",
    title: "Technical Co-founder & Lead Developer",
    company: "Cxperia, France | Remote",
    points: [
      "Architected and engineered the Cxperia platform, a B2B2C SaaS loyalty platform designed for cosmetic brands, focusing on high-fidelity UX and personalized engagement.",
      "Implemented a multi-tenant architecture with Row Level Security and Role Based Access Control for team members, ensuring application-level and database-level security, scalability and efficiency.",
      "Engineered a privacy-first analytics pipeline to support brand decisions and ensured compliance with GDPR.",
      "Configured staging and production environments to enable safe feature validation before rollout, reducing deployment risk across the platform."
    ],
    stack: "Python, NextJs, React, PostgreSQL, Redis, OVH, Sentry, Docker, Playwright"
  },
  {
    period: "2025 – Present",
    title: "Lead Engineer",
    company: "J-Vortex Inc | Remote",
    points: [
      "Led a team of 5 engineers to build Wigree, an escrow-powered social e-commerce platform.",
      "Designed and co-built a http-based microservices architecture across 8 services using Django, balancing rapid development with long-term stability.",
      "Implemented Celery for asynchronous task processing across services, handling background jobs, cross-service workflows, and scheduled operations.",
      "Established CI/CD pipelines using GitHub Actions and Docker, standardizing deployment across all services and reducing release friction for the team.",
      "Configured production server infrastructure including firewall rules, team access controls, and load analysis across microservices to ensure security and stability."
    ],
    stack: "Python, Django, Celery, Docker, Digital Ocean, PostgreSQL"
  },
  {
    period: "2024 – 2025",
    title: "Software Developer",
    company: "Kentry Limited, Canterbury, UK | Remote",
    points: [
      "Engineered the OnRoute dispatch system, a comprehensive logistics suite for private transport, driving 50% increase in operational efficiency through streamlined workflows.",
      "Built a validation system that prevented drivers from initiating a job unless they were within 0.1 mile of the target location to ensure operational integrity.",
      "Implemented real-time GPS tracking, document verification workflows, and a competitive bidding where drivers submit fare proposals via mobile app.",
      "Implemented materialized view strategy that improved dashboard reporting speeds by 10x."
    ],
    stack: "Node.js, React, React Native, PostgreSQL, Redis, Websocket, OVH"
  },
  {
    period: "2022 – 2024",
    title: "Full-Stack Developer",
    company: "Web3Fruity, Nigeria",
    points: [
      "Developed a full-stack platform that curates the latest Web3 opportunities, including airdrops, task-based rewards, and play-to-earn games.",
      "Designed a tier-based learning system offering structured Web3 education tailored to user experience levels.",
      "Integrated Coingecko API for live token metrics, including market supply and price data."
    ],
    stack: "Node.js, NextJs, MongoDB, Coingecko API, Contentful CMS"
  },
];

// Show first 3 projects as featured
const featuredProjects = allProjects.slice(0, 4);

export const metadata: Metadata = {
  title: "About Me",
  description: "Backend Engineer & Technical Co-founder with 4+ years building production systems in AI, SaaS, logistics, and social commerce. Python, Node.js, TypeScript, PostgreSQL.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1 py-10 md:py-16">
            <ProfileHeader
              name="Rufus"
              title="Backend Engineer & Technical Co-founder"
              description="Backend Engineer & Technical Co-founder with 4+ years of experience architecting and shipping production-grade systems across AI, SaaS, logistics, and social commerce. I specialize in designing distributed backend infrastructure — microservices, real-time data pipelines, multi-tenant architectures, and AI integration — using Python, Node.js, TypeScript, and PostgreSQL. Beyond writing code, I've co-founded two platforms from zero to production, led engineering teams, and made the technical decisions that shaped the product. I thrive in early-stage environments where ownership is total and the problems are unsolved."
            />
            <section className="mt-16">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                Engineering Reliability
              </h2>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                Reliability is not an accident—it is an architecture. In an industry often obsessed with &quot;moving fast and breaking things,&quot;
                I take a different approach: <span className="font-semibold text-[#6b4a49] dark:text-[#d4a574]">move fast by building things that don&apos;t break</span>.
                I engineer systems that treat failure not as an anomaly to be feared, but as a constraint to be managed.
              </p>

              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                My role extends beyond writing code; I build the digital bedrock that businesses stand on.
                Whether it&apos;s a high-frequency trading bot or a multi-tenant healthcare platform, the goal is always
                <span className="italic"> boring software</span>. Software that is boring because it works, predictable because it is strongly typed,
                and secure because it is designed that way from the first line of code.
              </p>

              <div className="mt-6 p-6 border-l-4 border-[#6b4a49] dark:border-[#d4a574] bg-[#f9f5f1] dark:bg-[#1a1a1a]/50">
                <p className="text-[#6b4a49] dark:text-[#d4a574] font-semibold italic">
                  &quot;True seniority is knowing what not to build. I focus on removing complexity, not adding it.
                  The best system is one that solves the problem with the fewest moving parts and the strongest guarantees.&quot;
                </p>
              </div>

              <p className="mt-6 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                I advocate for <span className="font-semibold">Radical Simplicity</span>. Complexity is the enemy of reliability.
                By leveraging strong static analysis, immutable infrastructure, and proven design patterns, I reduce the surface area for bugs to hide.
                I don&apos;t just deliver features; I deliver peace of mind.
              </p>
            </section>
            <section className="mt-16">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993] mb-2">
                Strategic Tooling
              </h2>
              <p className="text-base text-[#333333]/80 dark:text-[#c8a993] mb-6">
                My stack is selected for providing the best balance of developer experience, ecosystem maturity, and performance.
              </p>
              <SkillsSection skills={skills} />
            </section>
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={featuredProjects} />
            <section className="mt-20 text-center">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                Let&apos;s Architect Your Next Venture
              </h2>
              <p className="mt-3 mx-auto max-w-lg text-base text-[#333333]/80 dark:text-[#c8a993]">
                Whether you're a founder needing a technical co-founder, a startup scaling their platform,
                or a team tackling a complex technical challenge—let's build something that matters.
              </p>
              <div className="mt-6 flex w-fit mx-auto flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton href="/projects">
                  Explore My Work
                </AnimatedButton>
                <AnimatedButton href="/contact" variant="ghost">
                  Start a Conversation
                </AnimatedButton>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

