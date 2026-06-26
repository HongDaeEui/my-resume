import { Experience, StackCategory } from "@/lib/types";

export const stackCategories: StackCategory[] = [
  {
    category: "Core",
    items: ["React", "Next.js (App Router)", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Framer Motion"],
  },
  {
    category: "State / Data",
    items: ["TanStack Query", "Zustand", "Zod"],
  },
  {
    category: "AI-Augmented Workflow",
    items: ["Claude Code", "Cursor", "GitHub Copilot"],
    highlight: true,
  },
  {
    category: "Testing & Tooling",
    items: ["Vitest", "Playwright", "Storybook"],
  },
];

export const experiences: Experience[] = [];
