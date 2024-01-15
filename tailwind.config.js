const plugin = require('tailwindcss/plugin')
/** @type {import('tailw'indcss).Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: 'class',
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'Open Sans', 'sans-serif']
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        bgTheme: 'rgb(var(--color-background) / <alpha-value>)',
        textTheme: 'rgb(var(--color-text) / <alpha-value>)',
        navBgTheme: 'rgb(var(--color-nav-background) / <alpha-value>)',
        navTextTheme: 'rgb(var(--color-nav-text) / <alpha-value>)'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        wave: 'wave 2s linear infinite'
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        }
      },
      boxShadow: {
        neumorphism: '-6px -6px 10px #fff, 6px 6px 10px rgba(174, 174, 192, .4)',
        'neumorphism-dark': '6px 6px 10px rgb(36, 38, 44), -6px -6px 10px rgb(48, 52, 58)',
        'input-neumorphism': 'inset 6px 6px 10px rgba(174, 174, 192, .4), inset -6px -6px 10px #fff',
        'input-neumorphism-dark': 'inset 6px 6px 10px rgba(36, 38, 44, .4), inset -6px -6px 10px rgb(48, 52, 58)'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '8px',
          paddingRight: '8px'
        }
      })
    })
  ]
}
