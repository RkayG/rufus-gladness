import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { AnimatedButton } from "./AnimatedButton";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#4A2E2A]/20 dark:border-[#473324] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm py-3">
      <div className="flex items-center gap-4 text-[#4A2E2A] dark:text-white">
        <div className="size-5">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          Rufus Gladness
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden items-center gap-9 md:flex">
          <Link
            className="text-[#333333] dark:text-white text-sm font-medium leading-normal hover:text-[#4A2E2A] dark:hover:text-[#c8a993] transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-[#333333] dark:text-white text-sm font-medium leading-normal hover:text-[#4A2E2A] dark:hover:text-[#c8a993] transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-[#333333] dark:text-white text-sm font-medium leading-normal hover:text-[#4A2E2A] dark:hover:text-[#c8a993] transition-colors"
            href="/skills"
          >
            Skills
          </Link>
          <Link
            className="text-[#333333] dark:text-white text-sm font-medium leading-normal hover:text-[#4A2E2A] dark:hover:text-[#c8a993] transition-colors"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-[#333333] dark:text-white text-sm font-medium leading-normal hover:text-[#4A2E2A] dark:hover:text-[#c8a993] transition-colors"
            href="/blog"
          >
            Blog
          </Link>
          {/* <Link
            className="text-[#333333] dark:text-white text-sm font-medium leading-normal hover:text-[#4A2E2A] dark:hover:text-[#c8a993] transition-colors"
            href="/contact"
          >
            Contact
          </Link> */}
        </nav>
        <AnimatedButton href="/contact">Get In Touch</AnimatedButton>
       {/*  <ThemeToggle /> */}
      </div>
    </header>
  );
}

