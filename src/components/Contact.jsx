import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <div className='mb-8'>
          <a id='email-button' className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-4' href="mailto:bryanstark92@gmail.com">Email me</a>
          <a id='resume-button' className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' href="./Bryan Stark.docx">Download My Resume</a>
        </div>
        <div className='flex gap-8'>
          <a href="https://github.com/bryanstark1">
            <BsGithub  size={40}/>
          </a>
          <a href="https://www.linkedin.com/in/bryan-stark1/">
            <BsLinkedin  size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}