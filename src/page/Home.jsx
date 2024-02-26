import React from 'react'
import Header from '../component/Header'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ContactForm from './ContactForm'
import Projects from './Projects'

const Home = () => {
  return (
    <div className=''>        
        <HeroSection />
        <AboutMe  />
        <Skills  />
        <Projects/>
        <ContactForm />
    </div>
  )
}

export default Home