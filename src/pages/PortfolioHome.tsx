import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function PortfolioHome() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
