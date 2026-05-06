import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed z-50 w-full bg-gray-800">
      <div className="relative max-w-7xl mx-auto flex justify-between items-center py-2 px-3">
        <h1 className="cursor-pointer font-bold text-2xl text-gray-300 uppercase w-full text-center md:text-left">Sunil Sharma</h1>

        {/* desktop menu */}
        <nav className="hidden md:flex px-3 py-2">
          <ul className="flex items-center gap-3">
            <li className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#about">About</a> 
            </li> 
            <li className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#skills">Skills</a> 
            </li>
            <li className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#projects">Projects</a> 
            </li> 
            <li className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#certifications">Certifications</a> 
            </li> 
            <li className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* mobile menu icon */}
        <div className="md:hidden text-2xl cursor-pointer text-gray-300"
          onClick={() => setOpen(!open)}>
          {
            open ? <IoMdClose /> : <CiMenuBurger />
          }  
          
          
        </div>

        {/* mobile menu */}
        {
          open && (
            <ul className="absolute top-full left-0 bg-gray-800 flex flex-col items-center py-3 gap-3 w-full">
              <li onClick={()=> setOpen(false)} className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#about">About</a>
            </li>
            <li onClick={()=> setOpen(false)} className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#skills">Skills</a>
            </li>
            <li onClick={()=> setOpen(false)} className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#projects">Projects</a>
            </li>
            <li onClick={()=> setOpen(false)} className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#certifications">Certifications</a>
            </li>
            <li onClick={()=> setOpen(false)} className="cursor-pointer text-xl text-gray-300 uppercase hover:text-blue-500 transition-all duration-300">
              <a href="#contact">Contact</a>
            </li>
            </ul>
          )
        }
      </div>
    </header>
  );
}
