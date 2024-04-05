import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#424242",
        // tertiary: "#424242",
        accent: "#FF705C",
        bluegray: "#6C7E99",
        lightbluegray: "#7E92B2",
        light: "#C4C4C4",
        danger: "#FF705C",
        background: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
export default config;
