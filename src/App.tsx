import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
