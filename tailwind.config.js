/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'donkey-brown': {
          '50': '#f5f4f1',
          '100': '#e7e2da',
          '200': '#d0c5b8',
          '300': '#ab9680',
          '400': '#9f8770',
          '500': '#917561',
          '600': '#7c6052',
          '700': '#644c44',
          '800': '#56423d',
          '900': '#4b3b38',
          '950': '#2a1f1e',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
