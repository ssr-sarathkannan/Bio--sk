import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import ClientValue from './components/ClientValue'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-bg text-text">
      <AmbientBackground />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <ClientValue />
        <Projects />
        <Contact />
      </main>
      <div className="relative z-10"><Footer /></div>
    </div>
  )
}
