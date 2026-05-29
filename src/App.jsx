import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Beneficios from './components/Beneficios'
import Depoimentos from './components/Depoimentos'
import Faq from './components/Faq'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Sobre />
      <Servicos />
      <Beneficios />
      <Depoimentos />
      <Faq />
      <CtaFinal />
      <Footer />
    </div>
  )
}
