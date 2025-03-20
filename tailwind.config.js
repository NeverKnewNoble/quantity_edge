/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flyonui/dist/js/*.js",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0055ff', 
          secondary: '#ff667d',
          accent: '#edf7ff',
          danger: '#e71746'
        },
      },
    },
    plugins: [
        require("flyonui"),
        require("flyonui/plugin")
    ],
}
