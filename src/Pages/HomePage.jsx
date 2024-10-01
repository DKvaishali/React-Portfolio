import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import About from '../Components/About'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'
import Projects from '../Components/Projects'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Home/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        
    </div>
  )
}

export default HomePage