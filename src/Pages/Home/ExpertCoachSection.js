import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";


const ExpertCoachSection = () => {
  
  return (
    <section class="hero min-h-screen">
      <div class="hero-overlay bg-opacity-40"></div>

      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-lg">
          <h2 className="lg:text-7xl text-4xl font-sans font-semibold text-white text-center">
            Expert Coaches
          </h2>

          <div className="border-2 text-white w-3/4 lg:mb-7 mt-10 rounded mx-auto "></div>

          <div className="">
            <p className="text-2xl font-semibold text-white text-center">
              Accomplished, experienced{" "}
            </p>
            <p className="text-2xl font-semibold text-white text-center">
              & passionate.
            </p>
            <p className="text-2xl font-semibold text-white text-center mt-4">
              Your success is our success.
            </p>
          </div>

          <div className="text-white flex justify-center mt-6">
            <button className=" flex justify-center items-center gap-2 ">
              <a href="/" className="font-semibold">
                Learn about our coaches
              </a>
              <BsBoxArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertCoachSection;
