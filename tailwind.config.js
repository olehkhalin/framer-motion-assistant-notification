/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1A1F32",
        light: "#F7F8FA",
        gray: {
          DEFAULT: "#74757E",
          150: "#838592",
          100: "#A9ACB6",
          50: "#C6C8D6",
        },
        accent: {
          red: {
            DEFAULT: "#FF453A",
            bg: "#FFE4E8",
            hover: "#FFD1D2",
            text: "#C36061",
            border: "#E5BAC0",
          },
          green: "#39DB57",
        }
      }
    },
  },
  plugins: [],
}

