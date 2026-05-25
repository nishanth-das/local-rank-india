import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4FFF",
        secondary: "#FF6B2B",
        background: "#F8F9FF",
        dark: "#0A0F1E",
        surface: "#FFFFFF",
        textPrimary: "#0A0F1E",
        textSecondary: "#4A5568",
        border: "#E2E8F0",
        success: "#10B981",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
