import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:pr-24 lg:pl-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex flex-col w-full">
          <InformationCircleIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mx-auto">About me</h1>

        </div>
          <p className="mb-8 leading-relaxed">
            <img className='profile-image' src="./ProfilePhoto.JPG" alt="" />
            As a full stack software engineer, I am driven by a strong desire to create a meaningful and lasting impact through my work. With a background as a web designer in healthcare communications, I have gained valuable experience in collaborating effectively across teams and departments, designing for specific target audiences, and handling sensitive information. My greatest sense of accomplishment comes from implementing intuitive and comprehensive solutions. I am committed to utilizing my skills and expertise to deliver exceptional results and contribute positively to any project I take on.
          </p>
        </div>
      </div>
    </section>
  );
}