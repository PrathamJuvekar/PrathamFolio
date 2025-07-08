import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects';
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import './style.css'


function App() {
  return (
    <div className="app-container">
      <Header />
      {/* Sections with IDs for navigation */}
      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="workexp">
        <WorkExperience />
      </section>

      <section id="about">
        <About />
      </section>

      <Footer />
    </div>
  )
}

export default App
