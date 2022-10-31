// tailwind.config.js
require("dotenv").config();
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      None: "100%",
      sm: process.env.VITE_SCREEN_SM + "px",
      md: process.env.VITE_SCREEN_MD + "px",
      xl: process.env.VITE_SCREEN_XL + "px",
    },
    container: {
      padding: {
        DEFAULT: "12px",
        sm: "12px",
        md: "45px",
        xl: "100px",
      },
    },
    borderRadius: {
      "3px": "3px",
      none: "0",
      sm: "0.125rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      textUnderlineOffset: {
        5: "5px",
      },
      colors: {
        white: "#FFFFFF",
        "red-dark": "#C52020",
        red: "#EB3737",
        blue: "#0066B3",
        dark: "#4C5A79",
        "middle-dark": "#9DB0BF",
        "middle-light": "#CDD5E2",
        light: "#E2E8F3",
        "super-light": "#F0F4FC",
        // ...
      },
      padding: {
        "30px": "30px",
        "25px": "25px",
        "20px": "20px",
        "15px": "15px",
        "12px": "12px",
        "3px": "3px",
      },
      fontSize: {
        DEFAULT: {
          h1: ["35px", "40px"],
          h5: ["14px", "22px"],
          text: ["18px", "28px"],
          "text-bold": ["18px", "28px"],
          caption: ["13px", "18px"],
          "caption-small": ["13px", "16px"],
        },
        md: {
          h1: ["42px", "50px"],
          h5: ["18px", "25px"],
          text: ["15px", "24px"],
          "text-bold": ["15px", "24px"],
          caption: ["15px", "19px"],
        },
      },
      margin: {
        "60px": "60px",
        "45px": "45px",
        "30px": "30px",
        "17px": "17px",
        "15px": "15px",
        "-1px": "-1px",
      },
      gap: {
        "30px": "30px",
        "15px": "15px",
        "12px": "12px",
        "10px": "10px",
      },
      boxShadow: {
        "pagination-pressed": "inset 0px 3px 4px rgba(0, 0, 0, 0.2)",
        "input-active": "inset 0px 2px 2px rgba(0, 0, 0, 0.12)",
        "input-focus": "inset 0px 2px 2px rgba(0, 0, 0, 0.12)",
        "card-active": "inset 0px 5px 10px rgba(0, 0, 0, 0.4)",
        "sort-list-mobile": "0px 4px 14px rgb(0 0 0 / 12%)",
      },
      height: {
        "400px": "400px",
        "300px": "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
