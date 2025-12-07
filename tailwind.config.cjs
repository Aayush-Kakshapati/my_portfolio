module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // we use class-based theming
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f9ff",
          500: "#2563eb", // blue for CTAs
        },
      },
    },
  },
  plugins: [],
};
