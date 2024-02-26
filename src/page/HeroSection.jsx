import React from 'react';
import img from '../../src/assets/profile.jpg'
const HeroSection = () => {
  return (
    <div className=" container flex items-center flex-col md:flex-row justify-between mt-28 px-5 md:px-0">
      <div className="w-full md:w-1/2 mb-10 md:mb-0 ">
        <p className='text-3xl text-primary font-semibold'>Hello There, I'm</p>
        <h3 className="text-6xl  font-bold text-white leading-[80px]">
          S S Md. Bayzid
        </h3>
        <h3 className="text-6xl  font-bold bg-gradient-to-l from-indigo-500  to-pink-500 text-transparent bg-clip-text leading-[80px]">
        Frontend Developer
        </h3>
      
        <p className="text_para  text-justify">
        I design and develop experiences that make people's lives simpler through Web and Mobile apps.I work with Flgma, HTML5, CSS3, JavaScript, TypeScript, React and Next.
        </p>
        <div className="mt-10 flex gap-10 justify-start ">
          <button className="text-white bg-primary px-10 py-3 hover:bg-transparent hover:text-primary border-2 border-primary">
            Hire Me
          </button>
          <button className="hover:text-white hover:bg-primary px-10 py-3 bg-transparent text-primary border-2 border-primary">
            Let's Talk
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/5 h-[500px] md:h-[700px] ">
        <img
          className="object-cover saturate-150 hover:saturate-200 w-full h-full rounded-t-full"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
