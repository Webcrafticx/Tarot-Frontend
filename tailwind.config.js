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
  sans: ["Poppins", "sans-serif"],  // Default = Poppins
  serif: ["Lora", "serif"],         // For headings
}
        },
    },
    plugins: [],
};
