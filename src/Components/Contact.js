import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800  text-white "
    >
      <div className=" py-11 max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8 pt-10 text-center">
          <p className="text-4xl font-bold inline border-b-4  border-red-500">
            Contact
          </p>
          <p className="py-6 text-xl"> Get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/88c64f83-ffbf-4346-8d89-878b1490e7b8"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-700 cursor-pointer mx-auto font-semibold duration-200 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
