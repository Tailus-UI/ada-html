/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')


module.exports = {
    content: ["./*.html", "./*.js"],
    darkMode: "media",
    safelist: ["isToggled"],
    theme: {
        extend: {
            colors: {
                'primary': {
        '50': '#eff1fe',
        '100': '#e1e7fe',
        '200': '#c9d1fc',
        '300': '#a8b3f9',
        '400': '#868cf3',
        '500': '#6a68ec',
        '600': '#5a4cdf',
        '700': '#4d3ec4',
        '800': '#3f349f',
        '900': '#37317e',
        '950': '#1e1a42',
    },
      
            },
        },

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
            palette: {
                extend : "nature"
            },
            radius: "smoothest",
            background: "light",
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
