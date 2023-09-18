import React from "react";
import loginsignup from "./Assets/login-signup.jpg";
import logoecell from "./Assets/logo.png";
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
      <section className="w-full px-4 text-gray-700 bg-white sticky top-0 z-10 ">
        <div className="container flex flex-col flex-wrap items-center justify-between py-2 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link
              to="#_"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <img src={logoecell} className="mr-5" />
              <span className="mx-auto text-3xl font-black leading-none text-black select-none">
                E-Cell Campus Ambassador
              </span>
            </Link>
            <nav className="flex flex-wrap sm:items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-20    md:border-l md:border-gray-200 ">
              <Link
                to="#_"
                className="mr-40 ml-20 r-0 font-medium leading-6 text-lg text-gray-600 hover:text-orange-500"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="mr-10 font-medium text-lg leading-6 text-gray-600 hover:text-orange-500"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </section>

      <section className="h-screen flex flex-col md:flex-row justify-center space-y-0 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img src={loginsignup} alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <Link
              className="text-orange-600 hover:text-orange-700 hover:underline hover:underline-offset-4"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-orange-600 hover:bg-orange-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to="signup"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
