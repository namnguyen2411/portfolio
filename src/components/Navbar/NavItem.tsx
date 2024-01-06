import clsx from 'clsx'
import { NavIdType, NavType } from 'src/types/nav.type'
import ClickableComponent from '../ClickableComponent'

type NavItemProps = {
  nav: NavType
  activeNav: NavIdType
  setActiveNav: React.Dispatch<React.SetStateAction<NavIdType>>
}

export default function ActiveNav({ nav, activeNav, setActiveNav }: NavItemProps) {
  const { id, title } = nav
  return (
    <ClickableComponent
      href={id}
      onClick={() => setActiveNav(id)}
      className={clsx('setActiveNav flex items-center gap-0.5 font-bold duration-300', {
        'text-textTheme': activeNav === nav.id,
        'text-navTextTheme hover:scale-x-105 hover:text-textTheme': activeNav !== nav.id
      })}
    >
      <span
        className={clsx('text-sm duration-300 sm:text-lg lg:text-2xl', {
          'text-transparent': activeNav !== id,
          'text-primary': activeNav === id
        })}
      >
        {'<'}
      </span>
      <span>{title}</span>
      <span
        className={clsx('text-sm duration-300 sm:text-lg lg:text-2xl', {
          'text-transparent': activeNav !== id,
          'text-primary': activeNav === id
        })}
      >
        {'/>'}
      </span>
    </ClickableComponent>
  )
}
