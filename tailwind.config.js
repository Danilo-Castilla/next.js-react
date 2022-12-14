/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
    plugins: [
      require('@tailwindcss/forms'),
    ],
};
