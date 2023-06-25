/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: { 400: "hsla(216, 100%, 44%, 1)", 300: "hsla(216, 100%, 50%, 1)" },
        text: { 400: "hsla(0, 0%, 8%, 1)" },
        gray: { 100: "hsla(210, 55%, 98%, 1)" },
      },
    },
  },
  plugins: [],
};
