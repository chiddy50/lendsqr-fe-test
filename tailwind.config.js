/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      screens: {
        xs: '220px',
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px',
      },
      colors: {
        'light-green': '#39CDCC',
        'dark-blue': '#213F7D'
      },
    },
    
  },
  plugins: [],
}

