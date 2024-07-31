import { NavLink } from "react-router-dom";
import "flowbite";
import { useState } from "react";

function Navbar() {
  const [padding, setPadding] = useState(true);

  function activeLink(active) {
    return active
      ? "block py-2 px-3 text-white rounded-lg font-bold bg-[#1abc9c] "
      : "block py-2 px-3 text-white rounded-lg font-bold";
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 30) {
      setPadding(false);
    } else {
      setPadding(true);
    }
  });

  return (
    <nav
      className={`bg-[#2c3e50]   fixed top-0 right-0 left-0 z-50 transition-all duration-700 ${
        padding ? "py-5" : "py-1"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3  ">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl md:text-[32px]  font-bold whitespace-nowrap text-white">
            START FRAMEWORK
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-4 focus:ring-black"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto  transition-all duration-500"
          id="navbar-default"
        >
          <ul className=" font-medium flex flex-col px-2 gap-4 lg:gap-0 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0   ">
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => activeLink(isActive)}
                aria-current="page"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="portfolio"
                className={({ isActive }) => activeLink(isActive)}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) => activeLink(isActive)}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
