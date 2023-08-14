import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <a id='email-button' className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-4' href="mailto:bryanstark92@gmail.com">Email me</a>
        <a id='resume-button' className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' href="mailto:bryanstark92@gmail.com">Download My Resume</a>
      </div>
    </section>
  );
}