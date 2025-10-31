import type { Config } from "tailwindcss";
import preset from "@kavzorn/tailwind-config";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  presets: [preset],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
