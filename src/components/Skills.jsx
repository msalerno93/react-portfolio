import React from 'react'

import css from "../assets/css.png"
import html from "../assets/html.png"
import github from "../assets/github.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import ruby from "../assets/ruby.png"
import rails from "../assets/rails.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-blue-800'>
        <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
            <div>
                <p className='flex flex-col justify-center items-center text-6xl text-white py-4 border-b-4 border-black font-bold'>Skills</p>
                <p className='text-black font-bold text-2xl py-4 '>Technologies I've Worked With:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='transition duration-500 hover:scale-125'>
                    <img className='w-20 py-4 mx-auto' src={css} alt="css Icon" />
                    <p className='font-bold text-xl'>CSS</p>
                </div>
                <div className='transition duration-500 hover:scale-125'>
                    <img className='w-20 py-4 mx-auto' src={html} alt="html Icon" />
                    <p className='font-bold text-xl'>HTML</p>
                </div>
                <div className='transition duration-500 hover:scale-125'>
                    <img className='w-20 py-4 mx-auto' src={tailwind} alt="tailwind Icon" />
                    <p className='font-bold text-xl'>Tailwind CSS</p>
                </div>
                <div className='transition duration-500 hover:scale-125'>
                    <img className='w-20 py-4 mx-auto' src={javascript} alt="javascript Icon" />
                    <p className='font-bold text-xl'>JavaScript</p>
                </div>
                <div className='transition duration-500 hover:scale-125'>
                    <img className='w-20 py-4 mx-auto' src={react} alt="react Icon" />
                    <p className='font-bold text-xl'>React.js</p>
                </div>
                <div className='transition duration-500 hover:scale-125'>
                    <img className='w-20 py-4 mx-auto' src={github} alt="github Icon" />
                    <p className='font-bold text-xl'>GitHub</p>
                </div>
                <div className='transition duration-500 hover:scale-125'>
                    <img className='w-20 py-4 mx-auto' src={ruby} alt="ruby Icon" />
                    <p className='font-bold text-xl'>Ruby</p>
                </div>
                <div className='transition duration-500 hover:scale-125'>
                    <img className='w-20 py-4 mx-auto' src={rails} alt="rails Icon" />
                    <p className='font-bold text-xl'>Ruby on Rails</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills