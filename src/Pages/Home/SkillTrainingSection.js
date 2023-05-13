import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
// import { FaDribbble } from "react-icons/fa";
import basketball from "../../Assets/ball.png";
import { Parallax, useParallax } from "react-scroll-parallax";

const SkillTraining = () => {
  const { ref } = useParallax({
    opacity: [0.5, 1.5],
    easing: "easeInOutCubic",
  });

  // const {text} = useParallax({
  //   translateY: [-100, 100, 'easeInOut'],
  //   scale: [0, 1, 'easeOutBack'],
  // });

  const gradientOverlay = {
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-blue-900" />
    ),
  };

  return (
    <Parallax layers={[gradientOverlay]}>
      <section
        ref={ref}
        className="hero min-h-screen bg-gradient-to-tr from-blue-900 to-indigo-800
        relative overflow-hidden">
        <div className="hero-content flex-col lg:flex-row">
          <div className="basis-1/2 mask mask-circle flex justify-center items-center h-full">
            <img
              class="mask mask-circle text-white"
              src={basketball}
              alt="Basketball"
            />
            {/* <FaDribbble className='w-96 h-96 text- text-white' /> */}
          </div>
          <div  className="basis-1/2 flex flex-col justify-end flex-grow">
            <h2 className="lg:text-7xl md:text-5xl text-4xl font-sans font-semibold text-[#FEBA11] text-center">
              Skills Training
            </h2>
            <h2 className="lg:text-7xl md:text-5xl text-4xl  lg:mt-5 mt-2 font-sans font-semibold text-[#FEBA11] text-center">
              & Team Play
            </h2>

            <div className="border-2 border-yellow-500 w-3/4 lg:my-10 my-5 rounded mx-auto "></div>

            <div className="lg:px-20 md:px-10 px-5">
              <p className="lg:text-2xl text-xl text-yellow-400 text-center">
                Based on fundamentals, hard work, teamwork & sportsmanship. For
                athletes at all levels. Success is a habit.
              </p>
            </div>
            <div className="text-yellow-400 lg:flex justify-center items-center lg:mt-10 mt-5 mx-auto lg:x-20">
              <button className="lg:mr-10 flex justify-center items-center lg:gap-2 gap-1 hover:  mx-auto">
                {" "}
                <a href="/">Learn about training</a> <BsBoxArrowUpRight />{" "}
              </button>

              <button className="lg:mr-10 mt-3 lg:mt-0 flex justify-center items-center lg:gap-2 gap-1 hover:  mx-auto">
                {" "}
                <a href="/">Learn about team play</a> <BsBoxArrowUpRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default SkillTraining;
