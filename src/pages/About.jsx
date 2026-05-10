import React from "react";

function About() {
  return (
    <div className="bg-[#020617]  py-20 md:p-17">
      <div className="flex items-center justify-center text-2xl md:text-4xl text-cyan-500 md:font-extrabold underline underline-offset-10">
        About Me
      </div>

      <div className="px-7 md:pl-20">
        <div className="text-2xl md:text-3xl mt-17 text-white">Hi,</div>
        <div className="text-gray-400">
          <div className="mt-2 text-lg">
            I’m Sisir Sen, a frontend developer currently learning and building
            with HTML, CSS, Tailwind CSS, JavaScript, and React.
          </div>

          <div className="mt-2 text-lg">
            With this, I’ve built several projects and regularly push my work to
            GitHub to track my progress and maintain consistency in learning.
          </div>

          <div className="mt-2 text-lg">
            I believe that consistency, patience, and continuous practice are
            the keys to becoming a strong developer, and I’m focused on growing
            step by step every day.
          </div>
        </div>

        <div className="mt-10 md:flex md:items-center md:gap-50 md:text-lg text-white">
          <div>
            <div>Name: Sisir Sen</div>
            <div>Email: worksisir01@gmail.com</div>
            <div>Mobile: +91 9907517710</div>
          </div>
          <div className="mt-4">
            <div>Age: 22</div>
            <div>Experience: Fresher</div>
            <div>Location: Kolkata,West Bengal</div>
          </div>
        </div>

        <div className="flex mt-10 gap-8">
          <button className="h-[50px] w-[120px] flex items-center justify-center cursor-pointer font-bold text-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl tracking-wider">
            My CV
          </button>
          <div className="text-cyan-400 flex justify-center items-center border-2 cursor-pointer hover:bg-gray-800 h-[50px] w-[120px] transition-all duration-200 rounded-3xl">
            Connect
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
