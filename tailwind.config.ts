import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'DarkGray': '#1D1D1D',
        'Golden': '#D9B570',
        'Brown': '#CC6908',
        'WhiteBoard': '#E7E7E7',
      },
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [],
};
export default config;
