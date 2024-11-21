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
        purpleLight: "#E0DFFF",
        purpleHover: "#4a4aee",
        yellow: "#fcb457",
        yellowHover: "#f8ab47",
        pink: "#FFCFCF",
        cornflowerLilac: "#FFB1B1",
        pinkD: "#ff8787",
        LightPeach: "#FFDBB1",
        BlueChalk: "#EBE7FF",
        Linen: "#FEF0E0",
        GreenL: "#e7ffde",
      },
      minHeight: {
        smHome: "calc(100vh - 9.92rem)",
        home: "calc(100vh - 8.2rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
