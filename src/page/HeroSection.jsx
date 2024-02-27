import React from 'react';
import img from '../../src/assets/profile.jpg'
const HeroSection = () => {
  return (
    <div className=" max-w-[1170px] mx-auto flex items-center  flex-col-reverse md:flex-row justify-between mt-28 px-8 md:px-10 lg:px-0">
      <div className="w-full md:w-1/2 mb-10 md:mb-0 mt-10 md:mt-5 lg:mt-0 ">
        <p className='text-3xl text-primary font-semibold md:text-start text-center'>Hello There, I'm</p>
        <h3 className="text-[45px] md:text-5xl lg::text-6xl md:text-start text-center whitespace-nowrap font-bold text-white md:leading-[80px]">
          S S Md. Bayzid
        </h3>
        <h3 className="text-[55px] text-center md:text-start md:text-6xl font-extrabold md:font-bold bg-gradient-to-l from-indigo-500  to-pink-500 text-transparent bg-clip-text leading-[60px] lg:leading-[80px]">
        Frontend Developer
        </h3>
      
        <p className="text_para  text-justify">
        I design and develop experiences that make people's lives simpler through Web and Mobile apps.I work with Flgma, HTML5, CSS3, JavaScript, TypeScript, React and Next.
        </p>
        <div className="mt-10 flex gap-10 justify-start ">
          <button className="text-white bg-primary w-full md:px-10 py-3 hover:bg-transparent hover:text-primary border-2 border-primary">
            Hire Me
          </button>
         
        </div>
      </div>
      <div className="w-4/5 md:w-2/5 h-[400px] md:h-[400px] lg:h-[500px] ">
        <img
          className="object-cover md:object-fill saturate-150 hover:saturate-200 w-full h-full rounded-t-full"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
