import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen - bg-blue-800 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/56ba98a3-03c5-48ed-a833-a3f54573dd3e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-3'>
                <p className='text-6xl font-bold inline border-b-4 border-black text-white'>Contact Me</p>
                <p className='text-2xl font-bold text-black py-4'>Submit Form</p>
            </div>
            <input className='p-1 bg-white font-bold text-black' type="text" placeholder='Name' name='name' />
            <input className='my-3 p-1 bg-white font-bold text-black' type="email" placeholder='Email' name='email' />
            <textarea className='p-1 bg-white font-bold text-black' name="message" placeholder='Message' rows="10"></textarea>
            <button className='bg-white text-black hover:bg-black hover:text-white rounded-md font-bold px-4 py-3 my-8 mx-auto flex items-center'>Submit Form</button>
        </form>
    </div>
  )
}

export default Contact