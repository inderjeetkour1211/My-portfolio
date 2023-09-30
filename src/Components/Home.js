import React from "react";
import HeroImage from "../assets/HeroImage.png";

import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800 py-20"
    >
      <div className="max-w-screen-xl mx-auto w-full flex flex-col items-center justify-center px-4 pt-20 md:flex-row">
        <div className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
          <h3 className="text-2xl sm:text-2xl font-bold py-3 text-white">
            Hello👋 I'm
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Inderjeet Kour
          </h1>
          <p className="text-2xl md:text-3xl py-3 text-white">
            I am a Front End Developer
          </p> 
          <div className="flex flex-col sm:flex-row sm:gap-5"> 
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group mx-auto mt-3 mb-6 md:mx-0 md:mt-0 md:mb-0 text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-700 cursor-pointer font-semibold duration-200 hover:scale-105 "
            >
              Contact Me
             
            </Link>
          </div>

          <div>
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
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="rounded-2xl w-1/2"
            src={HeroImage}
            alt="Inderjeet_Kour"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


