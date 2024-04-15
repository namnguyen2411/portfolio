import { html, css, javascript, react, typescript, tailwindcss, nodejs, expressjs, mongodb } from 'src/assets/images'

const skillList = [
  {
    name: 'HTML',
    image: html
  },
  {
    name: 'CSS',
    image: css
  },
  {
    name: 'JavaScript',
    image: javascript
  },
  {
    name: 'React',
    image: react
  },
  {
    name: 'TailwindCSS',
    image: tailwindcss
  },
  {
    name: 'TypeScript',
    image: typescript
  },
  {
    name: 'Node.js',
    image: nodejs
  },
  {
    name: 'Express',
    image: expressjs
  },
  {
    name: 'MongoDB',
    image: mongodb
  }
] as const

export default skillList
