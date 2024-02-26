import React, { useEffect, useState } from 'react'
import {FaArrowRight } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { SlScreenDesktop } from "react-icons/sl";
import { useParams } from 'react-router-dom';
import { projectsData } from '../../data/data';


const ProjectDetails = () => {
  const {id} = useParams()
  const [project, setProject] = useState([])

  useEffect(()=>{
    if(id && projectsData){
      setProject(projectsData.filter( p => {return p.id == id}))     
    }
  },[id, projectsData])

  
const [viewType, setView] = useState("desktop") 
  return (
    <div className="max-w-[1170px] w-full mx-auto md:px-0 px-5 py-28">
 {project && project.map(pro => 
  <div key={pro?.name} className="mx-auto flex justify-between items-center  flex-col gap-8 md:gap-20 md:flex-row">
    <div className="list relative mx-auto w-full md:w-1/2">
      <h3 className="text-center text-primary my-5 text-3xl font-bold">
        Tools &amp; Technology
      </h3>
    
      <ul  className="w-full bg-gray-900 p-3 z-20 pl-5 md:w-1/2">
        <p className="text-2xl font-bold text-blue-400 mb-3">Frontend Library</p>
        <span className="absolute -left-3  h-full w-3" />
        {pro?.frontend_technologies?.map((tech, index) =>
         <li key={index} className="mb-2 border-l-2 border-l-red-600 ps-5 text-gray-300">
          <span>{tech}</span>
        </li>)}
       
      </ul>
      <ul className="right-0 top-24 z-10 bg-gray-700 p-3 pl-5 md:absolute  md:w-1/2">
        <p className="text-2xl font-bold text-blue-400 mb-3">Backend Library</p>
        <span className="0 absolute -left-3 top-0 h-full w-3" />
      {pro?.backend_technologies?.map((tech, index) =>
        <li key={index} className="mb-2 border-l-2 border-l-red-600 ps-5 text-gray-300">
          <span>{tech}</span>
        </li>)}
       
      </ul>
    </div>
    <div className="w-full md:w-1/2 bg-black/70 p-5">
    <h3 className="text-center md:text-start font-bold  text-5xl ps-3 md:ps-0 hover:bg-transparent text-white/70">
          <span className='text-primary'> Project</span> Overview 
        </h3>
     
      <ul className="mt-12">
      {pro?.features?.map((feature, index) =>
        <li key={index} className="flex  gap-4 mb-2 text-textColor text-xl font-thin">
          <FaArrowRight className='text-primary text-3xl' /> {feature}
        </li>)}
       
      </ul>
    </div>
  </div>)}
  <div className="gap-5  mx-auto w-full">
  <h3 className="  my-5 font-bold  text-5xl ps-3 md:ps-0 hover:bg-transparent text-center text-white/70">
       <span className='text-primary'> Project</span> View
  </h3>
  <div className=" hidden md:flex gap-3 items-center justify-center text-2xl py-3">
      <CiMobile3 onClick={()=> setView("mobile")}
      className={`${viewType === "mobile" ? "text-primary" : "text-white"} w-10 h-10 cursor-pointer`} /> <span>||</span> 
      <SlScreenDesktop onClick={()=> setView("desktop")}
      className={`${viewType === "desktop" ? "text-primary" : "text-white"} w-10 h-10 cursor-pointer`}  />
      </div>
 {project.length > 0 &&
  <iframe
  id="inlineFrameExample"
  title="Inline Frame Example"  
  className={`${viewType === "mobile" ? "w-[500px] rounded-md" : "w-full" } h-[500px] md:h-[500px] mx-auto bg-white`}
  src={project[0].liveLink}>
</iframe>
}


  </div>
</div>

  )
}

export default ProjectDetails