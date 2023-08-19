/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["roboto condensed","roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
