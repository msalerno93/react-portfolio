import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-500 text-gray-800 font-bold'>
      <div>
      </div>

      {/* menu */}
      <ul className='hidden md:flex text-xl'>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-blue-800 text-black font-bold flex flex-col justify-center items-center'
        }
      >
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800 py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800 py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800 py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800 py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:rounded-lg hover:border-2 hover:bg-black hover:text-white border-blue-800 py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/michael-salerno-tech/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/msalerno93'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;