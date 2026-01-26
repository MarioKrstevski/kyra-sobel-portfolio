import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkSection from './components/WorkSection'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WorkSection />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
