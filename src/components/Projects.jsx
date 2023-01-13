import { useState } from "react";
import Thrumyeyes from "../assets/thrumyeyes.jpeg";

function Projects() {

  return (
    <section className="max-w-full max-h-full">
      <div className="container w-full h-fit mx-auto grid grid-cols-12 gap-y-16">
        <h2 className="text-4xl font-bold leading-[2.5] col-span-12">
          Projects
        </h2>
        <div className="col-span-12 w-full h-fit flex justify-between">
          <figure className="w-6/12 h-80 bg-gray-200 rounded-xl shadow-md overflow-hidden">
            <img
              src={Thrumyeyes}
              alt="..."
              className="w-full object-cover object-center bg-no-repeat h-full"
            />
          </figure>
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-bold leading-[2.5] text-end">
              Thrumyeyes
            </h3>
            <p className="w-9/12 h-fit text-lg text-end">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              cum ad consectetur ipsa laborum veniam eum, dolorem ea at eaque?
            </p>
            <span className="h-full flex items-end text-5xl font-bold">01</span>
          </div>
        </div>
        <div className="col-span-12 w-full h-fit flex justify-between">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold leading-[2.5] text-start">
              Raijin Arena
            </h3>
            <p className="w-9/12 h-fit text-lg text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              cum ad consectetur ipsa laborum veniam eum, dolorem ea at eaque?
            </p>
            <span className="h-full flex items-end text-5xl font-bold">02</span>
          </div>
          <figure className="w-6/12 h-80 bg-gray-200 rounded-xl shadow-md overflow-hidden">
            <img
              src={Thrumyeyes}
              alt="..."
              className="w-full object-cover object-center bg-no-repeat h-full"
            />
          </figure>
        </div>
        <div className="col-span-12 w-full h-fit flex justify-between">
          <figure className="w-6/12 h-80 bg-gray-200 rounded-xl shadow-md overflow-hidden">
            <img
              src={Thrumyeyes}
              alt="..."
              className="w-full object-cover object-center bg-no-repeat h-full"
            />
          </figure>
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-bold leading-[2.5] text-end">
              Luckes Studio
            </h3>
            <p className="w-9/12 h-fit text-lg text-end">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              cum ad consectetur ipsa laborum veniam eum, dolorem ea at eaque?
            </p>
            <span className="h-full flex items-end text-5xl font-bold">03</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
