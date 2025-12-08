import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import Link from "next/link";
import { allProjects } from "@/data/projects";

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
    period: "2025 - Present",
    title: "CTO / Lead Engineer",
    company: "J Vortex",
    description:
      "Part-time role leading the development of the company's suite of software, including Wigree, a next-generation escrow-backed peer-to-peer social marketplace. Responsible for technical strategy, architecture decisions, and engineering team leadership.",
  },
  {
    period: "2025 - Present",
    title: "Lead Developer",
    company: "Cxperia",
    description:
      "Built the Cxperia platform, a customer loyalty platform for cosmetic brands to design and manage dynamic product experiences. Led the development of the entire platform architecture, focusing on creating engaging and personalized customer experiences.",
  },
  {
    period: "2024 - 2025",
    title: "Remote Backend / Python Instructor",
    company: "FuturDevs",
    description:
      "Taught backend development and Python programming to students in a remote learning environment. Designed and delivered comprehensive curriculum covering Python fundamentals, backend architecture, API development, database design, and best practices for building scalable applications.",
  },
  {
    period: "Feb 2025 - May 2025",
    title: "Contract Developer",
    company: "Primegrills",
    description:
      "Worked as a backend developer building an event-driven microservices architecture for the company. Developed a custom POS ordering system using cutting-edge technologies including Django, React, Vite, PostgreSQL, Redis, RabbitMQ, and WebSockets, ensuring high performance even under massive traffic loads.",
  },
  {
    period: "2024 - Nov 2024",
    title: "Head of IT",
    company: "BettyBet",
    description:
      "Managed IT operations and infrastructure for a virtual betting company. Responsible for overseeing technical systems, ensuring platform reliability, and leading the IT team to support business operations.",
  },
];

// Show first 3 projects as featured
const featuredProjects = allProjects.slice(0, 3);

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 sm:px-8 lg:px-0">
          <Header />
          <main className="flex-1 py-10 md:py-16">
            <ProfileHeader
              name="Rufus"
              title="Software & Blockchain Engineer"
              description="A passionate full-stack engineer with a focus on building software and blockchain solutions that are secure, scalable, and user-friendly. I enjoy solving problems that require creative solutions."
            />
            <section className="mt-16">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                My Story
              </h2>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                I started sofware engineering as a curious crypto trader. Watching markets move every day made me deeply curious about how blockchains and cryptocurrencies actually work under the hood, which pulled me into programming. Once I got into software development, I realized there&apos;s a big gap between casual scripts, regular web apps, and the kind of engineering needed to build real blockchain systems.
              </p>
              <p className="mt-4 text-base font-normal leading-relaxed text-[#333333]/80 dark:text-[#c8a993]">
                Instead of jumping straight into smart contracts, I first focused on mastering Web2 fundamentals: building APIs, architecting backends, working with databases, and shipping production systems end-to-end. With that foundation, I moved into the EVM and Solana ecosystems, exploring AMMs, MEV bots, trading algorithms, and full-stack dApps. Today I combine that trading background with solid engineering experience to design and build blockchain and fintech platforms that are not just clever, but reliable, secure, and scalable.
              </p>
            </section>
            <SkillsSection skills={skills} />
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={featuredProjects} />
            <section className="mt-20 text-center">
              <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
                Let&apos;s Build Something Great
              </h2>
              <p className="mt-3 mx-auto max-w-lg text-base text-[#333333]/80 dark:text-[#c8a993]">
                Interested in collaborating or have a project in mind? I&apos;m
                always open to new opportunities and challenges.
              </p>
              <Link
                href="/projects"
                className="mt-6 inline-flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#8D6E63] dark:bg-[#cf6417] text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mx-auto"
              >
                <span className="truncate">View My Work</span>
              </Link>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

