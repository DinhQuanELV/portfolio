/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#f3f3f3",
        "bg-dark": "#222222",
        "text-light": "#eeeeee",
        "text-dark": "#111111",
        "border-light": "#cccccc",
        "border-dark": "#cccccc",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
