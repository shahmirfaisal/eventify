/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"]
      },

      colors: {
        primary: "#49111C",
        secondary: "#F2F4F3"
      },

      container: {
        center: true
      }
    }
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#49111C",
          secondary: "#F2F4F3"
        }
      }
    ]
  }
}
