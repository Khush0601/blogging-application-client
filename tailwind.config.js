/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
        screens: {
          'xs': '480px', // Extra small devices
          'sm': '640px', // Small devices
          'md': '768px', // Medium devices
          'lg': '1024px', // Large devices
          'xl': '1280px', // Extra large devices
          '2xl': '1536px', // Custom extra large
        },
    },
  },
  plugins: [],
}

