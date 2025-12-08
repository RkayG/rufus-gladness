import Link from "next/link";

interface Skill {
  name: string;
  iconUrl: string;
  iconAlt: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

// Map tech names to Simple Icons slugs (for DuckDuckGo/Simple Icons)
const getSimpleIconSlug = (techName: string): string | null => {
  const iconMap: Record<string, string> = {
    "Python": "python",
    "Solidity": "solidity",
    "React": "react",
    "JavaScript": "javascript",
    "Docker": "docker",
    "Node.js": "nodedotjs",
    "PostgreSQL": "postgresql",
    "Tailwind": "tailwindcss",
    "Tailwind CSS": "tailwindcss",
    "Ethers.js": "ethereum",
    "AWS": "amazonaws",
    "Heroku": "heroku",
    "Cloudinary": "cloudinary",
    "Rust": "rust",
    "Bash": "gnubash",
    "C": "c",
  };
  
  return iconMap[techName] || null;
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-handwriting text-3xl font-bold text-[#6b4a49] dark:text-[#c8a993]">
          Skills & Technologies
        </h2>
        <Link
          href="/skills"
          className="text-sm font-semibold text-[#8D6E63] dark:text-[#cf6417] hover:underline"
        >
          See All
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => {
          const isImageUrl = skill.iconUrl.startsWith("http://") || skill.iconUrl.startsWith("https://");
          const simpleIconSlug = getSimpleIconSlug(skill.name);
          const iconSrc = isImageUrl 
            ? skill.iconUrl 
            : simpleIconSlug 
              ? `https://cdn.simpleicons.org/${simpleIconSlug}/8D6E63`
              : skill.iconUrl;

          return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#4A2E2A]/10 dark:border-[#473324] bg-white dark:bg-[#2a1f17] p-4 transition-transform hover:-translate-y-1"
            >
              <img
                alt={skill.iconAlt}
                className="h-10 w-10 object-contain dark:brightness-0 dark:invert dark:opacity-80"
                src={iconSrc}
              />
              <p className="text-sm font-medium text-[#333333] dark:text-white">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

