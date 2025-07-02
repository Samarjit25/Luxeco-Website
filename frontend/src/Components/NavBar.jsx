import React, { useState } from "react";
import { data } from "../Pages/restapi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-600 tracking-wider">
          LuxeEco
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {data[0].navbarLinks.map((element) => (
            <Link
              key={element.id}
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-emerald-500 font-medium transition"
            >
              {element.title}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="md:hidden bg-white px-6 pb-6 pt-2 shadow-md">
          <div className="flex flex-col gap-4">
            {data[0].navbarLinks.map((element) => (
              <Link
                key={element.id}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setShow(false)}
                className="cursor-pointer text-gray-700 hover:text-emerald-500 font-medium transition"
              >
                {element.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
