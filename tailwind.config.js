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
        "gradient-gray-linear": "var(--gradient-gray-linear)",
      },
      colors: {
        primary: {
          20: "var(--clr-primary-20)",
          100: "var(--clr-primary-100)",
          200: "var(--clr-primary-200)",
          300: "var(--clr-primary-300)",
          400: "var(--clr-primary-400)",
        },
        text: { 400: "hsla(0, 0%, 8%, 1)" },
        gray: { 100: "hsla(210, 55%, 98%, 1)" },
        accent: "#1E3448",
      },
    },
  },
  plugins: [],
};
