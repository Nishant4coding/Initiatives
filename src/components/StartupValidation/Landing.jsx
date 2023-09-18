import React, { useState } from "react";
import logoecell from "../Assets/logo.png";
import f1 from "../Assets/feature1.jpg";
import f2 from "../Assets/feature2.png";
import f3 from "../Assets/feature3.png";
import validation from "../Assets/validate.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import FAQs from "./FAQs";
import {Link} from 'react-router-dom'

function Landing() {
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
              <img src={logoecell} className="mr-5" />
              <span className="mx-auto text-3xl font-bold font-black leading-none text-black select-none">
                E-Cell Startup Validation
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
                to="#faq"
                className="mr-20  r-0 font-medium leading-6 text-lg text-gray-600 hover:text-orange-500"
              >
                FAQs
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
                        to="/investment"
                        className="text-gray-700 block px-4 py-2 text-lg font-semibold"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Investment Platform
                      </Link>
                      <Link
                        to="eresource"
                        className="text-gray-700 block px-4 py-2 text-lg font-semibold"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        E-Resourses
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
      <div className=" min-h-screen">
        {/* Navigation */}

        {/* Hero Section */}
        <section className="custom_orange py-10 text-black">
          <div className="container mx-auto flex items-center justify-between">
            <div className="w-1/2   ">
              <h1 className="text-4xl font-bold mb-4 ml-20">
                Startup Validation Platform
              </h1>
              <p className="text-lg mb-8 ml-32">
                Validate your startup idea with real user feedback.
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to="/validationform"
                  className="bg-orange-300 text-black hover:bg-orange-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src={validation}
                alt="Startup Validation Image"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <div id="divider_id" class="website-divider-container-365285">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="divider-img-365285"
            viewBox="0 0 1080 137"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,137 V 59.03716 c 158.97703,52.21241 257.17659,0.48065 375.35967,2.17167 118.18308,1.69101 168.54911,29.1665 243.12679,30.10771 C 693.06415,92.25775 855.93515,29.278599 1080,73.61449 V 137 Z"
              style={{ opacity: "0.85" }}
            ></path>
            <path
              d="M 0,10.174557 C 83.419822,8.405668 117.65911,41.78116 204.11379,44.65308 290.56846,47.52499 396.02558,-7.4328 620.04248,94.40134 782.19141,29.627636 825.67279,15.823104 1080,98.55518 V 137 H 0 Z"
              style={{ opacity: "0.5" }}
            ></path>
            <path
              d="M 0,45.10182 C 216.27861,-66.146913 327.90348,63.09813 416.42665,63.52904 504.94982,63.95995 530.42054,22.125806 615.37532,25.210412 700.33012,28.295019 790.77619,132.60682 1080,31.125744 V 137 H 0 Z"
              style={{ opacity: "0.25" }}
            ></path>
          </svg>

          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto text-center mt-5">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-6 rounded-lg">
                  {/* Feature Icon */}
                  <img src={f1} className="w-96" />
                  <h3 className="text-xl font-semibold mb-2">
                    {" "}
                    Expert Idea Validation
                  </h3>
                  <p className="text-gray-600">
                    we are the experts in idea validation. We have a proven
                    track record of helping entrepreneurs and businesses
                    validate their ideas effectively.
                  </p>
                </div>

                {/* Feature 2 (Repeat as needed) */}
                <div className="bg-white  p-6 rounded-lg">
                  {/* Feature Icon */}
                  <img src={f2} className="w-96" />
                  <h3 className="text-xl font-semibold mb-2">
                    Data-Driven Insights
                  </h3>
                  <p className="text-gray-600">
                    We believe in the power of data. When you choose us, you
                    gain access to data-driven insights that provide a clear
                    understanding of your idea's feasibility.
                  </p>
                </div>

                {/* Feature 3 (Repeat as needed) */}
                <div className="bg-white  p-6 rounded-lg">
                  {/* Feature Icon */}
                  <img src={f3} className="w-96 h-52" />
                  <h3 className="text-xl font-semibold mb-2">
                    Customized Validation Strategies
                  </h3>
                  <p className="text-gray-600">
                    Unique ideas deserve customized validation. Our tailored
                    approach addresses your goals and challenges.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <FAQs />

        {/* Signup Section */}

        {/* Footer */}
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
                  Entrepreneurship Cell, Galgotias University strives to
                  stimulate and encourage entrepreneurship and innovation, both
                  within Entrepreneurship Cell and beyond.
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
    </div>
  );
}

export default Landing;
