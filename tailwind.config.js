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
        lightBorder: '#e5e5e5',
        darkBorder: '#2e2e32',
        btnHover: '#0085FF',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
