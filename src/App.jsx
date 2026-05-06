import React from 'react'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certification from './sections/Certification'
import Contact from './sections/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Certification/>
    <Contact/>
    <Footer/>
    </>
  )
}
