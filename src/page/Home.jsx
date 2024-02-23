import React from 'react'
import Header from '../component/Header'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ContactForm from './ContactForm'
import Projects from './Projects'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection id="home" />
        <AboutMe id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <ContactForm id="contact" />
    </div>
  )
}

export default Home