import React from "react";
import icons from "../utils/iconAccess";

function Skills() {
  return (
    <div id="Skills" className="p-10 py-27">
      <div className="flex items-center justify-center text-white text-2xl md:text-4xl font-extrabold underline gap-3 underline-offset-11 decoration-cyan-500">
        <span className="text-white">
          My <span className="text-cyan-500">Skills</span>
        </span>
      </div>

      {/* Professional Skills */}

      <div>
        <div className="text-2xl md:text-3xl font-bold mt-20 flex justify-center ">
          <span className="text-white ">
            Professional
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent pl-2">
              Skills
            </span>
          </span>
        </div>

        <div className=" mt-10  flex flex-wrap justify-center md:flex gap-9 md:justify-center">
          <div className="h-[120px] w-[150px] md:h-[150px] md:w-[200px] shadow-2xl rounded-2xl bg-[#1E293B]">
            <img
              className="h-[80px] w-[150px] md:h-[100px] md:w-[250px] rounded-lg"
              src={icons.communication}
              alt="communication"
            />
            <span className="text-white flex items-center justify-center mt-2 font-bold">
              Communication
            </span>
          </div>

          <div className="h-[120px] w-[150px] md:h-[150px] md:w-[200px] shadow-2xl rounded-2xl bg-[#1E293B]">
            <img
              className="h-[80px] w-[150px] md:h-[100px] md:w-[250px] rounded-lg"
              src={icons.teamwork}
              alt="communication"
            />
            <span className="text-white flex items-center justify-center mt-2 font-bold">
              Team Work
            </span>
          </div>

          <div className="h-[120px] w-[150px] md:h-[150px] md:w-[200px] shadow-2xl rounded-2xl bg-[#1E293B]">
            <img
              className="h-[80px] w-[150px] md:h-[100px] md:w-[250px] rounded-lg"
              src={icons.problemsolving}
              alt="communication"
            />
            <span className="text-white flex items-center justify-center mt-2 font-bold">
              Problem Solving
            </span>
          </div>

          <div className="h-[120px] w-[150px] md:h-[150px] md:w-[200px] shadow-2xl rounded-2xl bg-[#1E293B]">
            <img
              className="h-[80px] w-[150px] md:h-[100px] md:w-[250px] rounded-lg"
              src={icons.panctuality}
              alt="communication"
            />
            <span className="text-white flex items-center justify-center mt-2 font-bold">
              Punctuality
            </span>
          </div>
        </div>
      </div>

      {/*Tools & Technologies */}

      <div className="flex text-2xl md:text-3xl font-black mt-20 justify-center">
        <span className="text-white">
          Tools &
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent pl-2">
            Technologies
          </span>
        </span>
      </div>

      <div className="mt-10 flex flex-wrap md:flex md:flex-wrap justify-center gap-9 ">
        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img className=" h-[30px] w-[30px]" src={icons.html} alt="htmllogo" />
          HTML
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img
            className=" h-[30px] w-[45px]"
            src={icons.tailwind}
            alt="tailwindLogo"
          />
          Tailwind
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img className=" h-[30px] w-[30px]" src={icons.js} alt="jslogo" />
          JavaScript
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex  flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img
            className=" h-[35px] w-[37px]"
            src={icons.react}
            alt="react logo"
          />
          React Js
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex flex-wrap flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img
            className=" h-[40px] w-[35px]"
            src={icons.java}
            alt="java logo"
          />
          Java
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex  flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img className=" h-[40px] w-[37px]" src={icons.git} alt="git logo" />
          Git
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex  flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img
            className=" h-[40px] w-[40px] rounded"
            src={icons.github}
            alt="GitHub"
          />
          GitHub
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex  flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img
            className=" h-[40px] w-[40px] rounded"
            src={icons.vercel}
            alt="vercellogo"
          />
          Vercel
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex  flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img
            className=" h-[40px] w-[40px] rounded"
            src={icons.figma}
            alt="figma"
          />
          Figma
        </div>

        <div className="h-[100px] w-[180px] md:h-[120px] md:w-[200px] bg-[#1E293B] flex  flex-col items-center justify-center text-white gap-2 rounded-2xl shadow">
          <img
            className=" h-[40px] w-[40px] rounded"
            src={icons.vscode}
            alt="vscode"
          />
          VS Code
        </div>
      </div>
    </div>
  );
}

export default Skills;
