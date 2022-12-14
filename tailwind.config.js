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
        "surface+1": "#1c2528",
        "surface": "#191C1D",
        "on-secondary-container": "#CFE6F1",
        "on-secondary": "#1E333C",
        "secondary-container": "#354A53",
        "secondary": "#B3CAD5",
        "on-primary-container": "#B9EAFF",
        "on-primary": "#003544",
        "primary-container": "#004D62",
        "primary": "#5FD4FD",
        "surface+1": "#1c2528",
        "surface+2": "#1e2a2e",
        "surface+3": "#203035",
        "surface+4": "#213237",
        "surface+5": "#22353c"
      },
      width:{
        "desktop": "1840px",
      },
    },
    fontSize: {
      "display-large": "3.5rem",
      "display-medium": "2.8rem",
      "display-small": "2.25rem",
      "headline-large": "2rem",
      "headline-medium": "1.75rem",
      "headline-small": "1.5rem",
      "title-large": "1.375rem",
      "title-medium": "1rem",
      "title-small": "0.875rem",
      "label-large": "0.875rem",
      "label-medium": "0.75rem",
      "label-small": "0.6875rem",
      "body-large": "1rem",
      "body-medium": "0.875rem",
      "body-small": "0.75rem",
    },
    lineHeight: {
      "display-large": "4rem",
      "display-medium": "3.25rem",
      "display-small": "2.75rem",
      "headline-large": "2.5rem",
      "headline-medium": "2.25rem",
      "headline-small": "2rem",
      "title-large": "1.75rem",
      "title-medium": "1.5rem",
      "title-small": "1.25rem",
      "label-large": "1.25rem",
      "label-medium": "1rem",
      "label-small": "1rem",
      "body-large": "1.5rem",
      "body-medium": "1.25rem",
      "body-small": "1.rem",
    },
    letterSpacing: {
      "display-large": "-0.0156rem",
      "display-medium": "",
      "display-small": "",
      "headline-large": "",
      "headline-medium": "",
      "headline-small": "",
      "title-large": "",
      "title-medium": "0.0094rem",
      "title-small": "0.0063rem",
      "label-large": "0.0063rem",
      "label-medium": "0.0313rem",
      "label-small": "0.0313rem",
      "body-large": "0.0313rem",
      "body-medium": "0.0156rem",
      "body-small": "0.025rem",
    },
    
    screens: {
      'desktop': {'min': '1920px'},
      // => @media (max-width: 1279px) { ... }

      'laptop': {'max': '1440px'},
      // => @media (max-width: 1023px) { ... }

      'tablet': {'max': '1024px'},
      // => @media (max-width: 767px) { ... }

      'phone-landscape': {'max': '768px'},
      'phone-portrait': {'max': '425px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}