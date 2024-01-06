const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
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
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      })
    })
  ]
}
