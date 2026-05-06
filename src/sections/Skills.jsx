import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import bootstrap from "../assets/bootstrap.jpeg";

export default function Skills() {
  return (
    <section id="skills" className="w-full my-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-3xl md:text-5xl font-bold">My Skills</h3>
          <p className=" mt-4 text-sm md:text-lg">
            A collection of my technical skills and expertise honed through
            various projects and experiences.
          </p>
          <span className="font-bold text-xl md:text-2xl">Frontend</span>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-2xl">
            <div className="flex flex-col items-center gap-3 border p-6">
              <img border p-6
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg"
                src={html}
                alt="html"
              />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center gap-3 border p-6">
              <img
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg"
                src={css}
                alt="css"
              />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center gap-3 border p-6">
              <img
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg"
                src={javascript}
                alt="javascript"
              />
              <span>Javascript</span>
            </div>
            <div className="flex flex-col items-center gap-3 border p-6">
              <img
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg"
                src={react}
                alt="react"
              />
              <span>React JS</span>
            </div>
            <div className="flex flex-col items-center gap-3 border p-6">
              <img
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg"
                src={tailwindcss}
                alt="tailwindcss"
              />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-3 border p-6">
              <img
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg"
                src={bootstrap}
                alt="bootstrap"
              />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
