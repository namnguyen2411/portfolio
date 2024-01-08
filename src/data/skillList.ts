import {
  html,
  css,
  javascript,
  react,
  typescript,
  tailwindcss,
  redux,
  nodejs,
  expressjs,
  mongodb,
  reactquery
} from 'src/assets/images'

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
    name: 'Redux',
    image: redux
  },
  {
    name: 'React Query',
    image: reactquery
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
