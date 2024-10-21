/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yellowtail: ["Yellowtail", "cursive"],
      },
      container: {
        center: true,
        screens: {
          lg: "1600px",
        },
      },
      colors: {
        grayGreen: "#274C5B",
        green: "#7EB693",
        yellow: "#EFD372",
        gray: "#D4D4D4",
        whiteGray: "#F9F8F8",
        opGreen: "#EFF6F1",
        opBlack: "#525C60",
        title: "#274c5b",
        ptext: "#525c60",
        SearhBG: "#fafafa",
      },
      fontSize: {
        h1: "70px",
        h2: "50px",
        h3: "40px",
        h4: "35px",
        h5: "30px",
        h6: "25px",
        p: "18px",
      },
      fontWeight: {
        h: "800",
        p: "400",
      },
    },
    lineHeight: {
      p: "165%",
    },
  },
  plugins: [],
};
