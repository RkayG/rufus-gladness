/**
 * Map technology names to Simple Icons slugs.
 * Used for fetching icons from cdn.simpleicons.org
 */
export const iconMap: Record<string, string> = {
    // Programming Languages
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "Python": "python",
    "C": "c",
    "Rust": "rust",
    "Bash": "gnubash",
    "Solidity": "solidity",

    // Frameworks & Libraries
    "React": "react",
    "React Native": "react",
    "Next.js": "nextdotjs",
    "Node.js": "nodedotjs",
    "Express": "express",
    "Tailwind CSS": "tailwindcss",
    "Tailwind": "tailwindcss",
    "Expo": "expo",
    "Ethers.js": "ethereum",
    "Django": "django",
    "Flask": "flask",
    "FastAPI": "fastapi",
    "Vite": "vite",
    "Prisma": "prisma",
    "Heroku": "heroku",
    "Cloudinary": "cloudinary",

    // Blockchain
    "Ethereum": "ethereum",
    "Solana": "solana",
    "Binance Smart Chain": "binance",
    "Polygon": "polygon",
    "IPFS": "ipfs",
    "Hardhat": "hardhat",
    "Truffle": "truffle",
    "OpenZeppelin": "openzeppelin",
    "Foundry": "foundry",
    "Anchor": "anchor",

    // Databases
    "PostgreSQL": "postgresql",
    "MySQL": "mysql",
    "MongoDB": "mongodb",
    "Redis": "redis",
    "Supabase": "supabase",

    // Cloud Platforms
    "AWS": "amazonaws",
    "Hetzner": "hetzner",
    "Railway": "railway",
    "DigitalOcean": "digitalocean",
    "OVH Cloud": "ovh",
    "Vercel": "vercel",
    "Render": "render",

    // DevOps & Deployment
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "Helm": "helm",
    "Jenkins": "jenkins",
    "GitLab CI/CD": "gitlab",
    "GitHub Actions": "githubactions",
    "Git": "git",

    // Testing
    "Jest": "jest",
    "React Testing Library": "testinglibrary",
    "Cypress": "cypress",
    "Playwright": "playwright",
    "Puppeteer": "puppeteer",
    "TestCafe": "testcafe",
    "Selenium": "selenium",
    "Mocha": "mocha",

    // Monitoring & Reporting
    "Metabase": "metabase",
    "Prometheus": "prometheus",
    "Grafana": "grafana",
    "Datadog": "datadog",
    "Sentry": "sentry",

    // Development Tools
    "Postman": "postman",
    "Insomnia": "insomnia",
    "cURL": "curl",
    "Remix": "remix",
};

/**
 * Get the Simple Icons slug for a given technology name.
 */
export const getSimpleIconSlug = (techName: string): string | null => {
    return iconMap[techName] || null;
};

/**
 * Construct the Simple Icons CDN URL for a given slug and color.
 */
export const getSimpleIconUrl = (slug: string | null | undefined, color: string = "8D6E63"): string | null => {
    if (!slug) return null;
    return `https://cdn.simpleicons.org/${slug}/${color}`;
};
