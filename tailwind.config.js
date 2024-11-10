/** @type {import('tailwindcss').Config} */

module.exports = {
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
        whitetext: "#FFFFFF",
        primary: "#00DC82",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      fontSize: {
        h0: "180px",
        h1: "40px",
        h2: "32px",
        h3: "27px",
        h4: "21px",
        b1: "18px",
        b2: "16px",
        cta: "18px",
      },
    },
  },
  plugins: [],
};
