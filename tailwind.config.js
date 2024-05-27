/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

