import React from "react";
import FoodVibes from "../assets/FoodVibes.jpeg";
import WeatherApp from "../assets/WeatherApp.jpeg";
const Projects = () => {
  const Project = [
    {
      id: 1,
      srcImg: FoodVibes,
      liveURL: "https://foodvibess.netlify.app/",
      codeURL: "https://github.com/inderjeetkour1211/FoodVibes",
      title: "FoodVibes",
    },
    {
      id: 2,
      srcImg: FoodVibes,
      liveURL: "https://foodvibess.netlify.app/",
      codeURL: "https://github.com/inderjeetkour1211/FoodVibes",
      title: "FoodVibes",
    },
    {
      id: 3,
      srcImg: WeatherApp,
      liveURL: "https://inweather-app.netlify.app/",
      codeURL: "https://github.com/inderjeetkour1211/Weather-App",
      title: "WeatherApp",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className=" pt-11 max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full pb-10">
        <div className="pb-2 pt-11 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Portfolio
          </p>
          <p className="py-6 text-xl">Check out some of my work </p>
        </div>

        <div className="grid px-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 sm:px-2">
          {Project.map(({ id, srcImg, title, liveURL, codeURL }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={srcImg}
                alt="title"
                className="rounded-md duration-200 hover:scale-105 h-64 object-cover"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-red-600 hover:scale-105">
                  {" "}
                  <a href={liveURL} target="_blank" rel="noreferrer">
                    {" "}
                    Demo{" "}
                  </a>{" "}
                </button>

                <button className="w-1/2 px-6 py-3 m-4 duration-200  hover:text-red-600 hover:scale-105">
                  <a href={codeURL} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
