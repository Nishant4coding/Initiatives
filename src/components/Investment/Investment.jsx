import React, { useState } from "react";
import logoecell from "../Assets/logo.jpeg";
import PastSpeakers from "./PastSpeakers";
import { Link } from "react-router-dom";

import FAQ2 from "./FAQ2";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function Investment() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <section className="w-full px-2 text-gray-700 bg-white sticky top-0 z-10 ">
        <div className="container flex flex-col flex-wrap items-center justify-between py-2 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link
              to="#_"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <img src={logoecell} className="mr-5 w-20" />
              <span className="mx-auto text-3xl font-bold font-black leading-none text-black select-none">
                E-Cell Investment Portal
              </span>
            </Link>
            <nav className="flex flex-wrap sm:items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-20    md:border-l md:border-gray-200 ">
              <Link
                to="/"
                className="mr-20 ml-20 r-0 font-medium leading-6 text-lg text-gray-600 hover:text-orange-500"
              >
                Home
              </Link>
              <Link
                to="#faq      "
                className="mr-20  r-0 font-medium leading-6 text-lg text-gray-600 hover:text-orange-500"
              >
                FAQs
              </Link>
              <Link
                to='https://drive.google.com/file/d/1yHtqQi8lUWNLF48lc19RZjT9KtWeK1NI/view?usp=sharing'
                className="mr-20  r-0 font-medium leading-6 text-lg text-gray-600 hover:text-orange-500"
              >
                Documentation
              </Link>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={toggleDropdown}
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    Initiatives
                    <svg
                      className={`-mr-1 h-5 w-5 text-gray-400 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <Link
                        to="/startupvalidation"
                        className="text-gray-700 block px-4 py-2 text-lg font-semibold"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Startup Validation
                      </Link>
                      <Link
                        to="investment"
                        className="text-gray-700 block px-4 py-2 text-lg font-semibold"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Investment Platform
                      </Link>
                      
                      <form method="POST" action="#" role="none">
                        {/* <button
                type="submit"
                className="text-gray-900 block w-full px-4 py-2 text-left text-lg font-semibold"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Sign out
              </button> */}
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </section>

      <PastSpeakers />
      <div id="faq">
      <FAQ2 />
      </div>

      <footer className="relative bg-white">
        {/* Wavy Shape Divider */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 260"
          className="fill-current text-orange-400"
        >
          <path
            fillOpacity="1"
            d="M0,224L60,229.3C120,235,240,245,360,218.7C480,192,600,128,720,96C840,64,960,64,1080,90.7C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
          <text x="800" y="150" fill="black" className="text-4xl font-bold">
            Contact Us
          </text>
        </svg>

        <div className="container mx-auto px-4 flex flex-col items-center relative z-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-center mb-10 b">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl text-orange-500 font-bold mb-2">
                Entrepreneurship Cell <br /> Galgotias University
              </h2>
              <p className="text-black leading-relaxed">
                Entrepreneurship Cell, Galgotias University strives to stimulate
                and encourage entrepreneurship and innovation, both within
                Entrepreneurship Cell and beyond.
              </p>
            </div>
            <div className="mb-8 md:mb-0 text-center">
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Quick Links
              </h3>
              <nav className="space-y-2">
                <Link
                  to="#"
                  className="text-black hover:text-orange-500 transition duration-300 block"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="text-black hover:text-orange-500 transition duration-300 block"
                >
                  About
                </Link>
                <Link
                  to="#"
                  className="text-black hover:text-orange-500 transition duration-300 block"
                >
                  Events
                </Link>
                <Link
                  to="#"
                  className="text-black hover:text-orange-500 transition duration-300 block"
                >
                  Team
                </Link>
                <Link
                  to="#"
                  className="text-black hover:text-orange-500 transition duration-300 block"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Contact Us
              </h3>
              <div className="flex items-center mb-4">
                <FaPhone className="mr-2 text-orange-500" />
                <span>(406) 555-0120</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-2 text-orange-500" />
                <Link
                  to="mailto:ecell@galgotiasuniversity.edu.in"
                  className="hover:text-orange-500 transition duration-300"
                >
                  ecell@galgotiasuniversity.edu.in
                </Link>
              </div>
              <div className="flex items-center">
                <MdLocationPin className="text-5xl mr-2 text-orange-500" />
                <p className="text-left">
                  Plot No.2, Sector 17-A Yamuna Expressway, Greater Noida,
                  Gautam Buddh Nagar, Uttar Pradesh, India Opposite Buddh
                  International Circuit.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-black mb-10">
            © 2023 Entrepreneurship Cell, Galgotias University. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Investment;
