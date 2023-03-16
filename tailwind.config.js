/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage : {
        "banner" : "url(./components/bannerImg.jpg)"
      }
    },
  },
  plugins: [],
}
