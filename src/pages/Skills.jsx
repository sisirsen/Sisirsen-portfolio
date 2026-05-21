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
          <div className="h-[100px] w-[120px] md:h-[150px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 shadow-2xl rounded-2xl bg-[#1E293B]">
            <img
              className="h-[60px] w-[120px] md:h-[100px] md:w-[250px] rounded-lg"
              src={icons.communication}
              alt="communication"
            />
            <span className="text-white text-sm flex items-center justify-center mt-2 font-bold">
              Communication
            </span>
          </div>

          <div className="h-[100px] w-[120px] md:h-[150px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 shadow-2xl rounded-2xl bg-[#1E293B]">
            <img
              className="h-[60px] w-[120px] md:h-[100px] md:w-[250px] rounded-lg"
              src={icons.teamwork}
              alt="communication"
            />
            <span className="text-white text-sm flex items-center justify-center mt-2 font-bold">
              Team Work
            </span>
          </div>

          <div className="h-[100px] w-[120px] md:h-[150px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 shadow-2xl rounded-2xl bg-[#1E293B]">
            <img
              className="h-[60px] w-[120px] md:h-[100px] md:w-[250px] rounded-lg"
              src={icons.problemsolving}
              alt="communication"
            />
            <span className="text-white text-sm flex items-center justify-center mt-2 font-bold">
              Problem Solving
            </span>
          </div>

          <div className="h-[100px] w-[120px] md:h-[150px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 shadow-2xl rounded-2xl bg-[#1E293B]">
            <img
              className="h-[60px] w-[120px] md:h-[100px] md:w-[250px] rounded-lg"
              src={icons.panctuality}
              alt="communication"
            />
            <span className="text-white text-sm flex items-center justify-center mt-2 font-bold">
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

      <div className="mt-10 flex flex-wrap md:flex md:flex-wrap justify-center  gap-9 ">
        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img className="h-[25px] w-[25px] md:h-[30px] md:w-[30px]" src={icons.html} alt="htmllogo" />
          <span className="text-sm">HTML</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img
            className=" h-[25px] w-[35px] md:h-[30px] md-w-[45px]"
            src={icons.tailwind}
            alt="tailwindLogo"
          />
          <span className="text-sm">Tailwind</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img className="h-[25px] w-[25px] md:h-[30px] md:w-[30px]" src={icons.js} alt="jslogo" />
          <span className="text-sm">JavaScript</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img
            className="h-[25px] w-[27px]  md:h-[35px] md:w-[37px]"
            src={icons.react}
            alt="react logo"
          />
          <span className="text-sm">React Js</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img
            className="h-[30px] w-[26px] md:h-[40px] md:w-[35px]"
            src={icons.java}
            alt="java logo"
          />
          <span className="text-sm">Java</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img className="h-[30px] w-[30px] md:h-[40px] md:w-[37px]" src={icons.git} alt="git logo" />
         <span className="text-sm">Git</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img
            className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded"
            src={icons.github}
            alt="GitHub"
          />
          <span className="text-sm">GitHub</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img
            className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded"
            src={icons.vercel}
            alt="vercellogo"
          />
         <span className="text-sm">Vercel</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img
            className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded"
            src={icons.figma}
            alt="figma"
          />
         <span className="text-sm">Figma</span>
        </div>

        <div className="h-[80px] w-[120px] md:h-[120px] md:w-[200px] md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500 bg-[#1E293B] flex flex-col items-center justify-center text-white gap-2 rounded-2xl shadow-2xl">
          <img
            className="h-[27px] w-[27px] md:h-[40px] md:w-[40px] rounded"
            src={icons.vscode}
            alt="vscode"
          />
         <span className="text-sm">VS Code</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
