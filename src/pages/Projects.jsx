import React from "react";
import icons from "../utils/iconAccess";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projects() {
  return (
    <div id="Projects" className="bg-[#020617]  py-20 md:p-17 md:py-27">

      <div className="flex items-center justify-center text-2xl md:text-4xl text-cyan-500 md:font-extrabold underline underline-offset-10">
        <span className="text-white">
          My <span className="text-cyan-500">Projects</span>
        </span>
      </div>

      {/* project 1 : Task manager app */}

      <div className="mt-20 gap-8 flex justify-center  md:justify-normal flex-wrap">


        <div className="h-[385px] w-[300px] md:h-[450px] md:w-[440px] md:hover:-translate-y-2 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] rounded-xl">
          <img
            className="h-[160px] w-[400px] md:h-[250px] md:w-[500px] rounded-xl "
            src={icons.taskmanagementapp}
            alt="taskmanagementapp"
          />
          <div className="mt-4 pl-3 md:pl-5  ">
            <span className="text-white font-bold text-xl">
              Task Management App
            </span>

            <span className="flex items-center justify-center mt-3 text-gray-300 ">
              It is a Task management app with add, delete, mark as done
              features with a fact box.
            </span>

            <div className="mt-4 flex gap-2 ">
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                HTML
              </span>
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                Tailwind CSS
              </span>
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                JavaScript
              </span>
            </div>
          </div>
          <div className="mt-3 pl-4 md:mt-4 md:pl-7 flex gap-4">
            <a
              href="https://todo-list-iota-silk-22.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 text-md font-extrabold md:hover:text-purple-500 transition duration-200"
            >
              <FiExternalLink /> <span>Live Link</span>
            </a>

            <a
              href="https://github.com/sisirsen/Task-Manager-App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 text-md font-extrabold md:hover:text-purple-500  transition duration-200"
            >
              <FiGithub /> <span>Code</span>
            </a>
          </div>
        </div>

        {/* project 2 : Weather app */}

        <div className="h-[390px] w-[300px] md:h-[450px] md:w-[440px] md:hover:-translate-y-2 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] rounded-xl">
          <img
            className="h-[160px] w-[400px] md:h-[250px] md:w-[500px] rounded-xl "
            src={icons.weatherapp}
            alt="taskmanagementapp"
          />
          <div className="mt-4 md:pl-5 pl-3">
            <span className="text-white font-bold text-xl">
              Weather App(Pluvia)
            </span>

            <span className="flex mt-3 text-gray-300 ">
              It is a weather informer web application, tracks real time weather
              data with API.
            </span>

            <div className="mt-4 flex gap-2 ">
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                HTML
              </span>
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                Tailwind CSS
              </span>
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                JavaScript
              </span>
            </div>
          </div>
          <div className="mt-4 pl-4 md:pl-7 flex gap-4">
            <a
              href="https://pluvia-sable.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 text-md font-extrabold md:hover:text-purple-500  transition duration-200"
            >
              <FiExternalLink /> <span>Live Link</span>
            </a>

            <a
              href="https://github.com/sisirsen/Pluvia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 text-md font-extrabold md:hover:text-purple-500  transition duration-200"
            >
              <FiGithub /> <span>Code</span>
            </a>
          </div>
        </div>

        {/* project 3 : Calculator app */}

        <div className="h-[370px] w-[300px] md:h-[450px] md:w-[440px] md:hover:-translate-y-2 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] rounded-xl">
          <img
            className="h-[160px] w-[300px] md:h-[250px] md:w-[500px] rounded-xl "
            src={icons.calculatorapp}
            alt="taskmanagementapp"
          />
          <div className="mt-4 pl-3 md:pl-5">
            <span className="text-white font-bold text-xl">
              Calculator App(Quantix)
            </span>

            <span className="flex mt-3 text-gray-300 ">
              It is a calculator web application made for solving mathematical
              calculations.
            </span>

            <div className="mt-4 flex gap-2 ">
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                Tailwind CSS
              </span>
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                React Js
              </span>
            </div>
          </div>
          <div className="mt-4 pl-4 md:pl-7 flex gap-4">
            <a
              href="https://quantix-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 text-md font-extrabold md:hover:text-purple-500  transition duration-200"
            >
              <FiExternalLink /> <span>Live Link</span>
            </a>

            <a
              href="https://github.com/sisirsen/Quantix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 text-md font-extrabold md:hover:text-purple-500  transition duration-200"
            >
              <FiGithub /> <span>Code</span>
            </a>
          </div>
        </div>

        {/* project 4 : portfolio app */}

        <div className="h-[390px] w-[300px] md:hover:-translate-y-2 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 md:h-[450px] md:w-[440px] bg-[#1E293B] rounded-xl">
          <img
            className="h-[160px] w-[300px] md:h-[250px] md:w-[500px] rounded-xl "
            src={icons.portfolioapp}
            alt="taskmanagementapp"
          />
          <div className="mt-4 pl-3 md:pl-5">
            <span className="text-white font-bold text-xl">
              Portfolio Website
            </span>

            <span className="flex mt-3 text-gray-300 ">
              It is my personal portfolio to showcase my journey, along with my skills and projects.
            </span>

            <div className="mt-4 flex gap-2 ">
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                Tailwind CSS
              </span>
              <span className="py-1 px-3 flex items-center text-sm bg-slate-600 font-bold text-gray-200 rounded-2xl">
                React Js
              </span>
            </div>
          </div>
          <div className="mt-4 pl-4 md:pl-7 flex gap-4">
            <a
              href="https://sisirsen-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 text-md font-extrabold md:hover:text-purple-500  transition duration-200"
            >
              <FiExternalLink /> <span>Live Link</span>
            </a>

            <a
              href="https://github.com/sisirsen/Sisirsen-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 flex items-center gap-1 text-md font-extrabold md:hover:text-purple-500  transition duration-200"
            >
              <FiGithub /> <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
