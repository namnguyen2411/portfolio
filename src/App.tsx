import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const MARGIN_TOP = 'mt-36'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="skills" className={`${MARGIN_TOP}`}>
        <Skills />
      </section>
      <section id="projects" className={`${MARGIN_TOP}`}>
        <Projects />
      </section>
      <section id="about" className={`${MARGIN_TOP}`}>
        <About />
      </section>
      <section id="contact" className={`${MARGIN_TOP}`}>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
