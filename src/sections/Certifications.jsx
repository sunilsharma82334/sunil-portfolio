import React from 'react'
import certificate from "../assets/certificate.png"

export default function Certifications() {
  return (
    <section id='certifications' className='w-full my-16'>
      <div className='max-w-7xl mx-auto px-6'>
            <h3 className='text-3xl md:text-5xl font-bold text-center'>CERTIFICATE</h3>
            <div className='flex justify-center mt-6'>
              <div className='p-4 shadow-xl rounded-xl hover:shadow-2xl bg-white transition-all duration-300'>
             <img className='w-100 h-100 md:w-125 md:h-125 object-contain rounded-[20px] hover:scale-105 transition-transform duration-300' src={certificate} alt="certificate" />
            </div>
            </div>
            
      </div>
    </section>
  )
}
