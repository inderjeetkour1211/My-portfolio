import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full ">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full pb-28">
        <div className=" pb-2 pt-28 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            About Me
          </p>
          <p className="py-6 text-xl">Who am I</p>
        </div>

        <p className="text-xl">
          {" "}
          I am a in HubSpot CMS. I am proficient in HTML, CSS, HubL, and
          JavaScript, and I have a strong understanding of UX/UI design. I am a
          highly skilled Front-End Web Developer with 2.5 years of experience
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
      </div>
    </div>
  );
};

export default About;
