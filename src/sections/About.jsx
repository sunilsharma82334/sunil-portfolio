import React from "react";
import profile_photo from "../assets/profile_photo.jpg";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-40 min-h-screen w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-3 items-center">
        {/* left content */}
        <div className="flex flex-1
        flex-col gap-3 text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold">Hi, I'm Sunil Sharma</h2>
          <p className="mt-4 text-gray-800">
            Frontend Developer | React Developer | Tailwind CSS
          </p>
          <p className="mt-4 text-gray-800">I build modern and responsive websites using React and Tailwind CSS. 
        Passionate about creating clean UI and smooth user experience.</p>

          <button className="px-3 py-2 bg-amber-500 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-2xl mt-6 w-fit text-center mx-auto md:mx-0 shadow-sky-500 hover:scale-105">
            view projects
          </button>
        </div>

        {/* right image */}
        <div className="flex flex-1 justify-center order-1 md:order-2">
          <div className="relative flex justify-center items-center">
            <span className="bg-yellow-500 animate-ping absolute w-full h-full rounded-full opacity-75"></span>
            <img
            className=" relative w-52 h-52 md:w-80 md:h-80 rounded-full object-cover "
            src={profile_photo}
            alt="profile photo"
          /></div>
          
        </div>
      </div>
    </section>
  );
}
