import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#F7F5F0',
          100: '#E8DCC6',
          200: '#C4B59A',
          300: '#B8A082',
          400: '#A67C52',
          500: '#947A47',
          600: '#7A653C',
          700: '#5F5038',
          800: '#453B2A',
          900: '#2A221C',
        },
        neutral: {
          50: '#FEFDFB',
          100: '#F9F7F4',
          200: '#E8E6E1',
          300: '#D1CFC7',
          400: '#A8A69E',
          500: '#7C7A72',
          600: '#4A4843',
          700: '#3C3A36',
          800: '#262420',
          900: '#1A1816',
        },
      },
      boxShadow: {
        'warm-xs': '0 1px 2px rgba(26, 24, 22, 0.05)',
        'warm-sm': '0 1px 3px rgba(26, 24, 22, 0.12)',
        'warm-md': '0 4px 6px rgba(26, 24, 22, 0.15)',
        'warm-lg': '0 10px 15px rgba(26, 24, 22, 0.1)',
        'warm-xl': '0 20px 25px rgba(26, 24, 22, 0.1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite'
      }
    },
  },
  plugins: [],
};
export default config;