import React from "react";
import frontEndResume from '../assets/Cv-Sisir Sen(F).pdf'
import fullStackResume from '../assets/Cv-SisirSen(FS).pdf'

function About() {
  const about = [
  {
    id: 1,
    text: "Built a strong foundation in HTML, CSS, JavaScript, and modern frontend development.",
  },
  {
    id: 2,
    text: "Built responsive web applications with React.Js, live REST API and modern UI.",
  },
  {
    id: 3,
    text: "Currently building REST APIs using Python and FastAPI.",
  },
  {
    id: 4,
    text: "Focused on reusable components, performance, and responsive design."
  },
  {
    id:5,
  text:"Always exploring modern web technologies and best development practices."
},
  {
    id: 6,
    text: "Excited to contribute to impactful projects while continuously learning modern web technologies.",
  },
];
  return (
    <div id="about" className="bg-[#020617]  py-20 md:p-17 md:py-27">
      <div className="flex items-center justify-center text-2xl md:text-4xl text-cyan-500 font-extrabold underline underline-offset-10">
        <span className="text-white">
          About <span className="text-cyan-500">Me</span>

        </span>
      </div>

      <div className="">
        <div className="flex justify-center p-5">
          <div className=" mt-10 relative max-w-5xl mx-auto py-10">

  {/* Vertical Line */}
  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-500 -translate-x-1/2"></div>

  {about.map((item, index) => (
    <div
  key={item.id}
  className={`relative flex items-center mb-12  ${
    index % 2 === 0 ? "justify-start" : "justify-end"
  }`}
>
  <div
    className={`w-[42%] ${
      index % 2 === 0 ? "mr-16" : "ml-16"
    } bg-[#1E293B] rounded-xl p-5 shadow-xl hover:-translate-y-1
hover:shadow-cyan-500/20
transition-all
duration-300 `}
  >
    <p className="text-gray-300 text-sm md:text-md shadow-2xl text-center md:text-left">{item.text}</p>
  </div>

  {/* Circle */}
  <div className="absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-cyan-500 border-4 border-[#020617]"></div>

  {/* Horizontal Line */}
  <div
    className={`absolute top-1/2 h-[2px] bg-cyan-500 ${
      index % 2 === 0
        ? "left-[44%] w-[6%]"
        : "right-[44%] w-[6%]"
    }`}
  ></div>
</div>
  ))}
</div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
  {/* Frontend Resume */}
  <a
    href={frontEndResume}
    download="Sisir-Sen-Frontend-Resume.pdf"
    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
  >
    Frontend Resume
    <span className="ml-2">↓</span>
  </a>

  {/* Full Stack Resume */}
  <a
    href={fullStackResume}
    download="Sisir-Sen-Full-Stack-Resume.pdf"
    className="inline-flex items-center justify-center rounded-xl border border-cyan-400/50 bg-cyan-400/5 px-6 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/10"
  >
    Full Stack Resume
    <span className="ml-2">↓</span>
  </a>
</div>
      </div>
    </div>
  );
}

export default About;
