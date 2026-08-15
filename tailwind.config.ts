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
        charcoal: "#121417",
        softCharcoal: "#1A1F24",
        stone: "#E7E1D7",
        mutedStone: "rgba(231, 225, 215, 0.72)",
        brass: "#B08D57",
        brassHover: "#8F7449",
        hairline: "rgba(231, 225, 215, 0.10)",
      },
      fontFamily: {
        serif: [
          "Playfair Display",
          "Cormorant Garamond",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tighter2: "-0.02em",
        wideLabel: "0.16em",
        brand: "0.18em",
      },
      boxShadow: {
        brassBloom: "0 8px 28px rgba(176, 141, 87, 0.28)",
        navGlow: "0 4px 24px rgba(0, 0, 0, 0.35)",
        cardLift: "0 12px 40px rgba(0, 0, 0, 0.35)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        vignette:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
