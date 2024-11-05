/** @type {import('tailwindcss').Config} */
// import themer from "@tailus/themer"; // if i delete this i got an error
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.html", "./*.js"],
    darkMode: "media",
    safelist: ["isToggled"],
    theme: {
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

        // if i delete this i got an error
        // themer({
        //     palette: {
        //         extend : "nature"
        //     },
        //     radius: "smoothest",
        //     background: "light",
        //     border: "light",
        //     padding:"large",
        //     components: {
        //         button: {
        //             rounded : "2xl"
        //         }
        //     }
        // })
    ],
};
