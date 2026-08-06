import type { ImageMetadata } from "astro";
import splineLogo from "../assets/logos/spline.webp";

export interface Language {
  name: string;
  /** Name of an SVG in src/icons. Ignored when `logo` is set. */
  iconName: string;
  /**
   * Raster brand mark, for logos that are not vector artwork. astro-icon only
   * collects SVGs, and an <image> inside one is dropped, so these are rendered
   * through astro:assets instead.
   */
  logo?: ImageMetadata;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  github: {
    name: "GitHub",
    iconName: "github",
  },
  elementor: {
    name: "Elementor",
    iconName: "elementor",
  },
  nodejs: {
    name: "Node.js",
    iconName: "node",
  },
react: {
    name: "React",
    iconName: "react",
  },
  vscode: {
    name: "VS Code",
    iconName: "vscode",
  },
  notion: {
    name: "Notion",
    iconName: "notion",
    className: "bg-white!",
  },
  trello: {
    name: "Trello",
    iconName: "trello",
  },
  obsidian: {
    name: "Obsidian",
    iconName: "obsidian",
  },
  photoshop: {
    name: "Photoshop",
    iconName: "photoshop",
  },
  illustrator: {
    name: "Illustrator",
    iconName: "illustrator",
  },
  gsap: {
    name: "GSAP",
    iconName: "gsap",
  },
  woocommerce: {
    name: "WooCommerce",
    iconName: "woo",
  },
  shopify: {
    name: "Shopify",
    iconName: "shopify",
  },
    kajabi: {
    name: "Kajabi",
    iconName: "kajabi",
  },

    blender: {
    name: "Blender",
    iconName: "blender",
  },

    uiux: {
    name: "UI/UX Design",
    iconName: "uiux",
  },

      AI: {
    name: "AI",
    iconName: "robot",
  },

      LLM: {
    name: "LLM",
    iconName: "robot",
  },
  framer: {
    name: "Framer",
    iconName: "framer",
  },
  // Official mark is black, so it needs a light chip behind it the same way
  // Notion does, otherwise it disappears on the dark theme.
  threejs: {
    name: "Three.js",
    iconName: "threejs",
    className: "bg-white!",
  },
  spline: {
    name: "Spline",
    iconName: "spline",
    logo: splineLogo,
  },
  claude: {
    name: "Claude",
    iconName: "claude",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 