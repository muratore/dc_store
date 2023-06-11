/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'digital-pink': '#C92071',
        'digital-cinza': '#474747'
      },
    },
  },
  plugins: [],
}