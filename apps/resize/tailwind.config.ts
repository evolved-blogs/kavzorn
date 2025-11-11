import type { Config } from "tailwindcss";
import baseConfig from "@kavzorn/tailwind-config";

export default {
  ...baseConfig,
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    // Include UI package components
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
} satisfies Config;
