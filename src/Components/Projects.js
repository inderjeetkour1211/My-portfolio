import React from "react";
import FoodVibes from "../assets/FoodVibes.jpeg";
import WeatherApp from "../assets/WeatherApp.jpeg";
import Portfolio from "../assets/Portfolio.png";
import Mipass from "../assets/Mipass.png"
const Projects = () => {
  const Project = [
    {
      id: 1,
      srcImg: FoodVibes,
      liveURL: "https://foodvibess.netlify.app/",
      codeURL: "https://github.com/inderjeetkour1211/FoodVibes",
      tech: "React.js, Webpack, TailwindCss",
      title: "FoodVibes App",
       description: "Food App utilizing real-time restaurant data from the public Swiggy API. Implemented a robust cart feature using Redux Toolkit for efficient state management."
    },
    {
      id: 2,
      srcImg: Portfolio,
      liveURL: "https://inderjeetkour.netlify.app/",
      codeURL: "https://github.com/inderjeetkour1211/My-portfolio",
      title: "My Portfolio",
      tech: "React.js, Webpack, TailwindCss",
       description: " Portfolio website featuring a scroll-down sticky navbar for enhanced navigation. Ensured a responsive and visually appealing user interface using tailwindcss."
    },
    {
      id: 3,
      srcImg: Mipass,
      liveURL: "https://mipass.netlify.app/",
      codeURL: "https://github.com/inderjeetkour1211/MiPass-Password-Generator",
      tech: "React.js, Vite",
      title: "Password Generator",
       description: "MiPass is a powerful password generator app built with React. Create complex, secure passwords effortlessly with customizable options for length, numbers, and special characters. "
    },
    {
      id: 4,
      srcImg: WeatherApp,
      liveURL: "https://inweather-app.netlify.app/",
      codeURL: "https://github.com/inderjeetkour1211/Weather-App",
      tech: "React.js, Webpack",
      title: "WeatherApp",
       description: "A Weather App that fetches current weather data for any city and country using the OpenWeatherMap API. Showcased proficiency in integrating APIs."
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className=" pt-11 max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full pb-10">
        <div className="pb-2 pt-11 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Portfolio
          </p>
          <p className="py-6 text-xl">Check out some of my work </p>
        </div>

        <div className="grid px-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 sm:px-2">
  {Project.map(({ id, srcImg, title, liveURL, codeURL, description }) => ( 
    <a href={liveURL} target="_blank" rel="noreferrer" className="flex flex-col h-full">                        
      <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex-1">
        <img
          src={srcImg}
          alt="title"
          className="rounded-md duration-200 hover:scale-105 h-64 object-cover"
        />
        <p className="font-semibold text-center pt-5">{title}</p> 
        <p className="px-4 py-3">{description}</p>
        <div className="flex items-center justify-center">
          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-red-600 hover:scale-105">
            Demo
          </button>

          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-red-600 hover:scale-105">
            <a href={codeURL} target="_blank" rel="noreferrer">
              Code
            </a>
          </button>
        </div>
      </div>
    </a>
  ))}
</div>

      </div>
    </div>
  );
};

export default Projects;
