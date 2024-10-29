/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        bkg: 'rgb(var(--color-bkg))',
        accent: 'rgb(var(--color-accent))',
        background:'rgb(var(--color-background))',
        text:'rgb(var(--color-text))',
        black:'rgb(var(--color-black))',
        primary:'rgb(var(--color-primary))',
        modal:'rgba(var(--color-black),0.7)'
      }
    },
  },
  plugins: [],
}