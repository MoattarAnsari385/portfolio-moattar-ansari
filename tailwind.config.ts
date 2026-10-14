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
        background: "#030014",
        surface: {
          DEFAULT: "#0a0a1a",
          light: "#111132",
          lighter: "#1a1a3e",
        },
        accent: {
          blue: "#6366f1",
          "blue-light": "#818cf8",
          purple: "#7c3aed",
          "purple-light": "#a78bfa",
          cyan: "#06b6d4",
          pink: "#ec4899",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
        border: {
          DEFAULT: "rgba(148,163,184,0.08)",
          light: "rgba(148,163,184,0.15)",
          glow: "rgba(99,102,241,0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #06b6d4 100%)",
        "gradient-glow": "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(124,58,237,0.15) 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(15,15,40,0.6) 0%, rgba(10,10,26,0.8) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "border-flow": "border-flow 3s linear infinite",
        "typing": "typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(99,102,241,0.3)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#6366f1" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.15)",
        "glow-lg": "0 0 60px rgba(99,102,241,0.2)",
        "glow-purple": "0 0 30px rgba(124,58,237,0.15)",
        "glow-cyan": "0 0 30px rgba(6,182,212,0.15)",
        glass: "0 8px 32px rgba(0,0,0,0.3)",
        card: "0 4px 24px rgba(0,0,0,0.2), 0 0 0 1px rgba(148,163,184,0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

export default config;
