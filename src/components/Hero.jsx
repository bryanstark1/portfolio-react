import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi, I'm Bryan.</h1>
          <h1 className="title-font sm:text-2xl text-3xl mb-4 text-white">Fullstack Software Engineer & Front-End Web Designer.</h1>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg whitespace-nowrap">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg whitespace-nowrap">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}