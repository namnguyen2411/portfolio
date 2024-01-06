export type Theme = 'light' | 'dark'

export const getThemeFromLocalStore = (): Theme => {
  if (
    localStorage.theme !== 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    localStorage.theme = 'light'
    return 'light'
  } else {
    document.documentElement.classList.add('dark')
    return 'dark'
  }
}
