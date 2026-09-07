/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-0': '#120a09',
        'bg-1': '#1a0f0e',
        'bg-2': '#241413',
        'card': '#20130f',
        'card-2': '#2a1815',
        'red-brand': '#e8291c',
        'red-2': '#ff5a1f',
        'orange-brand': '#ff7a1a',
        'text-brand': '#f5ede9',
        'muted-brand': '#b9a7a1',
        'muted-2': '#8c7873',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
