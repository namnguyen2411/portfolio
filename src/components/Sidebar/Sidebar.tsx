import { m } from 'framer-motion'

import { getThemeFromLocalStore } from 'src/utils'
import { useTheme } from 'src/hooks/useTheme'
import ClickableComponent from 'src/components/ClickableComponent'
import { NavIdType } from 'src/types/nav.type'
import clsx from 'clsx'

type SidebarProps = {
  activeNav: NavIdType
}

export default function Sidebar({ activeNav }: SidebarProps) {
  const currentTheme = getThemeFromLocalStore()
  const { theme, toggleTheme } = useTheme(currentTheme)

  const iconVariants = {
    whileInView: {
      opacity: activeNav === ('#contact' as NavIdType) ? 0 : 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="fixed bottom-[20%] right-[1%] z-10 overflow-hidden rounded-3xl">
      {/* Email */}
      <m.div
        className={clsx('bg-primary/20 p-1.5', {
          'pointer-events-none': activeNav === ('#contact' as NavIdType)
        })}
        whileInView={'whileInView'}
        variants={iconVariants}
      >
        <ClickableComponent href="mailto:phuongnam.nguyen241196@gmail.com" className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="aspect-square w-5 text-textTheme transition-all hover:text-secondary lg:w-7"
            strokeWidth={1.5}
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </ClickableComponent>
      </m.div>
      {/* Github */}
      <m.div
        className={clsx('bg-primary/20 p-1.5', {
          'pointer-events-none': activeNav === ('#contact' as NavIdType)
        })}
        whileInView={'whileInView'}
        variants={iconVariants}
      >
        <ClickableComponent
          href="https://github.com/namnguyen2411"
          target="_blank"
          rel="noreferrer"
          className="rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="aspect-square w-5 text-textTheme transition-all hover:text-secondary lg:w-7"
            strokeWidth="0.5"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </ClickableComponent>
      </m.div>
      {/* LinkedIn */}
      <m.div
        className={clsx('bg-primary/20 p-1.5', {
          'pointer-events-none': activeNav === ('#contact' as NavIdType)
        })}
        whileInView={'whileInView'}
        variants={iconVariants}
      >
        <ClickableComponent
          href="https://www.linkedin.com/in/namnguyen2411/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="aspect-square w-5 text-textTheme transition-all hover:text-secondary lg:w-7"
            strokeWidth="0.5"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
          </svg>
        </ClickableComponent>
      </m.div>
      {/* Theme button */}
      <div
        className={clsx('bg-primary/20 p-1.5 transition-all duration-500', {
          'rounded-3xl': activeNav === ('#contact' as NavIdType),
          'rounded-none': activeNav !== ('#contact' as NavIdType)
        })}
      >
        <ClickableComponent
          type="button"
          onClick={toggleTheme}
          className="flex items-center justify-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="aspect-square w-5 text-secondary lg:w-7"
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
    </div>
  )
}
