/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF006E',
          blue: '#00D4FF',
          purple: '#8338EC',
          yellow: '#FFBE0B',
        },
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FF006E, 0 0 10px #FF006E' },
          '100%': { boxShadow: '0 0 20px #FF006E, 0 0 30px #FF006E' },
        }
      }
    },
  },
  plugins: [],
}
