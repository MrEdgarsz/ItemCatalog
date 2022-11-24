/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-error-container": "#FFDAD6",
        "on-error": "#690005",
        "error-container": "#93000A",
        "on-tertiary-container": "#E1DFFF",
        "on-tertiary": "#2D2D4D",
        "tertiary-container": "#434465",
        "tertiary": "#C4C3EB",
        "error": "#FFB4AB",
        "outline": "#8A9296",
        "on-background": "#E1E3E4",
        "background": "#191C1D",
        "on-surface-variant": "#C0C8CC",
        "on-surface": "#E1E3E4",
        "surface-variant": "#40484C",
        "surface": "#191C1D",
        "on-secondary-container": "#CFE6F1",
        "on-secondary": "#1E333C",
        "secondary-container": "#354A53",
        "secondary": "#B3CAD5",
        "on-primary-container": "#B9EAFF",
        "on-primary": "#003544",
        "primary-container": "#004D62",
        "primary": "#5FD4FD",
      },
    },
  },
  plugins: [],
}