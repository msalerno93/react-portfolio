import {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div
      className="fixed 
                    w-full 
                    h-[80px] 
                    flex justify-between 
                    items-center 
                    px-4
                    bg-blue-400
                    text-gray-800
                    font-bold"
    >

        {/* Top Menu */}
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

        {/* Hamburger Menu */}
        <div>
            <FaBars />
        </div>

        {/* Mobile Menu */}
        <div>

        </div>

        {/* Social Media Icons */}
        <div>

        </div>
    </div>
  );
};

export default Navbar;
