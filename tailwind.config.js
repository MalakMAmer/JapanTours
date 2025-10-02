/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Bellefair', 'serif'],
      },
    },
  },
  plugins: [],
}
