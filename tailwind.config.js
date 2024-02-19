/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.html", "./*.js"],
    darkMode: "media",
    safelist: ["isToggled"],
    theme: {
        colors: ({ colors }) => ({
            primary: colors.blue,
            secondary: colors.lime,
            accent: colors.pink,
            success: colors.lime,
            danger: colors.red,
            warning: colors.yellow,
            info: colors.blue,
            gray: colors.zinc,
            white: colors.white,
            black: colors.black,
            transparent: colors.transparent,
      }),
      fontFamily: {
        sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
        mono : ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
      },
        keyframes: {
            loop: {
                to: {
                    "offset-distance": "100%",
                },
            },
        },
        
    },
    plugins: [
        themer({
            radius: "smoothest",
            background: "lighter",
            border: "light",
            padding:"large",
            components: {
                button: {
                    rounded : "2xl"
                }
            }
        })
    ],
};
