import { getThemeFromLocalStore } from 'src/utils'
import { useTheme } from 'src/hooks/useTheme'
import navList from 'src/data/navList'
import { NavIdType } from 'src/types/nav.type'
import ClickableComponent from 'src/components/ClickableComponent'
import NavItem from './NavItem'

type NavbarProps = {
  activeNav: NavIdType
  setActiveNav: React.Dispatch<React.SetStateAction<NavIdType>>
}

export default function Navbar({ activeNav, setActiveNav }: NavbarProps) {
  const currentTheme = getThemeFromLocalStore()
  const { theme, toggleTheme } = useTheme(currentTheme)

  return (
    <nav className="fixed bottom-10 left-1/2 z-20 h-[50px] w-[95%] max-w-2xl -translate-x-1/2 rounded-xl bg-navBgTheme shadow-md shadow-neutral-500">
      <div className="flex h-full items-center justify-evenly">
        {navList.map((nav) => (
          <NavItem key={nav.title} nav={nav} activeNav={activeNav} setActiveNav={setActiveNav} />
        ))}
        <ClickableComponent
          type="button"
          onClick={toggleTheme}
          className="grid aspect-square h-8 cursor-pointer place-items-center border-none outline-none sm:h-10 lg:h-11"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="aspect-square w-5 text-secondary lg:w-6"
          >
            {theme === 'light' ? (
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            ) : (
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </ClickableComponent>
      </div>
    </nav>
  )
}
