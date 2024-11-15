// To change the pallete tone, access: https://palette.tone-row.com/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        foreground: '#0c0f11',
        neutral: {
          50: '#fafafa',
          100: '#f4f5f5',
          200: '#e5e6e7',
          300: '#d3d4d5',
          400: '#a1a3a4',
          500: '#717374',
          600: '#515455',
          700: '#3e4142',
          800: '#25282a',
          900: '#16191b',
        },
        accent: {
          DEFAULT: '#2196f3',
          50: '#f2f8ff',
          100: '#e0eefd',
          200: '#b9dffe',
          300: '#80c9ff',
          400: '#42b0ff',
          500: '#2196f3',
          600: '#2778cf',
          700: '#2461a6',
          800: '#215489',
          900: '#204771',
        },
      },
    },
  },
  plugins: [],
};
