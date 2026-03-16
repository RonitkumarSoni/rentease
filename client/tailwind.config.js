/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2874f0", // Flipkart Blue
          dark: "#1c56b3",
        },
        secondary: "#fb641b", // Flipkart Orange
      },
    },
  },
  plugins: [],
}
