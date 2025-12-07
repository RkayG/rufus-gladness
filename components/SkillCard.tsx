interface SkillCardProps {
  name: string;
  icon: string;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  // Check if icon is a URL (image)
  const isImageIcon = icon.startsWith("http://") || icon.startsWith("https://");
  
  // Map tech names to Simple Icons slugs (for DuckDuckGo/Simple Icons)
  const getSimpleIconSlug = (techName: string): string | null => {
    const iconMap: Record<string, string> = {
      "JavaScript": "javascript",
      "TypeScript": "typescript",
      "Python": "python",
      "React": "react",
      "Next.js": "nextdotjs",
      "Node.js": "nodedotjs",
      "Express": "express",
      "Docker": "docker",
      "PostgreSQL": "postgresql",
      "MySQL": "mysql",
      "MongoDB": "mongodb",
      "Redis": "redis",
      "Prisma": "prisma",
      "Rust": "rust",
      "Solana": "solana",
      "Ethereum": "ethereum",
      "Solidity": "solidity",
      "Tailwind CSS": "tailwindcss",
      "Vite": "vite",
      "Git": "git",
      "Kubernetes": "kubernetes",
      "AWS": "amazonaws",
      "Vercel": "vercel",
      "Jest": "jest",
      "Cypress": "cypress",
      "Playwright": "playwright",
      "Selenium": "selenium",
      "Prometheus": "prometheus",
      "Grafana": "grafana",
      "Datadog": "datadog",
    };
    
    return iconMap[techName] || null;
  };

  const simpleIconSlug = getSimpleIconSlug(name);
  const useSimpleIcon = simpleIconSlug && !isImageIcon && icon === "code";

  return (
    <div className="flex flex-1 items-center gap-3 rounded-lg border border-[#654834] dark:border-[#654834] bg-white/5 dark:bg-[#32241a] p-4">
      <div className="text-primary flex items-center justify-center w-6 h-6 shrink-0" data-icon={name}>
        {isImageIcon ? (
          <img 
            src={icon} 
            alt={`${name} icon`}
            className="w-6 h-6 object-contain"
          />
        ) : useSimpleIcon ? (
          <img 
            src={`https://cdn.simpleicons.org/${simpleIconSlug}/8D6E63`}
            alt={`${name} icon`}
            className="w-6 h-6 object-contain dark:brightness-0 dark:invert dark:opacity-80"
            onError={(e) => {
              // Fallback to Material Symbol if image fails
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent && !parent.querySelector(".material-symbols-outlined")) {
                const fallback = document.createElement("span");
                fallback.className = "material-symbols-outlined";
                fallback.textContent = icon;
                parent.appendChild(fallback);
              }
            }}
          />
        ) : (
          <span className="material-symbols-outlined">{icon}</span>
        )}
      </div>
      <h2 className="text-[#333333] dark:text-white text-base font-bold leading-tight">
        {name}
      </h2>
    </div>
  );
}

