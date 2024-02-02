/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#2b2d42",
                mid: "#8d99ae",
                light: "#edf2f4",
                beige: "#ebebd3ff",
                platinum: "#e1e0e0ff",
                // smoke: "#0e0a06ff",
                yale: "#083d77ff",
                // dimGray: "#736b60ff",
            },
            fontFamily: {
                boxy: ["Exo", "sans-serif"],
                long: ["Titillium Web", "sans-serif"],
                fun: ["Bangers", "sans-serif"],

            }
        },
    },
    plugins: [],
};
