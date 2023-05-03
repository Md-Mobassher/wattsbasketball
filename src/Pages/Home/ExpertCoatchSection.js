import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
// import useVideoBackground from "../../Hooks/useVideoBackground";

const ExpertCoatchSection = ({ videoId }) => {
//   const playerRef = useVideoBackground(videoId);

  return (
    <div class="hero min-h-screen">
      {/* <div className="video-container h-full absolute inset-0 overflow-hidden ">
        <div className="video h-full" ref={playerRef}></div>
      </div> */}

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
              {" "}
              <a href="/" className="font-semibold">
                Learn about training
              </a>{" "}
              <BsBoxArrowUpRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCoatchSection;
