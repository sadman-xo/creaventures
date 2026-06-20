import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0D0F1A",
        surface: "#141626",
        "surface-2": "#1C1F35",
        border: "#262A45",
        lavender: "#9B8BFF",
        amber: "#F5A623",
        sage: "#5EC4A1",
        rose: "#FF7B9C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(155,139,255,0.18)",
        amber: "0 0 34px rgba(245,166,35,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
