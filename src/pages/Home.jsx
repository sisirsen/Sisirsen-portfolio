import React from "react";
import icons from "../../src/utils/iconAccess";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Home() {
  return (
    <div className="p-10 py-17  md:flex items-center gap-90 w-full ">
      <div>
        <div className="text-white flex gap-3 text-4xl md:text-6xl font-extrabold">
          Hi, I'm
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent w-fit">
            SISIR
          </div>
        </div>

        <div className="mt-6 text-2xl md:text-3xl text-white">
          Frontend Developer
        </div>

        <div className="text-gray-400 mt-5 text-lg max-w-xl leading-6">
          Building modern, responsive, and user-focused web experiences with
          clean design and powerful frontend technologies
        </div>

        <div className="flex items-center gap-6 mt-8">
          <button className="h-[50px] w-[120px] cursor-pointer font-bold text-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl">
            Let's Talk
          </button>
          <button className="text-cyan-400 border-2 cursor-pointer hover:bg-gray-800 h-[50px] w-[120px] rounded-3xl transition-all duration-200">
            View Work
          </button>
        </div>

        <div className=" flex items-center gap-4 mt-8 ">
          <a
            href="https://github.com/sisirsen"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center hover:bg-cyan-800 transition-all duration-300"
          >
            <FaGithub className="text-white text-2xl" />
          </a>

          <a
            href="https://in.linkedin.com/in/sisir-sen"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center hover:bg-cyan-800 transition-all duration-300"
          >
            <FaLinkedinIn className="text-white text-xl" />
          </a>

          <a
            href="https://x.com/sisir_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center hover:bg-cyan-800 transition-all duration-300"
          >
            <FaXTwitter className="text-white text-xl" />
          </a>
        </div>
      </div>
      <div>
        <img
          className=" ml-2 mt-8 md:h-[500px] w-[350px] rounded-2xl"
          src={icons.MyImage}
          alt="image"
        />
      </div>
    </div>
  );
}

export default Home;
