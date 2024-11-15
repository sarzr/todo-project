import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#5757EB",
        purpleHome: "#7748CC",
        yellow: "#fcb457",
        yellowHover: "#f8ab47",
      },
    },
  },
  plugins: [],
} satisfies Config;
