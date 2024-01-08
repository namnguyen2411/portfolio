import { shopeeClone, project2, hangman } from 'src/assets/images'

const projectList = [
  {
    id: 1,
    imgUrl: shopeeClone,
    title: 'Shopee Clone',
    libraries: [
      'Vite',
      'React',
      'Typescript',
      'Axios',
      'React Query',
      'React Router',
      'React Hook Form',
      'Zod',
      'Framer Motion',
      'clsx',
      'Tailwindcss'
    ],
    liveDemo: 'https://www.google.com.vn/',
    github: 'https://github.com/',
    summary: 'Introduce your project'
  },
  {
    id: 2,
    imgUrl: project2,
    title: 'Online Bookstore',
    libraries: ['Vite', 'React', 'Typescript', 'Axios', 'Redux Toolkit', 'React Router', 'Ant Design', 'clsx'],
    liveDemo: 'https://www.google.com.vn/',
    github: 'https://github.com/',
    summary: 'Introduce your project'
  },
  {
    id: 3,
    imgUrl: hangman,
    title: 'Learning English with Hangman',
    libraries: [
      'Vite',
      'React',
      'Typescript',
      'Axios',
      'React Query',
      'React Router',
      'React Hook Form',
      'Zod',
      'clsx',
      'Tailwindcss'
    ],
    liveDemo: 'https://www.google.com.vn/',
    github: 'https://github.com/',
    summary: 'Introduce your project'
  }
]

export default projectList
