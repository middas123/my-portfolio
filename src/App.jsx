// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/header/Header'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Services from './Components/services/Services'
import Certificates from './Components/certificates/Certificates'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/footer';
import Carousel from './Components/carousel/carousel';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Services />
      <Certificates />
      <Contact />
      <Footer />
      <Carousel />

    </div>
  )
}

export default App
