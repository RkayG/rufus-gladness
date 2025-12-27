"use client";

import { useState } from "react";
import { getSimpleIconSlug, getSimpleIconUrl } from "@/lib/icons";

interface SkillCardProps {
  name: string;
  icon: string;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const [imageError, setImageError] = useState(false);

  // Check if icon is a URL (image)
  const isImageIcon = icon.startsWith("http://") || icon.startsWith("https://");

  const simpleIconSlug = getSimpleIconSlug(name);
  const iconSrc = getSimpleIconUrl(simpleIconSlug);
  const useSimpleIcon = !!iconSrc && !isImageIcon && icon === "code" && !imageError;

  return (
    <div className="flex flex-1 items-center gap-3 rounded-lg border border-[#654834] dark:border-[#654834] bg-white/5 dark:bg-[#32241a] p-4">
      <div className="text-primary flex items-center justify-center w-6 h-6 shrink-0" data-icon={name}>
        {isImageIcon ? (
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-6 h-6 object-contain"
            onError={() => setImageError(true)}
          />
        ) : useSimpleIcon ? (
          <img
            src={iconSrc!}
            alt={`${name} icon`}
            className="w-6 h-6 object-contain dark:brightness-0 dark:invert dark:opacity-80"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="material-symbols-outlined">{icon}</span>
        )}
        {imageError && useSimpleIcon && (
          <span className="material-symbols-outlined">{icon}</span>
        )}
      </div>
      <h2 className="text-[#333333] dark:text-white text-base font-bold leading-tight">
        {name}
      </h2>
    </div>
  );
}

