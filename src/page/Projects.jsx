import React from 'react'
import style from './Projects.module.css'
import project1 from '../assets/Medicare-Clinic.png'
import project2 from '../assets/Walmart.png'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="mx-auto max-w-[1170px] px-10 py-4  md:px-6 lg:py-8">
      {/* ---------- Heading --------- */}
      <h3 className=" 
      md:before:content-['My-Projects'] md:before:absolute md:before:-top-2
      md:before:left-[30%] md:md:before:left-[35%] md:before:text-[60px]
      md:before:font-extrabold before:text-[#5c6066]/20 before:-z-10
      my-10 font-bold  text-5xl hover:bg-transparent text-white/70 text-center relative">
          <span className='text-primary'>My</span> Projects</h3>
  <div className="-mx-4 flex flex-wrap items-center">
    <div className="relative w-full md:px-4 md:w-1/2">
      <div className="screen  overflow-hidden mb-6 h-[400px] md:before:absolute md:before:-bottom-3 md:before:right-12 md:before:top-10 md:before:h-[400px] md:before:w-[95%]  md:before:border-2 md:before:bg-blue-500 lg:w-full">
        <div className="relative border-2 left-5 h-[600px] group">
          <img
            src={project1}
            alt=""
            srcSet=""
            className="absolute transition-transform transform translate-y-0  hover:-translate-y-[calc(100%-400px)] object-cover  ease-in-out duration-[3000ms] h-auto w-full  md:z-50 "
          />
        </div>
      </div>
    </div>
    <div className="w-full  px-4 md:w-1/2">
      <div className="lg:pl-20">
        <div className="mb-3">
          <p className="mb-3 inline-block text-3xl font-bold heading dark:text-gray-400">
            <span>Medicare Website</span>
          </p>
          <p className="justify mb-3 max-w-md text-justify text_para">
            Our doctor appointment booking website provides a seamless platform
            for patients to schedule appointments with healthcare providers
            based on their specialties, availability, and location preferences.
            Users can easily search for doctors, view their profiles, and book
            appointments at their convenience, streamlining the healthcare
            appointment process.
          </p>
        </div>
        <ul className="my-3 flex md:flex-wrap gap-3 font-semibold text-blue-600">
          <li>React</li>
          <li>Node JS</li>
          <li>Mongo DB</li>
          <li>Stripe</li>
          <li>Firebaese</li>
        </ul>
        <div className={style.container}>
          <a href="https://github.com/ssmdbayzid/testMedicare" target='_blank'>
          <button className={style.btn}>
            <span className='flex items-center gap-3'> <FaGithub className='text-lg'/> Client</span>
            <i />
          </button>
          </a>

          <a href="https://github.com/ssmdbayzid/testMedicare-server" target='_blank'>
          <button className={style.btn}>
            <span className='flex items-center gap-3'> <FaGithub className='text-lg'/> Backend</span>
            <i />
          </button>
          </a>
          <a href="https://medicare-817a0.web.app" target='_blank'>
          <button className={style.btn}>
            <span className='flex items-center gap-3'> <FaExternalLinkAlt  className='text-lg'/> Live</span>
            <i />
          </button>
          </a>
          <a href="/projects/1" >
          <button className={style.btn}>
            <span>Details</span>
            <i />
          </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="-mx-4 flex flex-wrap items-center my-20">
    <div className="relative w-full px-4 md:w-1/2">
      <div className="screen  overflow-hidden mb-6 h-[400px] md:before:absolute md:before:-bottom-3 md:before:right-12 md:before:top-10 md:before:h-[400px] md:before:w-[95%] md:before:border-2 md:before:bg-blue-500 lg:w-full">
        <div className="relative border left-5 h-[600px] group">
          <img
            src={project2}
            alt=""
            srcSet=""
            className="absolute transition-transform transform translate-y-0  hover:-translate-y-[calc(100%-400px)] object-cover  ease-in-out duration-[3000ms] h-auto w-full  md:z-50 "
          />
        </div>
      </div>
    </div>
    <div className="w-full px-4 md:w-1/2">
      <div className="lg:pl-20">
        <div className="mb-3">
          <p className="mb-3 inline-block text-3xl font-bold heading dark:text-gray-400">
            <span>Medicare Website</span>
          </p>
          <p className="justify mb-3 max-w-md text-justify text_para">
          Experience seamless online shopping with our state-of-the-art e-commerce website. Discover a vast array of products, from trendy fashion to cutting-edge electronics, all easily accessible with user-friendly navigation. Enjoy secure transactions, swift delivery, and unparalleled customer satisfaction, making your online shopping experience both enjoyable and reliable
          </p>
        </div>
        <ul className="my-3 flex gap-3 font-semibold text-blue-600">
          <li>React</li>
          <li>Node JS</li>
          <li>Mongo DB</li>
          <li>Stripe</li>
          <li>Firebaese</li>
        </ul>
        <div className={style.container}>
        <a href="https://github.com/ssmdbayzid/walmart" target='_blank'>
          <button className={style.btn}>
            <span className='flex items-center gap-3'> <FaGithub className='text-lg'/> Client</span>
            <i />
          </button>
          </a>

          <a href="https://github.com/ssmdbayzid/walmart-server" target='_blank'>
          <button className={style.btn}>
            <span className='flex items-center gap-3'> <FaGithub className='text-lg'/> Backend</span>
            <i />
          </button>
          </a>
          <a href="https://walmart-272ed.web.app" target='_blank'>
          <button className={style.btn}>
            <span className='flex items-center gap-3'> <FaExternalLinkAlt  className='text-lg'/> Live</span>
            <i />
          </button>
          </a>
          <a href="/projects/2" >
          <button className={style.btn}>
            <span>Details</span>
            <i />
          </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Projects