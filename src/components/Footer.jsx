import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";



export default function Footer() {
  return (
    <section id='footer' className='w-full py-16'>
      <div className='max-w-7xl p-4 mx-auto flex flex-col md:flex-row justify-between gap-4 items-center'>
           <p className='text-sm md:text-base'>
            © 2026 Sunil Sharma. All rights reserved.
           </p>
           <div className='flex items-center gap-8'>
            <a href="https://github.com/sunilsharma82334" target='_blank'><FaGithub size={28} />
</a>
            <a href="www.linkedin.com/in/sunil-sharma-8a7925222" target='_blank'><FaLinkedin size={28} />
</a>
           </div>
      </div>
    </section>
  )
}
