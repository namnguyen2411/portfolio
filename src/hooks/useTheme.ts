import { useState } from 'react'
import { type Theme } from 'src/utils/getThemeFromLocalStore'

export const useTheme = (initialTheme: Theme) => {
  const [theme, setTheme] = useState(initialTheme)

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        return 'dark'
      }
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      return 'light'
    })
  }
  return { theme, toggleTheme }
}
