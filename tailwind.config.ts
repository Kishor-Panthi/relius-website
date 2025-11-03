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
        primary: {
          DEFAULT: "#0B3D91",
          50: "#E6EDF7",
          100: "#CCDCEF",
          200: "#99B9DF",
          300: "#6696CF",
          400: "#3373BF",
          500: "#0B3D91",
          600: "#093174",
          700: "#072557",
          800: "#05193A",
          900: "#020C1D",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FAF7EC",
          100: "#F5EFD9",
          200: "#EBDFB3",
          300: "#E1CF8D",
          400: "#D7BF67",
          500: "#D4AF37",
          600: "#AA8C2C",
          700: "#7F6921",
          800: "#554616",
          900: "#2A230B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(212, 175, 55, 0.3)",
        "glow-lg": "0 0 40px rgba(212, 175, 55, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
