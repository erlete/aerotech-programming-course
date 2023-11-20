/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,handlebars}"],
    theme: {
        extend: {
            colors: {
                "primary": {
                    100: "#fcefd4",
                    200: "#f8dfa9",
                    300: "#f5d07d",
                    400: "#f1c052",
                    500: "#eeb027",
                    600: "#be8d1f",
                    700: "#8f6a17",
                    800: "#5f4610",
                    900: "#302308"
                },
                "secondary": {
                    50: "#eef2ff",
                    100: "#e0e7ff",
                    200: "#c7d2fe",
                    300: "#a5b4fc",
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca",
                    800: "#3730a3",
                    900: "#312e81",
                    950: "#1e1b4b"
                },
                "title": "#000000",
                "subtitle": "#404955",
                "text": "#4b5563"
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
}
