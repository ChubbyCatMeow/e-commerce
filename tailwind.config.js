/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef5f8',
          100: '#fdeaf2',
          200: '#fbd5e5',
          300: '#f8b1d0',
          400: '#f380b0',
          500: '#e94d8a',
          600: '#d6316b',
          700: '#b9204f',
          800: '#991d42',
          900: '#801c3a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
