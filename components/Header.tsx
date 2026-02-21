"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { AnimatedButton } from "./AnimatedButton";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const getLinkClassName = (href: string) => {
    const baseClasses = "text-sm font-medium leading-normal transition-colors";
    const activeClasses = isActive(href)
      ? "text-[#6b4a49] dark:text-[#cf6417] font-bold"
      : "text-[#333333] dark:text-white hover:text-[#4A2E2A] dark:hover:text-[#c8a993]";
    return `${baseClasses} ${activeClasses}`;
  };

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
            className={getLinkClassName("/")}
            href="/"
          >
            About
          </Link>
          <Link
            className={getLinkClassName("/skills")}
            href="/skills"
          >
            Skills
          </Link>
          <Link
            className={getLinkClassName("/projects")}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={getLinkClassName("/blog")}
            href="/blog"
          >
            Blog
          </Link>
          {/* <Link
            className={getLinkClassName("/contact")}
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

