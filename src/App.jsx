import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Products from './components/sections/Products'
import WhyUs from './components/sections/WhyUs'
import Coverage from './components/sections/Coverage'
import Gallery from './components/sections/Gallery'
import Partners from './components/sections/Partners'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <Coverage />
      <Gallery />
      <Partners />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

