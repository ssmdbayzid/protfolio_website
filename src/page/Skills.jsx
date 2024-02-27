import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className=" my-20 max-w-[1170px] mx-auto px-10 md:px-0">

<h3 className=" md:before:content-['My-Skills'] before:absolute before:-top-2 before:left-[30%]  md:before:left-[38%] before:text-[60px]   before:font-extrabold before:text-[#5c6066]/20 before:-z-10  font-bold  text-5xl hover:bg-transparent text-white/70 text-center relative">
          <span className='text-primary'>My</span> Skills</h3>
        
        
    <div className="flex md:flex-row gap-5 lg:gap-10 flex-col mt-10 lg:px-0">
    <div class="w-full bg-gray-100/5 px-4 rounded-2xl">
    <h1 class="text-primary text-2xl font-bold py-5">JavaScript</h1>
    <div class="skillbar  advanced" data-skill="JavaScript"></div>
    <div class="skillbar  advanced" data-skill="TypeScript"></div>
    <div class="skillbar  advanced" data-skill="Next Js"></div>
    <div class="skillbar  expert" data-skill="React"></div>
    <div class="skillbar  advanced" data-skill="Redux"></div>    
  </div>
    <div class="w-full bg-gray-100/5 px-4 rounded-2xl">
    <h1 class="text-primary text-2xl font-bold py-5">HTML & CSS</h1>
    <div class="skillbar  expert" data-skill="HTML"></div>
    <div class="skillbar  expert" data-skill="CSS"></div>
    <div class="skillbar  advanced" data-skill="Bootstrap"></div>
    <div class="skillbar  expert" data-skill="Tailwind"></div>
    <div class="skillbar  advanced" data-skill="Figma"></div>    
  </div>
    <div class="w-full bg-gray-100/5 px-4 rounded-2xl">
    <h1 class="text-primary text-2xl font-bold py-5">Node</h1>
    <div class="skillbar  advanced" data-skill="Node Js"></div>
    <div class="skillbar  advanced" data-skill="Express Js"></div>
    <div class="skillbar  advanced" data-skill="MongoDB"></div>
    <div class="skillbar  expert" data-skill="Json Web Token"></div>
    <div class="skillbar  expert" data-skill="Firebase"></div>    
  </div>
  </div>
  </div>
  )
}

export default Skills