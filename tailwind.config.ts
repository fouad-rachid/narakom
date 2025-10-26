import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xsm:"500px",
        sm:"600px",
        md:"690px",
        lg:"988px",
        xl:"1078px",
        xxl:"1265px",
      },
      colors: {
       textGray:"#71767b",
       textGrayLight:"#e7e9ea",
       borderGray:"#2f3336",
       inputGray:"#202327",
       iconeBlue:"#1d9bf0",
       iconeGreen:"#00ba7c",
       iconeOrange:"#f91e",
       iconePink:"#f91880",
      },
    },
  },
  plugins: [],
} satisfies Config;
