const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#66CDAA',
        inviteBg: '#7C84C6',
        inviteBgLite: '#8F78D1'
      }
    },
  },
  plugins: [],
})