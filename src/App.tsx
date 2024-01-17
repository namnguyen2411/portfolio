import { useEffect, useRef, useState } from 'react'
import { m, LazyMotion, domMax, useInView } from 'framer-motion'

import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { NavIdType } from './types/nav.type'
import navList from './data/navList'
import Sidebar from './components/Sidebar'

const MARGIN_TOP = 'mt-36'
const inViewOptions = { amount: 0.4 }

function App() {
  const [activeNav, setActiveNav] = useState<NavIdType>(navList[0].id)

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const homeInView = useInView(homeRef, inViewOptions)
  const aboutInView = useInView(aboutRef, inViewOptions)
  const projectsInView = useInView(projectsRef, inViewOptions)
  const contactInView = useInView(contactRef, inViewOptions)

  useEffect(() => {
    if (homeInView) {
      setActiveNav('#home')
    } else if (projectsInView) {
      setActiveNav('#projects')
    } else if (aboutInView) {
      setActiveNav('#about')
    } else if (contactInView) {
      setActiveNav('#contact')
    }
  }, [homeInView, aboutInView, projectsInView, contactInView])

  return (
    <LazyMotion features={domMax}>
      <div className="App">
        <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
        <Sidebar activeNav={activeNav} />
        <m.section id="home" ref={homeRef}>
          <Home />
        </m.section>
        <m.section id="about" ref={aboutRef} className={`${MARGIN_TOP}`}>
          <About />
        </m.section>
        <m.section id="projects" ref={projectsRef} className="mt-48">
          <Projects />
        </m.section>
        <m.section id="contact" ref={contactRef} className={`${MARGIN_TOP}`}>
          <Contact />
        </m.section>
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
