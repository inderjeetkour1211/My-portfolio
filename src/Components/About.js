import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full bg-gradient-to-b from-black via-black to-gray-800 py-20">
      
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full pb-28 text-white">
        <div className=" pb-2 pt-28 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            About Me
          </p>
          <p className="py-6 text-xl">Who am I</p>
        </div>

        <p className="text-xl">
          {" "}
          I am a Front-End Developer, highly skilled Web Developer with 2.5 years of experience
          with a strong foundation in ECE, graduating with a CGPA of 9.4 from
          BBSBEC, PTU. I am proficient in JavaScript, HTML/CSS, and have
          expertise in React, Redux, and HubSpot.
        </p>

        <br />
        <p className="text-xl">
          With experience at Webdew-Mohali and Growtomation-Marketing agency in
          Gurgaon, Haryana, I've honed my abilities in creating engaging and
          functional online experiences. My goal is to build a fast, flexible,
          mobile-first website that clearly communicates with visitors. I'm also
          adept at project leadership and effective team collaboration.
        </p> 

        <div className="mt-6 mx-auto">
            <a
              href="/InderjeetKour_Resume.pdf"  target="_blank"
              rel="noreferrer" 
              smooth
              duration={500}
              className="group mx-auto mt-1 mb-7 md:mx-0 md:mt-0 md:mb-0 text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-700 cursor-pointer font-semibold duration-200 hover:scale-105"
            >
              See My Resume
              
            </a>
          </div>  
      </div>
    </div>
  );
};

export default About;
