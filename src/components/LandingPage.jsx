import React, { useState } from "react";
import image1 from "./Assets/ca.jpg";
import logoecell from "./Assets/logo.jpeg";
import ecell from "./Assets/ecell.JPG";
import img1 from "./Assets/1.jpg";
import img2 from "./Assets/2.jpg";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/3.jpg";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import {Link} from 'react-router-dom'
import "../App.css";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const boardLeaders = [
    {
      name: "Vishal Devsaini",
      position: "President",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Sakskam Chawla",
      position: "Vice President",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Atharva Srivastava",
      position: "Sr. Advisor",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Vansh Taneja",
      position: "Treasurer",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/janesmith",
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        email: "janesmith@example.com",
      },
    },
  ];

  const teamLeaders = [
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/bobwilliams",
        twitter: "https://twitter.com/bobwilliams",
        linkedin: "https://www.linkedin.com/in/bobwilliams",
        email: "bobwilliams@example.com",
      },
    },
  ];

  const responsibilities = [
    {
      title: "Making Entrepreneurial Community",
      description:
        "Creating a group of enthusiastic entrepreneurs. where you will talk about the problem's solution, exchange expertise, and develop your entrepreneurial Mindset.",
      imageUrl: image3, // Replace with your image URL
    },
    {
      title: "Host Workshops,Events and Seminars",
      description:
        "Host engaging and informative workshops, events, and seminars on various aspects of entrepreneurship and innovation. Provide valuable insights and opportunities for students to learn, network, and grow. Share knowledge and inspire future entrepreneurs.",
      imageUrl: img2, // Replace with your image URL
    },
  ];
  const [testimonialActive, setTestimonialActive] = useState(2);

  return (
    <div>
      {/* <!-- Section 1 --> */}
      <section className="w-full px-4 text-gray-700 bg-white sticky top-0 z-10">
        <div className="container flex flex-col flex-wrap items-center justify-between py-2 mx-auto md:flex-row max-w-7xl">
          <div className=" flex flex-col md:flex-row">
            <Link
              to="#_"
            >
              <img src={logoecell} className="mr-2 w-20" />
              </Link>
              <span className="mx-auto my-5 text-3xl font-black leading-none text-black select-none">
                E-Cell Campus Ambassador
              </span>
              </div>
            
            <nav className="flex flex-wrap sm:items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-10    md:border-l md:border-gray-200 ">
              <Link
                to="#_"
                className="mr-8  font-medium leading-6 text-lg text-gray-600 hover:text-orange-500"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="mr-8 font-medium text-lg leading-6 text-gray-600 hover:text-orange-500"
              >
                Dashboard
              </Link>
              <Link
                to="#_"
                className="mr-8 font-medium leading-6 text-lg text-gray-600 hover:text-orange-500"
              >
                Team
              </Link>
              <Link
                to="#about"
                className="mr-8 font-medium leading-6 text-lg text-gray-600 hover:text-orange-500"
              >
                About
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
          

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <Link
              to="/login"
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              Sign up
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- Section 2 --> */}
      <section className="px-2 py-20  md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full item-center md:w-1/3 sm:mb-10 mr-40">
              <div className="w-200 h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl ">
                <img src={image1} />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block text-orange-400 xl:inline">
                    Help Yourself to Build Faster.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Unlock your creative potential and let your digital dreams
                  take flight!
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="forms"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-600 rounded-md sm:mb-0 hover:bg-orange-700 sm:w-auto"
                  >
                    Get Started
                    <BsArrowRightCircleFill className="ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="website-divider-container-884990">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="divider-img-884990"
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

        <section className="about-ecell bg-white  py-10 text-black" id="about">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center  text-black mb-10 mt-5">
              About Ecell
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="flex items-center text-black p-5">
                  <p className=" text-xl text-left leading-relaxed">
                    We are a dynamic and vibrant{" "}
                    <span className="highlight-number">
                      Entrepreneurship Cell Galgotias University
                    </span>{" "}
                    committed to fostering innovation and supporting startups.
                    With a track record of{" "}
                    <span className="highlight-number">100+</span> startups
                    nurtured, we empower entrepreneurs to realize their dreams.
                  </p>
                </div>
                <div className=" flex custom-flex justify-center items-center ">
                  <div
                    className="about-card p-6 bg-orange-300 rounded-lg shadow-lg shadow-red m-10 w-60 "
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FaRocket className="text-2xl text-black-400 mr-6 text-center" />
                    <h2 className="text-xl font-semibold text-center text-black ">
                      100+ Startups
                    </h2>
                  </div>
                  <div
                    className="about-card p-6 bg-orange-300 rounded-lg shadow-lg shadow-red  w-60 "
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FaRocket className="text-2xl text-black-400 mr-6 text-center" />
                    <h2 className="text-xl font-semibold text-center text-black ">
                      800+ Members
                    </h2>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-0 mobile ml-40 ">
                <img
                  src={ecell}
                  alt="Event Image 3"
                  className="shadow-red reflection mb-4 w-150 h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
                />
                {/* Add more event images ass needed */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials */}

      <div className=" items-center p-10 custom_orange z-0">
        <h1 className="text-3xl font-bold text-center  text-black mb-10">
          See what others are saying?
        </h1>

        <div className="p-2">
          <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block"></div>
        </div>

        <div className="bg-orange-100 rounded-3xl">
          <div className="flex flex-col h-full relative">
            <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange-400 fill-current w-12 h-12 md:w-16 md:h-16"
                viewBox="0 0 24 24"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.280.65-.350.208-.086.39-.160.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>
            <div className="h-full relative z-10">
              <div
                style={{ display: testimonialActive === 1 ? "block" : "none" }}
              >
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                E-Cell's Campus Ambassador Program has been an incredible journey. It gave me the platform to connect with like-minded individuals, learn about entrepreneurship, and make a positive impact on my campus. The skills and confidence I gained as a Campus Ambassador have been instrumental in my personal and career growth.
                </p>
              </div>

              <div
                style={{ display: testimonialActive === 2 ? "block" : "none" }}
              >
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                I can't express how grateful I am for the Campus Ambassador Program at E-Cell. It's not just a program; it's a family. The opportunities to organize events, interact with successful entrepreneurs, and contribute to the entrepreneurial ecosystem have been truly fulfilling. E-Cell has empowered me to become a better leader and advocate for entrepreneurship on my campus
                </p>
              </div>

              <div
                style={{ display: testimonialActive === 3 ? "block" : "none" }}
              >
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                Becoming a Campus Ambassador for E-Cell has been a game-changer for me. It provided me with invaluable experiences in event management, networking, and leadership. The program's support and mentorship helped me grow both personally and professionally. I highly recommend it to anyone looking to make a real impact on their campus
                </p>
              </div>
            </div>

            <div className="flex my-4 justify-center items-center">
              <button
                onClick={() => setTestimonialActive(1)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${
                  testimonialActive !== 1
                    ? "h-12 w-12 opacity-25 bg-orange-300 text-gray-600"
                    : "h-16 w-16 opacity-100 bg-orange-600 text-white"
                }`}
              >
                RS
              </button>
              <button
                onClick={() => setTestimonialActive(2)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-orange-600 rounded-full mx-2 ${
                  testimonialActive !== 2
                    ? "h-12 w-12 opacity-25 bg-orange-300 text-gray-600"
                    : "h-16 w-16 opacity-100 bg-orange-600 text-white"
                }`}
              >
                SS
              </button>
              <button
                onClick={() => setTestimonialActive(3)}
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block bg-orange-600 rounded-full mx-2 ${
                  testimonialActive !== 3
                    ? "h-12 w-12 opacity-25 bg-orange-300 text-gray-600"
                    : "h-16 w-16 opacity-100 bg-orange-600 text-white"
                }`}
              >
                AS
              </button>
            </div>

            <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
              <div
                style={{ display: testimonialActive === 1 ? "block" : "none" }}
              >
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                  Rohit Singh
                </h2>
                <small className="text-gray-500 text-xs md:text-sm truncate">
                  Campus Ambassader.
                </small>
              </div>
              <div
                style={{ display: testimonialActive === 2 ? "block" : "none" }}
              >
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                  Suhani Singh
                </h2>
                <small className="text-gray-500 text-xs md:text-sm truncate">
                  Member E-Cell
                </small>
              </div>
              <div
                style={{ display: testimonialActive === 3 ? "block" : "none" }}
              >
                <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">
                  Amogha Singh
                </h2>
                <small className="text-gray-500 text-xs md:text-sm truncate">
                  Campus Ambassador 
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="divider_id" class="website-divider-container-283855">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="divider-img-283855"
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
        <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
          <h1 className="text-4xl font-bold text-center  text-black mb-10 mt-20">
            Incentives and Perks
          </h1>
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16 mb-10">
            {/* <!-- Image --> */}
            <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <img src={img1} className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
            </div>

            {/* <!-- Content --> */}
            <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Certifications
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Unlock the power of certification as a Campus Ambassador and
                pave your path to success with recognized achievements on your
                journey towards leadership and innovation.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-400 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-400 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Speed past your competition
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-400 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Learn the top techniques
                </li>
              </ul>
            </div>
            {/* <!-- End  Content --> */}
          </div>
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
            {/* <!-- Content --> */}
            <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Multiple Rewards
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                Join us as a Campus Ambassador and elevate your journey with
                rewards that fuel your growth and inspire change.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-400 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Automated task management workflow
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-400 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Detailed analytics for your data
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-400 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Some awesome integrations
                </li>
              </ul>
            </div>
            {/* <!-- End  Content --> */}

            {/* <!-- Image --> */}
            <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <img src={img2} className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32 " />
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Section 3 --> */}

      <div id="divider_id" class="website-divider-container-890308">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="divider-img-890308"
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

        <div className=" py-12 mt-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-black mb-2 text-center">
              Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className=" p-6 items-center">
                  <img
                    src={responsibility.imageUrl}
                    alt={`Responsibility ${index + 1}`}
                    className="mb-4 w-96 h-56 rounded-md "
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {responsibility.title}
                  </h3>
                  <p className="text-gray-600">{responsibility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Section 4 --> */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Jam-packed with all the tools you need to succeed!
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  It's never been easier to build a business of your own. Our
                  tools will help you with the following:
                </p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-500">
                      Faster Processing and Delivery
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-500">
                      Out of the Box Tracking and Monitoring
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-500">
                      100% Protection and Security for Your App
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>





 





      <section className="flex items-center justify-center py-20 bg-white min-w-screen">
        <div className="px-16 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
              Don't just take our word for it
            </p>

            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              See what others are saying
            </h2>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">John Doe</h4>
                    <p className="text-gray-600">CEO of Something</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "This is a no-brainer if you want to take your business to the
                  next level. If you are looking for the ultimate toolset, this
                  is it!"
                </blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">Jane Doe</h4>
                    <p className="text-gray-600">CTO of Business</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "Thanks for creating this service. My life is so much easier.
                  Thanks for making such a great product."
                </blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">John Smith</h4>
                    <p className="text-gray-600">Creator of Stuff</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "Packed with awesome content and exactly what I was looking
                  for. I would highly recommend this to anyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

 */}

      <div>
        {/* footer */}

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

export default LandingPage;
