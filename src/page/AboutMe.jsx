import React from 'react';

import style from './AboutMe.module.css'

const AboutMe = () => {
  return (<>
    <div id='about' className=" relative max-w-[1170px] w-full mx-auto flex items-center flex-col md:gap-7 md:flex-row-reverse justify-between mt-52 px-5 md:px-8 lg:px-0 ">
      <div className="relative w-full md:w-3/5 mb-10 md:mb-0 md:pl-10 ">
        <h3 className="md:before:content-['about-me'] before:absolute before:-top-2 before:left-[28%]  md:before:left-4 before:text-[60px]   before:font-extrabold before:text-[#22252a] before:-z-10 text-center md:text-start font-bold  text-5xl ps-3 md:ps-0 hover:bg-transparent text-white/70">
          <span className='text-primary'>About</span> Me
        </h3>

       <div className='mb-10'>
        <p className='text_para text-2xl text-primary'>Greeting</p>
        <p className='text_para text-justify'>I'm <span className='text-primary'>S S Md. Bayzid</span> , a dedicated <span className='text-primary'>Web Developer</span> with expertise in Front-end technologies such as <span className='text-primary'>HTML5, CSS3, JavaScript, TypeScript, React, Tailwind.CSS etc. </span>  My proficiency extends to <span>Backend</span> technologies like <span className='text-primary'>Node JS, Express JS, MongoDB, and Firebase etc</span> </p>
        <p className='text_para text-justify'>
        Driven by a blend of creativity and logical thinking, I specialize in crafting tailored websites for <span>individuals</span>  and  <span>small businesses</span> . Engaging in occasional <span>freelance</span>  opportunities, my primary goal is client satisfaction. I thrive on understanding their unique vision, guiding them through every phase of the project, and providing unwavering support.
        </p>

        <p className='text_para text-justify'>Explore my <span className='text-primary'>portfolio</span>  below, and if you believe I align with your needs, feel free to reach out via <span className='text-primary'>email</span> & whatsApp number : <span className='text-primary'>01619788808</span>. I look forward to the possibility of collaborating with you on your next web development endeavor.</p>
       </div>                     
          <a className='text-white px-2 py-3 font-light bg-primary'
        href="../assets/Resume of Bayzid.pdf" download="../assets/Resume of Bayzid.pdf">
        Download Resume
        </a>
        
        
      </div>
      <div className=" w-full md:w-1/2  ">
      <ul class={style.ul} >
  <li >
  <div class="    rounded-b-md ">
    <div class={style.date}>Educational Background</div>
    <div class="px-10 py-6 w-[95.5%] ml-auto bg-gray-700  text-slate-300">
    <p className='text-2xl text-primary font-semibold'> Diploma In Engineering</p>
    <p className='mt-3 text-xl'>Dhaka Polytechnic Institute</p>
    <p className='mt-3 text-xl'>July 2016 to June 2020</p>
    <p className='mt-3 text-xl'>Bangladesh Technical Education Board</p>
      
      </div>    
  </div>    
  </li>
  <li className='mt-10'>
  <div class="   rounded-b-md ">
    <div class={style.date}>Web Development Course</div>
    <div class="px-10 py-6 w-[95.5%] ml-auto bg-gray-700  text-slate-300">
     <p className='text-2xl'> Complete Web Development Course with &nbsp; 
     <span className='text-primary font-bold uppercase'>Jhankar Mahbub</span></p>
          
    <p className='mt-3 text-xl'>January 2022 to June 2022</p>
    <p className='mt-3 text-xl'>Programming Hero</p>
      </div>    
  </div>    
  </li>
</ul>
      </div>
    </div>
    
    </>
  );
};

export default AboutMe;
