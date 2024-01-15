import { useEffect, useRef, useState } from 'react'
import { m, LazyMotion, domAnimation, useInView } from 'framer-motion'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { NavIdType } from './types/nav.type'
import navList from './data/navList'

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
    } else if (aboutInView) {
      setActiveNav('#about')
    } else if (projectsInView) {
      setActiveNav('#projects')
    } else if (contactInView) {
      setActiveNav('#contact')
    }
  }, [homeInView, aboutInView, projectsInView, contactInView])

  return (
    <div className="App">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <LazyMotion features={domAnimation}>
        <m.section id="home" ref={homeRef}>
          <Home />
        </m.section>
        <m.section id="about" ref={aboutRef} className={`${MARGIN_TOP}`}>
          <About />
        </m.section>
        <m.section id="projects" ref={projectsRef} className="mt-52">
          <Projects />
        </m.section>
        <m.section id="contact" ref={contactRef} className={`${MARGIN_TOP}`}>
          <Contact />
        </m.section>
      </LazyMotion>
      <Footer />
    </div>
  )
}

export default App
