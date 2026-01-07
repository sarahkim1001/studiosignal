import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foundation: "#F2F2EE", // Soft Quartz - warmer, stone-like off-white
        inky: "#0A1A0F", // Deep Pine - almost black with green "soul"
        bone: "#E7DCC9", // Beige/cream neutral (kept)
        garnet: "#945D41", // Copper Earth - smoother, clay-like version
        gold: "#A68942", // Raw Ochre - natural, muted gold
        slate: "#14261C", // Dark Malachite - deep, mysterious gemstone
      },
      fontFamily: {
        sans: ["var(--font-neue-montreal-book)", "sans-serif"],
      },
      fontWeight: {
        book: "400",
        medium: "500",
        bold: "700",
      },
      zIndex: {
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;
