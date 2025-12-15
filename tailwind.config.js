/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pop-yellow': '#FACC15',
                'pop-pink': '#EC4899',
                'pop-cyan': '#06B6D4',
            },
            fontFamily: {
                'pop': ['"Jua"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
