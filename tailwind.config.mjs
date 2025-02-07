/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ["Neue Machine", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        "primary-1": "#151515",
        "primary-2": "#838089",
        "primary-3": "#EBE7E7",
        "primary-4": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
