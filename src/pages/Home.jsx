import React from "react";
import icons from "../../src/utils/iconAccess";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div
      id="Home"
      className="p-20 py-32 md:flex items-center md:justify-between w-full "
    >
      <div>
        <div className="text-white mt-12 flex justify-center md:justify-normal gap-3 text-4xl md:text-6xl font-extrabold flex-wrap">
          <span>Hi, I'm</span>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent w-fit">
            SISIR
          </div>
        </div>
        <div className="mt-6 flex justify-center md:justify-normal">
          <TypeAnimation
            sequence={["Frontend Developer", 1000, "React Developer", 1000]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className=" text-lg md:text-2xl font-bold text-white"
          />
        </div>

        <div className="text-gray-400 mt-5 pl-4 md:pl-0 text-sm md:text-lg max-w-xl leading-6">
          <span>
            Crafting modern, responsive, and user-focused web experiences.
          </span>
        </div>

        <div className="flex justify-center md:justify-normal items-center gap-6 mt-8">
          <a
            href="#Contact"
            className="h-[50px] w-[120px] flex justify-center items-center cursor-pointer font-bold text-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 active:from-purple-800 active:to-blue-800 rounded-3xl md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:hover:transition-all md:hover:duration-500"
          >
            <span className="text-sm font-bold">Let's Talk</span>
          </a>

          <a
            href="#Projects"
            className="text-cyan-400 flex items-center justify-center border-2 cursor-pointer hover:bg-gray-800 h-[50px] w-[120px] rounded-3xl transition-all duration-200"
          >
            <span className="text-sm font-bold"> View Work</span>
          </a>
        </div>

        <div className=" flex items-center justify-center md:flex md:justify-normal gap-4 mt-8 ">
          <a
            href="https://github.com/sisirsen"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center md:hover:bg-cyan-800 transition-all duration-300 md:hover:-translate-y-1 md:ease-in-out md:hover:transition-all md:hover:duration-500 active:hover:bg-cyan-800"
          >
            <FaGithub className="text-white text-2xl" />
          </a>

          <a
            href="https://in.linkedin.com/in/sisir-sen"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center md:hover:bg-cyan-800 transition-all duration-300 md:hover:-translate-y-1 md:ease-in-out md:hover:transition-all md:hover:duration-500 active:hover:bg-cyan-800"
          >
            <FaLinkedinIn className="text-white text-xl" />
          </a>

          <a
            href="https://x.com/sisir_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black flex items-center justify-center md:hover:bg-cyan-800 transition-all duration-300 md:hover:-translate-y-1 md:ease-in-out md:hover:transition-all md:hover:duration-500 active:hover:bg-cyan-800"
          >
            <FaXTwitter className="text-white text-xl" />
          </a>
        </div>
      </div>

      <div className="flex justify-center md:flex md:justify-normal ">
        <img
          className=" ml-2 mt-8 shadow-[0px_0px_18px_#263d84] md:hover:-translate-y-2 md:hover:shadow-[0px_0px_18px_rgba(255,255,255,0.3)] rounded-full transition-all duration-500 md:h-[450px] md:w-[450px] overflow-hidden object-cover "
          src={icons.MyImage}
          alt="image"
        />
      </div>
    </div>
  );
}

export default Home;
