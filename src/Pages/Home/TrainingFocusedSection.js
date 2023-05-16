import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

import training from '../../Assets/practice.gif'

const TrainingFocusedSection = () => {
  return (
    <section className="hero min-h-screen bg-[#0F0E0E] sm:py-10">
      <div className="hero-content flex-col lg:flex-row p-0 m-0">
        <div className="basis-1/2 flex justify-center items-center h-full">
          <img className="flex cover" src={training} alt='Training' />
        </div>

        <div className="basis-1/2">
          <h2 className="lg:text-7xl md:text-5xl text-4xl font_heading font-semibold text-[#FEBA11] text-center">
            Training
          </h2>
          <h2 className="lg:text-7xl md:text-5xl text-4xl  lg:mt-5 mt-2 font_heading font-semibold text-[#FEBA11] text-center">
            Focused
          </h2>

          <div className="border-2 border-yellow-500 w-3/4 lg:my-10 my-5 rounded mx-auto "></div>

          <div className=" px-5">
            <p className="lg:text-2xl text-xl text-yellow-400 text-center font_para">
              A training academy, first and foremost.
            </p>

            <p className="lg:text-2xl text-xl text-yellow-400 text-center lg:mt-5 mt-3 font_para">
              Your growth is our most important <br /> goal.
            </p>
          </div>

          <div className="text-yellow-400 lg:flex justify-center items-center lg:mt-10 mt-5 mx-auto ">
            <button className=" flex justify-center items-center lg:gap-2 gap-1 hover:  mx-auto font_para">
              {" "}
              <a href="/">Learn about training</a> <BsBoxArrowUpRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingFocusedSection;
