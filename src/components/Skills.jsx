import React from 'react'

import css from "../assets/css.png"
import html from "../assets/html.png"
import github from "../assets/github.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"

const Skills = () => {
  return (
    <div name='skills' className='bg-blue-800'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl text-blue-500 py-4 font-bold'>Experience</p>
                <p>Technologies I've Worked With:</p>
            </div>
            <div>
                <div>
                    <img className='w-20 mx-auto' src={css} alt="css Icon" />
                    <p>CSS</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills