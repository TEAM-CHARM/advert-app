/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: {
          main: "#00b9be",
          dark: "#0f8689",
          light: "#18d1d6",
        },
        secondary: {
          main: "red",
          light: "#00B9BE",
          dark: "",
        },
        background: {
          main: "#E3E3E3",
          light: "#F2F1ED",
          dark: "",
        },
      },
    },
  },
  plugins: [],
};
