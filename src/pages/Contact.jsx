import React from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FiGithub,FiLinkedin,FiTwitter } from 'react-icons/fi';


function Contact() {
  return (
    <div id='Contact' className='py-20 md:p-10 md:py-27'>

      <div className="flex items-center justify-center text-2xl md:text-4xl text-cyan-500 md:font-extrabold underline underline-offset-10">
        <span className="text-white">
          Get In <span className="text-cyan-500">Touch</span>
        </span>
      </div>
      {/*main*/}
      <div className='md:flex gap-10'>
      <div>
        <div className='mt-15'>
        <div className='text-2xl text-white font-bold'>Contact Information</div>
        <div className='mt-3 text-gray-400 max-w-3xl text-md'>Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. </div>

        <div className='mt-8'>
          <div className='flex items-center gap-3'><FiMapPin className='p-3 h-[40px] w-[40px] rounded-xl bg-slate-700 shadow-2xl text-cyan-500'/>
          <div className='text-white font-bold'>Location
            <div className='text-gray-400'>Kolkata,West Bengal</div>
          </div>
          </div>

          <div className='flex items-center gap-3 mt-4'><FiMail className='p-3 h-[40px] w-[40px] rounded-xl bg-slate-700 shadow-2xl text-cyan-500'/>
          <div className='text-white font-bold'>Email
            <div className='text-gray-400'>worksisir01@gmail.com</div>
          </div>
          </div>

          

          <div className='mt-8 text-lg font-bold'>
            <div className='text-white'>Find Me Here</div>
            <div className='flex gap-3 mt-4 '>
              <a href='https://github.com/sisirsen'
              target='_blank'
              rel='noopener noreferrer'
              ><FiGithub className='p-3 h-[40px] w-[40px] hover:-translate-y-1 hover:ease-in-out hover:shadow-[0_10px_18px_rgb(255,255,255,0.1)] hover:transition-all hover:duration-500  bg-slate-700 rounded-xl hover:bg-cyan-500 text-cyan-500 hover:text-purple-800 transition duration-200'/></a>

              <a 
              href='https://in.linkedin.com/in/sisir-sen'
              target='_blank'
              rel='noopener noreferrer'
              ><FiLinkedin className='p-3 h-[40px] w-[40px] hover:-translate-y-1 hover:ease-in-out hover:shadow-[0_10px_18px_rgb(255,255,255,0.1)] hover:transition-all hover:duration-500 bg-slate-700 rounded-xl hover:bg-cyan-500 text-cyan-500 hover:text-purple-800 transition duration-200'/></a>

              <a
              href='https://x.com/sisir_codes'
              target='_blank'
              rel='noopener noreferrer'
              ><FiTwitter className='p-3 h-[40px] w-[40px] hover:-translate-y-1 hover:ease-in-out hover:shadow-[0_10px_18px_rgb(255,255,255,0.1)] hover:transition-all hover:duration-500 bg-slate-700 rounded-xl hover:bg-cyan-500 text-cyan-500 hover:text-purple-800 transition duration-200'/></a>
            
            </div>
            
          </div>
          
        </div>
        </div>
      </div>


<div className='mt-15'>
  <div>
    <div className='text-white font-bold'>Your Name</div>
    <input className='border-2 mt-3 text-white bg-gray-800 shadow-2xl  p-2 outline-none h-[50px] w-[600px] rounded-xl border-cyan-500' spellCheck="false" type="text" required />
  </div>


  <div className='mt-5'>
    <div className='text-white font-bold'>Your Email</div>
    <input className='border-2 mt-3 text-white bg-gray-800 shadow-2xl  p-2 outline-none h-[50px] w-[600px] rounded-xl border-cyan-500' spellCheck="false" type="text" required />
  </div>

  <div className='mt-5'>
    <div className='text-white font-bold'>Subject</div>
    <input className='border-2 mt-3 text-white bg-gray-800 shadow-2xl  p-2 outline-none h-[50px] w-[600px] rounded-xl border-cyan-500' spellCheck="false" type="text" required />
  </div>

  <div className='mt-5'>
    <div className='text-white font-bold'>Message</div>
    <textarea className='border-2 mt-3 text-white bg-gray-800 shadow-2xl focus:outline-none p-3 overflow-hidden outline-none h-[150px] w-[600px] rounded-xl border-cyan-500' spellCheck="false" type="text" required></textarea>
  </div>

<div className='flex items-center justify-center mt-8'>
  <button className='border flex items-center justify-center gap-1 w-[600px] h-[50px] text-slate-700 font-bold bg-gradient-to-r from-cyan-500  via-blue-500 to-purple-600 rounded-full outline-none hover:-translate-y-1  hover:shadow-[0_8px_18px_rgba(255,255,255,0.2)] transition-all ease-in-out duration-400' >Send Message <FiSend className='h-5 w-5'/></button>
</div>

  
</div>
      </div>


    </div>
  )
}

export default Contact