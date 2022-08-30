import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-blue-800'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          Michael Salerno
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-black'>
          Full Stack Developer
        </h2>
        <p className='text-black font-bold text-xl py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building and designing React applications. 
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center font-bold hover:bg-black hover:border-blue-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;