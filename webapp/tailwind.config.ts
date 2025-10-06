import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const colors = {
  border: "#e5e5e5",
  primary: "#4338CA",
  dark: "#151515",
  lightPurple: "#F3E8FF",
  accent: "#FF9500",
  background: "#f9f9f9",
};

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./npm_lib/**/*.{js,jsx}",
    "./scn/**/*.{js,jsx}",
    "./launchkit/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ...colors,
        // Override blue colors with indigo for darker, bluish-purple theme
        blue: {
          50: '#eef2ff',   // indigo-50
          100: '#e0e7ff',  // indigo-100
          200: '#c7d2fe',  // indigo-200
          300: '#a5b4fc',  // indigo-300
          400: '#818cf8',  // indigo-400
          500: '#6366f1',  // indigo-500
          600: '#4338ca',  // indigo-600 (primary)
          700: '#3730a3',  // indigo-700
          800: '#312e81',  // indigo-800
          900: '#1e1b4b',  // indigo-900
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        15: "3.75rem",
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
        6: "30px",
        7: "35px",
        8: "40px",
        9: "45px",
        10: "50px",
        11: "55px",
        12: "60px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar ": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
