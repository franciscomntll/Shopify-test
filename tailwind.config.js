/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/customers/*.liquid",
    "./templates/*.liquid",
  ],
  theme: {
    fontFamily: {
      sans: ["Proxima Nova", "ui-sans-serif", "system-ui"],
      body: ["Proxima Nova", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#7AA65A",
        secondary: "#FFFFFF",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(180px, 1fr))"
      }
    },
    },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [],
};
