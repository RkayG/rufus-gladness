import { getSimpleIconSlug, getSimpleIconUrl } from "@/lib/icons";
import { AnimatedButton } from "@/components/AnimatedButton";

interface Skill {
  name: string;
  iconUrl: string;
  iconAlt: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mt-16">

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => {
          const isImageUrl = skill.iconUrl.startsWith("http://") || skill.iconUrl.startsWith("https://");
          const simpleIconSlug = getSimpleIconSlug(skill.name);
          const iconSrc = isImageUrl
            ? skill.iconUrl
            : simpleIconSlug
              ? getSimpleIconUrl(simpleIconSlug)
              : skill.iconUrl;

          return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#4A2E2A]/10 dark:border-[#473324] bg-white dark:bg-[#2a1f17] p-4 transition-transform hover:-translate-y-1"
            >
              {iconSrc ? (
                <img
                  alt={skill.iconAlt}
                  className="h-10 w-10 object-contain dark:brightness-0 dark:invert dark:opacity-80"
                  src={iconSrc}
                />
              ) : (
                <div className="h-10 w-10 flex items-center justify-center text-[#8D6E63] dark:text-[#8D6E63]/80">
                  <span className="material-symbols-outlined text-2xl">code</span>
                </div>
              )}
              <p className="text-sm font-medium text-[#333333] dark:text-white">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center my-6">
        <AnimatedButton href="/skills">See All</AnimatedButton>
      </div>
    </section>
  );
}

