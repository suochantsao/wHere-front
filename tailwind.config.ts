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
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite'
      }
    },
  },
  plugins: [],
};
export default config;