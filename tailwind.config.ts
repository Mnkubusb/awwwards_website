import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "circular-web": ['var("--font-circular-web")', "sans-serif"],
        general: ['var("--font-general")', "sans-serif"],
        zentry: ["var(--font-zentry)", "sans-serif"],
        "robert-medium": ["var(--font-robert-medium)", "sans-serif"],
        "robert-regular": ["var(--font-robert-regular)", "sans-serif"],
      },
      colors: {
        blue:{
          50: "#dfdff0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD"
        },
        voilet:{
          300: "#5724FF"
        },
        yellow:{
          100: "#8E983F",
          300: "#EDFF66"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
