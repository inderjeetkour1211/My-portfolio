import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="w-full px-4 text-white bg-black fixed">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-5 ">
        <div>
          <h1 className="text-5xl font-semibold font-signature">
            Portfo<span className="text-red-600">lio</span>
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-red-600 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden block z-10 cursor-pointer"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="bg-black absolute top-0 left-0 flex flex-col w-full h-screen text-white hover:text-red-600  justify-center items-center">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="py-3 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
              >
                <Link
                  to={link}
                  onClick={() => setNav(!nav)}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
