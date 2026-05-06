import React from 'react'
import About from './sections/About'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Certifications/>
    <Contact/>
    <Footer/>
    </>
  )
}
