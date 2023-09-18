import React, { useState } from "react";
import {
  FaUser,
  FaCertificate,
  FaTasks,
  FaHome,
  FaChalkboardTeacher,
  FaFacebook,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import {GoTasklist} from 'react-icons/go'
import {SiOpslevel} from 'react-icons/si'
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'

import { RiCoinsLine } from "react-icons/ri";
import UserProfile from "./UserProfile"; // Import the UserProfile component
import { BsCalendarEventFill, BsListTask } from "react-icons/bs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); // 'dashboard', 'profile', or 'task'

  // Function to set the active tab to 'profile'
  const showUserProfile = () => {
    setActiveTab("profile");
  };
  const showTask = () => {
    setActiveTab("task");
  };

  // Function to set the active tab to 'dashboard'
  const showDashboard = () => {
    setActiveTab("dashboard");
  };

  return (
    <div className="bg-gray-300">
      <div className="flex h-screen bg-gray-100 bg-opacity-0 rounded-r-2xl p-5">
        {/* Sidebar */}
        <aside className="bg-orange-200 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition-transform duration-200 ease-in-out rounded-l-2xl">
          {/* Sidebar Tabs */}
          <div className="text-center">
            <img
              src="user-avatar.jpg" // Replace with the path to your user's image
              alt="User Avatar"
              className="w-40 h-40 rounded-full mx-auto mb-2 bg-white"
            />
            <h1 className="text-xl font-semibold text-black mb-3">
              Ayush Agarwal
            </h1>
            <p className="text-black font-bold text-xl">Campus Ambassador</p>
          </div>
          <ul className="mt-8 rounded-2xl ">
            <li
              className={`px-10 py-2 bg-orange-100 hover:bg-orange-400 text-black font-semibold text-lg  rounded-xl mb-5 ${
                activeTab === "dashboard" ? "bg-orange-400" : ""
              }`}
            >
              <Link to="#" className="block" onClick={showDashboard}>
                <FaChalkboardTeacher className="inline-block mr-2" /> Dashboard
              </Link>
            </li>
            {/* <li
              className={`px-10 py-2 hover:bg-orange-400 text-black font-semibold text-lg  rounded-2xl mb-5 ${
                activeTab === "profile" ? "bg-orange-400" : ""
              }`}
            >
              <Link to="#" className="block" onClick={showUserProfile}>
                <FaUser className="inline-block mr-2" /> Profile
              </Link>
            </li> */}

            <li
              className={`px-10 py-2 bg-orange-100 hover:bg-orange-400 text-black font-semibold text-lg rounded-2xl ${
                activeTab === "task" ? "bg-orange-400" : ""
              }`}
            >
              <Link to="#" className="block" onClick={showTask}>
                <FaTasks className="inline-block mr-2" /> Tasks
              </Link>
            </li>
            {/* Add more tabs as needed */}
          </ul>
          <div className="mt-20">
            <Link
              to="/"
              className="px-4 py-2 text-lg rounded-2xl mb-0    w-auto text-black"
            >
              <FaHome className="inline-block mr-2 " /> Home
            </Link>
            <Link
              to="/"
              className="px-4 py-2 text-lg rounded-2xl mb-0  bottom-10  w-auto text-black"
            >
              <FaLongArrowAltLeft className="inline-block mr-2" /> LogOut
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden rounded-r-2xl bg-white  p-5">
          {/* Conditional rendering based on activeTab */}
          {activeTab === "profile" ? (
            <UserProfile />
          ) : activeTab === "task" ? (
            /* Tasks Timeline */
            <div class="container bg-orange-200 bg-opacity-60 mx-auto w-full h-full">
              <div class="relative wrap overflow-scroll p-10 h-full">
                <div
                  class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                  style={{ left: " 50%" }}
                ></div>

                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800  shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                  </div>
                  <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Task 1</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 font-bold text-opacity-100">
                      Post about your role as a Campus Ambassador for E-Cell on
                      LinkedIn
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                  </div>
                  <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-white text-xl">Task 2</h3>
                    <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                      Organize an awareness workshop on entrepreneurship and
                      innovation
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                  </div>
                  <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Task 3</h3>
                    <p class="text-sm leading-snug tracking-wide font-bold text-gray-900 text-opacity-100">
                      Make a well-known community for the Entrepreneur in your
                      college
                    </p>
                  </div>
                </div>

                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                  </div>
                  <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-white text-xl">Task 4</h3>
                    <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                      Release Soon...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Achievement Cards */
            <div className="flex-1 overflow-x-hidden overflow-y-auto  mt-2 rounded-2xl h-auto">
              <div className="container mx-auto px-6 py-4">
                <div className="h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200 to-orange-400 rounded-lg p-6 max-h-[100%] w-auto flex items-center space-x-4">
                  <div className="mr-32">
                    <h3 className="text-2xl font-semibold">
                      Name: Ayush Agarwal
                    </h3>
                    <h3 className="text-2xl font-semibold">
                      Institution Name: NSUT
                    </h3>
                    <p className="text-xl">Campus Ambassador L-1</p>
                    <p>Student Id: 004</p>
                  </div>
                  <div className="flex  items-center space-x-5 ">
                    {/* Add social media icons here */}
                    <div className="flex justify-center items-center rounded-full w-20 h-20 bg-orange-100">
                      <Link to="#" className="text-blue-500">
                        <FaLinkedin className="text-5xl" />{" "}
                        {/* LinkedIn icon */}
                      </Link>
                    </div>
                    <div className="flex justify-center items-center rounded-full w-20 h-20 bg-orange-100">
                      <Link to="#" className="text-blue-400">
                        <FaTwitter className="text-5xl" /> {/* Twitter icon */}
                      </Link>
                    </div>
                    <div className="flex justify-center items-center rounded-full w-20 h-20 bg-orange-100">
                      <Link to="#" className="text-red-500">
                        <FaInstagram className="text-5xl" />{" "}
                        {/* Instagram icon */}
                      </Link>
                    </div>
                    <div className="flex justify-center items-center rounded-full w-20 h-20 bg-orange-100">
                      <Link to="#" className="text-blue-500">
                        <FaFacebook className="text-5xl" />{" "}
                        {/* Instagram icon */}
                      </Link>
                    </div>
                    {/* Add more social media icons as needed */}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10 mb-10">
                  {/* Display achievement cards here */}
                  <div className="h-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200 to-orange-400 rounded-lg p-2 max-h-[100%]">
                    <div className="flex flex-column items-center">
                      <SiOpslevel className="text-4xl" /> &nbsp; &nbsp; 
                    <h3 className="text-xl font-semibold">Current Level</h3>
                    </div>
                    
                    <p>Level-2</p>
                  </div>
                  <div className="h-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200 to-orange-400 rounded-xl p-3">
                    <div className="flex flex-column  items-center">
                      <BsCalendarEventFill className="5xl"/> &nbsp; &nbsp;  
                    <h3 className="text-xl font-semibold">Event Hosted</h3>
                    </div>
                    <p>Workshop, Ideathon</p>
                  </div>
                  <div className="h-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200 to-orange-400 rounded-xl p-2  ">
                    <div className="flex flex-column items-center">
                      <BsListTask className="text-3xl mt-1"/> &nbsp; &nbsp; 
                    <h3 className="text-xl font-semibold">Tasks Completed</h3>
                    </div>
                    
                    <p>2 weekly tasks</p>
                  </div>
                  {/* Add more achievement cards */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mt-4 mb-4">
                  <div className="h-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200 to-orange-400 rounded-lg p-6 max-h-[100%] flex flex-column justify-center items-center h-full">
                    <GrCertificate className="text-6xl " /> &nbsp;&nbsp;&nbsp;
                    <h3 className="text-xl font-semibold ">
                      Certificates Earned
                    </h3>{" "}
                    &nbsp;&nbsp;&nbsp;
                    <p>Campus Ambassador, Workshop, Ideathon</p>
                  </div>
                  <div className="h-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200 to-orange-400 rounded-lg p-6 max-h-[100%] flex flex-column justify-center items-center h-full">
                    <RiCoinsLine className="text-6xl" /> &nbsp;&nbsp;&nbsp;
                    <h3 className="text-xl font-semibold"> Reward Points</h3>
                    &nbsp;&nbsp;&nbsp;
                    <p>Campus Ambassador, Workshop, Ideathon</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
