import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="lg:pb-20 lg:px-14 py-5 bg-black">
      <div className="flex justify-evenly items-center">
        <div className="text-white hover:scale-125 overflow-hidden  transition-all text-center w-auto">
          <BsBoxArrowUpRight className="mx-auto  w-8 h-8" />
          <p className="mt-3 hover:scale-100">Stay in touch</p>
        </div>

        <div className="text-white hover:scale-125 overflow-hidden  transition-all text-center w-auto">
          <BsBoxArrowUpRight className="mx-auto  w-8 h-8" />
          <p className="mt-3 hover:scale-100">Be Social</p>
        </div>

        <div className="text-white hover:scale-125 overflow-hidden  transition-all  text-center w-auto">
          <img className="w-28" src={logo} alt="" />
        </div>

        <div className="text-white hover:scale-125 overflow-hidden  transition-all text-center w-auto">
          <BsBoxArrowUpRight className="mx-auto  w-8 h-8" />
          <p className="mt-3 hover:scale-100">Get ans</p>
        </div>
        <div className="text-white hover:scale-125 overflow-hidden  transition-all text-center w-auto">
          <BsBoxArrowUpRight className="mx-auto  w-8 h-8" />
          <p className="mt-3 hover:scale-100">Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
