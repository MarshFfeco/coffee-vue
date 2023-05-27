/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'cof-pink': '#FF0055'
      }
    },
  },
  plugins: [],
}

