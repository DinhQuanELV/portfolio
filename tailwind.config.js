/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#f3f0eb',
        dark: '#1f2121',
        whiteText: '#eeeeee',
        blackText: '#111111',
        primaryBorder: '#cccccc',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
