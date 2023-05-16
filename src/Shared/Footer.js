import React from "react";
import { Link } from "react-router-dom";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { AiFillInstagram, AiTwotoneSnippets } from "react-icons/ai";

import logo from "../Assets/logo.png";


const Footer = () => {
  return (
    <footer className="lg:py-10 py-5 bg-black">
      <div className="flex justify-evenly items-center">
        <Link className="text-white hover:scale-125 overflow-hidden  transition-all text-center w-auto">
          <AiTwotoneSnippets className="mx-auto  w-8 h-8" />
          <p className="mt-3 hover:scale-100  hidden lg:block">Stay in touch</p>
        </Link>

        <Link className="text-white hover:scale-125 overflow-hidden  transition-all text-center w-auto">
          <AiFillInstagram className="mx-auto  w-8 h-8" />
          <p className="mt-3 hover:scale-100 hidden lg:block">Be Social</p>
        </Link>

        <Link className="text-white hover:scale-125 overflow-hidden  transition-all  text-center w-auto">
          <img className="lg:w-28 w-20" src={logo} alt="" />
        </Link>

        <Link className="text-white hover:scale-125 overflow-hidden  transition-all text-center w-auto">
          <BsFillQuestionCircleFill className="mx-auto  w-8 h-8" />
          <p className="mt-3 hover:scale-100  hidden lg:block">Get ans</p>
        </Link>
        <Link className="text-white hover:scale-125 overflow-hidden  transition-all text-center w-auto">
          <TiContacts className="mx-auto  w-8 h-8" />
          <p className="mt-3 hover:scale-100  hidden lg:block hover:block">Contact Us</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
