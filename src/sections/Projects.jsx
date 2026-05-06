import React from "react";
import figmaProject from "../assets/figmaProject.png";
import ecommerceShopmate from "../assets/ecommerceShopmate.png";

export default function Projects() {
  return (
    <section id="projects" className="w-full my-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-bold text-3xl md:text-5xl">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* <div className="flex justify-center gap-3"> */}
            <div className="flex flex-col gap-3">
              <div className="p-4 border">
                <img
                  className="w-full h-60 md:w-full md:h-80 object-contain rounded-md"
                  src={figmaProject}
                  alt="figma project"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-xl md:text-2xl">figma UI</h3>
                <p className="text-lg md:text-xl">Figma UI using HTML, CSS</p>
              </div>
              <div className="flex gap-4">
                <a href="https://figma-project-create.vercel.app" className="bg-sky-500 border shadow-2xl px-3 py-1 hover:text-white hover:bg-green-500 rounded-lg transition-all duration-300" target="_blank">Live</a>
                <a href="https://github.com/sunilsharma82334/figma-project-create" className="bg-sky-500 border shadow-2xl px-3 py-1 hover:text-white hover:bg-green-500 rounded-lg transition-all duration-300" target="_blank">
                  Github
                </a>
              </div>
            </div>
            <div>
              <div className="p-4 border">
                <img
                  className="w-full h-60 md:w-full md:h-80 object-contain rounded-md"
                  src={ecommerceShopmate}
                  alt="ecommerce shopmate"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-xl md:text-2xl">E-commerce UI</h3>
                <p className="text-lg md:text-xl">shopping UI using React and Tailwind.</p>
              </div>
              <div className="flex gap-4 mt-3">
                <a href="https://first-ecommerce-react-project-shopm.vercel.app" className="bg-sky-500 border shadow-2xl px-3 py-1 hover:text-white hover:bg-green-500 rounded-lg transition-all duration-300" target="_blank">Live</a>
                <a href="https://github.com/sunilsharma82334/first-ecommerce-react-project-shopmate" className="bg-sky-500 border shadow-2xl px-3 py-1 hover:text-white hover:bg-green-500 rounded-lg transition-all duration-300" target="_blank">
                  Github
                </a>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
