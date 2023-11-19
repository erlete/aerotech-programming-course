/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,handlebars}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
}
