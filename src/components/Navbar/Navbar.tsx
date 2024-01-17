import navList from 'src/data/navList'
import { NavIdType } from 'src/types/nav.type'
import NavItem from './NavItem'

type NavbarProps = {
  activeNav: NavIdType
  setActiveNav: React.Dispatch<React.SetStateAction<NavIdType>>
}

export default function Navbar({ activeNav, setActiveNav }: NavbarProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 z-20 w-[95%] max-w-[620px] -translate-x-1/2 rounded-xl bg-navBgTheme py-2 shadow-md shadow-neutral-500">
      <div className="flex h-full items-center justify-evenly">
        {navList.map((nav) => (
          <NavItem key={nav.title} nav={nav} activeNav={activeNav} setActiveNav={setActiveNav} />
        ))}
      </div>
    </nav>
  )
}
