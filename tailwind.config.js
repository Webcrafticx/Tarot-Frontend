/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                beige: "#E1D9CB",
                offwhite: "#F5F3EF",
                brown: "#824E1A",
                grayish: "#66626A",
                slate: "#77778C",
                darkbrown: "#302513",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"], // Global default
                serif: ["Lora", "serif"],
                dosis: ["Dosis", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                grotesk: ["Space Grotesk", "sans-serif"],
                worksans: ["Work Sans", "sans-serif"],
                devnagri: ["Noto Sans Devanagari", "sans-serif"],
            },
        },
    },
    plugins: [],
};
