import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Mission from './sections/Mission.jsx'
import Trust from './sections/Trust.jsx'
import Services from './sections/Services.jsx'
import Tariffs from './sections/Tariffs.jsx'
import BusinessPlan from './sections/BusinessPlan.jsx'
import Process from './sections/Process.jsx'
import ForWhom from './sections/ForWhom.jsx'
import Education from './sections/Education.jsx'
import Why from './sections/Why.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import FloatingButtons from './sections/FloatingButtons.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <Trust />
        <Services />
        <Tariffs />
        <BusinessPlan />
        <Process />
        <ForWhom />
        <Education />
        <Why />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
