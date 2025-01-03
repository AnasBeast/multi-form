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
        marineblue: "var(--marineblue)",
        purplishblue: "var(--purplishblue)",
        pastelblue: "var(--pastelblue)",
        lightblue: "var(--lightblue)",
        strawberryred: "var(--strawberryred)",
        coolgray: "var(--coolgray)",
        lightgray: "var(--lightgray)",
        magnolia: "var(--magnolia)",
        alabaster: "var(--alabaster)",
      },
      backgroundImage:{
        'side': "url('/images/bg-sidebar-desktop.svg')",
      },
      animation:{
        'fade-in': 'fadeIn 1s ease-in-out'
      },
      keyframes:{
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
