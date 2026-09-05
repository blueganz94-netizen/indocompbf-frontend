import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        heading: ['var(--font-rajdhani)', 'Arial Narrow', 'sans-serif'],
        body: ['var(--font-outfit)', 'Arial', 'sans-serif'],
      },
      colors: {
        'bg-base': '#030303',
        'bg-card': 'rgba(10,10,10,0.88)',
        'border-subtle': 'rgba(255,255,255,0.05)',
        'border-default': 'rgba(255,255,255,0.08)',
        'border-hover': 'rgba(255,255,255,0.18)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(255,255,255,0.06)',
        'glow-md': '0 0 40px rgba(255,255,255,0.10)',
        'glow-lg': '0 0 80px rgba(255,255,255,0.14)',
        'glow-xl': '0 0 120px rgba(255,255,255,0.18)',
      },
      backdropBlur: {
        'glass': '28px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}

export default config
