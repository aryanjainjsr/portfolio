import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/Services/Services'
import Qualifications from './components/qualifications/Qualifications'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'
import Projects from './components/projects/Projects'
const App = () => {
  
  return (
    <><main className="main">
      <Header></Header>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Qualifications/>
      <Contact/>
    </main>
      <Footer/>
      <Scrollup/>
    </>
  )
}

export default App
