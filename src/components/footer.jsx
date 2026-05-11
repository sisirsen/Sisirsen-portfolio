import React from "react";
import icons from "../utils/iconAccess";

const Footer = () => {
  return (
    <footer className="bg-[#05091A] text-white px-6 py-6">
     
      <div className="flex px-6 py-4">
       
        <div>
          <h1
            className="bg-gradient-to-r from-blue-500 to-purple-500 
               bg-clip-text text-transparent 
               text-2xl font-bold 
               w-fit "
          >
            SISIR SEN
          </h1>
          <p className="text-sm mt-2 text-gray-400">
            Build with modern web experiences.
          </p>
        </div>

        <div className="flex items-center ml-auto">   
          <div className="flex gap-5">
            <a 
            href="https://github.com/sisirsen"
            target="_blank"
            rel="noopener noreferrer"
            
            className="cursor-pointer h-6 w-6 bg-white rounded-2xl hover:bg-cyan-500"> <img src={icons.gitButton} alt="githubButton" /></a>


            <a 
            href="https://in.linkedin.com/in/sisir-sen"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer h-7 w-7 bg-white rounded-4xl hover:bg-cyan-500"> <img src={icons.linkedinButton} alt="linkedInButton" /></a>


            <a 
            href="https://x.com/sisir_codes"
            target="_blank"
            rel="noopener noreferrer"
            
            className="cursor-pointer h-7 w-7 bg-white rounded-2xl hover:bg-cyan-500"><img src={icons.xButton} alt="XButton" />
          </a>
        </div>
      </div>
      </div>


      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        Made by Sisir with 💖
      </div>
    </footer>
  );
};

export default Footer;
