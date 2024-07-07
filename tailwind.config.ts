import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mainBg: "linear-gradient(to right bottom, #111827, #111827, #09092E)",
      },
      colors: {
        primary: {
          100: "#faf3d5",
          200: "#f6e6ab",
          300: "#f1da82",
          400: "#edcd58",
          500: "#e8c12e",
          600: "#ba9a25",
          700: "#8b741c",
          800: "#5d4d12",
          900: "#2e2709",
        },
        // secondary: "#FDA00D",
        secondary: "#F3AB1D",
      },
    },
  },
  plugins: [],
};
export default config;
