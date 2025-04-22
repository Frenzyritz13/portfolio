/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E7EAEF',
          100: '#C3CAD6',
          200: '#9BA7BC',
          300: '#7384A1',
          400: '#556B8E',
          500: '#36527A',
          600: '#2E4B75',
          700: '#24416D',
          800: '#1A3865',
          900: '#0C2857',
        },
        beige: {
          50: '#FAF8F3',
          100: '#F4EDE1',
          200: '#EDE2C9',
          300: '#E6D7B1',
          400: '#E0CD9E',
          500: '#D9C38C',
          600: '#D5BD84',
          700: '#CFB57A',
          800: '#CAAE70',
          900: '#C0A15D',
        },
        mustard: {
          50: '#FCF9E9',
          100: '#F8F0C8',
          200: '#F3E6A3',
          300: '#EEDC7E',
          400: '#EAD463',
          500: '#E6CC47',
          600: '#E3C740',
          700: '#DFC037',
          800: '#DBB92F',
          900: '#D5AD20',
        },
        olive: {
          50: '#F3F4E9',
          100: '#E1E4C8',
          200: '#CDD3A4',
          300: '#B9C27F',
          400: '#AAB564',
          500: '#9BA849',
          600: '#93A142',
          700: '#8A9739',
          800: '#828E31',
          900: '#727D21',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};