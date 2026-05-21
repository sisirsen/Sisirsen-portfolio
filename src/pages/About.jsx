import React from "react";

function About() {
  return (
    <div id="About" className="bg-[#020617]  py-20 md:p-17 md:py-27">
      <div className="flex items-center justify-center text-2xl md:text-4xl text-cyan-500 md:font-extrabold underline underline-offset-10">
        <span className="text-white">
          About <span className="text-cyan-500">Me</span>

        </span>
      </div>

      <div className="px-7 md:pl-20">
        <div className="text-2xl md:text-3xl mt-17 text-white">Hi,</div>
        <div className="text-gray-400">
          <div className="mt-2 text-md md:text-lg">
            I’m Sisir Sen, a frontend developer currently learning and building
            with HTML, CSS, Tailwind CSS, JavaScript, and React.
          </div>

          <div className="mt-2 text-md md:text-lg">
            With this, I’ve built several projects and regularly push my work to
            GitHub to track my progress and maintain consistency in learning.
          </div>

          <div className="mt-2 text-md md:text-lg">
            I believe that consistency, patience, and continuous practice are
            the keys to becoming a strong developer, and I’m focused on growing
            step by step every day.
          </div>
        </div>

        <div className="mt-10 md:flex md:items-center md:gap-50 md:text-lg text-white">
          <div>
            <div>Name: Sisir Sen</div>
            <div>Email: worksisir01@gmail.com</div>
          </div>
          <div className="mt-4">
            <div>Age: 22</div>
            <div>Experience: Fresher</div>
            <div>Location: Kolkata,West Bengal</div>
          </div>
        </div>

        <div className="flex justify-center md:justify-normal mt-12 gap-8">
          <a 
          href="https://drive.google.com/drive/folders/18CeCl8362n6qBRyNlL6MXMKJPR264Mbf"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[50px] w-[120px] flex items-center justify-center cursor-pointer font-bold text-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 active:from-purple-800 active:to-blue-800 rounded-3xl md:hover:-translate-y-1 md:ease-in-out md:hover:shadow-[0_20px_18px_rgb(255,255,255,0.1)] md:transition-all md:hover:duration-500">
            My CV
          </a>
          <a href="#Contact" className="text-cyan-400 flex justify-center items-center border-2 cursor-pointer active:bg-gray-800 md:hover:bg-gray-800 h-[50px] w-[120px] transition-all duration-200 rounded-3xl">
            Connect
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
