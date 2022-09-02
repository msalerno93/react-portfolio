import React from 'react';
import workout from '../assets/workout.png';
import moviefinder from '../assets/moviefinder.png'
import weather from '../assets/weather.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-blue-800'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-6xl font-bold inline border-b-4 text-white border-black'>
            Work
          </p>
          <p className='py-6 text-black font-bold text-xl'>Check out some of my recent work!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          <div
            style={{ backgroundImage: `url(${moviefinder})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Movie Finder - React.js
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover hover:bg-black hover:text-white'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/msalerno93/MovieFinder'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-black font-bold text-lg hover hover:bg-black hover:text-white'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather App - React.js
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover hover:bg-black hover:text-white'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/msalerno93/WeatherApp'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover hover:bg-black hover:text-white'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workout})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Workout Tracker - React.js
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover hover:bg-black hover:text-white'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/msalerno93/workout-tracker-frontend'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover hover:bg-black hover:text-white'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;