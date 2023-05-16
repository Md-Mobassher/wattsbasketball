import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";

import player from "../Assets/teams.jpg";

const Navbar = ({ children }) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleMouseOver = () => {
    setShowDiv(true);
  };
  const handleToggle = () => {
    setShowDiv((prev) => !prev);
  };

  const handleMouseOut = () => {
    setShowDiv(false);
  };

  return (
    <nav className="">
      {/* larger device */}
      <div className="hidden fixed top-0 right-0 z-50 overflow-hidden   lg:block md:block mr-3 ">
        <div className="  flex overflow-hidden ">
          <p className="h-6 hover:h-12 bg-red-500 hover:bg-white px-2 hover:py-3 text-white hover:text-red-500 rounded-b-lg hover:cursor-pointer mr-2 shadow-lg border-b-2 border-b-red-800  border-l-1 ">
            Home
          </p>
          <p className="h-6 hover:h-12 bg-red-500 hover:bg-white px-2 hover:py-3 text-white hover:text-red-500 rounded-b-lg hover:cursor-pointer mr-2 shadow-lg border-b-2 border-b-red-800  border-l-1 ">
            Register
          </p>
          <p
            onMouseOver={handleMouseOver}
            className="h-6 bg-red-500 hover:bg-white px-2 text-white hover:text-red-500 rounded-b-lg  hover:cursor-pointer border-b-2 border-b-red-800 shadow-lg "
          >
            Explore
          </p>
        </div>
      </div>

      {showDiv && (
        <div onMouseLeave={handleMouseOut}>
          <div class=" py-10 pt-10 px-5 lg:w-4/5 w-full bg-white fixed top-0 right-0 z-10 rounded-bl-2xl">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <Link className="hover:bg-red-600 px-4 py-2 hover:shadow-lg rounded-lg hover:text-white ">
                <div class="avatar flex justify-start items-center gap-2">
                  <div class="lg:w-24 w-16 rounded-full ">
                    <img src={player} alt="avatar" />
                  </div>
                  <p className="lg:text-2xl text-xl font-semibold">Training</p>
                </div>
              </Link>
              <Link className="hover:bg-red-600 px-4 py-2 hover:shadow-lg rounded-lg hover:text-white ">
                <div class="avatar flex justify-start items-center gap-2">
                  <div class="lg:w-24 w-16 rounded-full ">
                    <img src={player} alt="avatar" />
                  </div>
                  <p className="lg:text-2xl text-xl font-semibold">Teams</p>
                </div>
              </Link>
              <Link className="hover:bg-red-600 px-4 py-2 hover:shadow-lg rounded-lg hover:text-white ">
                <div class="avatar flex justify-start items-center gap-2">
                  <div class="lg:w-24 w-16 rounded-full ">
                    <img src={player} alt="avatar" />
                  </div>
                  <p className="lg:text-2xl text-xl font-semibold">
                    Camps & Clinic
                  </p>
                </div>
              </Link>
              <Link className="hover:bg-red-600 px-4 py-2 hover:shadow-lg rounded-lg hover:text-white ">
                <div class="avatar flex justify-start items-center gap-2">
                  <div class="lg:w-24 w-16 rounded-full ">
                    <img src={player} alt="avatar" />
                  </div>
                  <p className="lg:text-2xl text-xl font-semibold">Coaches</p>
                </div>
              </Link>
              <Link className="hover:bg-red-600 px-4 py-2 hover:shadow-lg rounded-lg hover:text-white ">
                <div class="avatar flex justify-start items-center gap-2">
                  <div class="lg:w-24 w-16 rounded-full ">
                    <img src={player} alt="avatar" />
                  </div>
                  <p className="lg:text-2xl text-xl font-semibold">About</p>
                </div>
              </Link>
              <Link className="hover:bg-red-600 px-4 py-2 hover:shadow-lg rounded-lg hover:text-white ">
                <div class="avatar flex justify-start items-center gap-2">
                  <div class="lg:w-24 w-16 rounded-full ">
                    <img src={player} alt="avatar" />
                  </div>
                  <p className="lg:text-2xl text-xl font-semibold">FAQs</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* small device */}
      <div
        onClick={handleToggle}
        className="block fixed top-3 right-3 z-50 overflow-hidden   lg:hidden md:hidden text-gray-200 p-2 hover:cursor-pointer hover:bg-gray-500 hover:text-white rounded-lg"
      >
        {
          showDiv ? <p className=" text-center font-semibold text-xl px-2">X</p> : <AiOutlineAppstore className=" w-7 h-7  " />
        }
        
      </div>
    </nav>
  );
};

export default Navbar;
