import React from "react";
import Cards from "../../Components/Cards";


const CardSection = () => {
  return (
    <section class="lg:py-10 lg:px-20 px-5 bg-[#B5A773]">
      <div class="hero-content text-center text-neutral-content ">
        <div class="max-w-lg">
          <h2 className="lg:text-7xl text-4xl font-sans font-semibold text-white text-center">
            Get Better
          </h2>

          <div className="border-2 text-white w-3/4 lg:mb-7 mt-10 rounded mx-auto "></div>

          <div className="">
            <p className="text-2xl font-semibold text-white text-center">
              Everything you need to up your <br /> game.
            </p>
            <p className="text-2xl font-semibold text-white text-center mt-5">
              Let's go.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <Cards ></Cards>
    
      </div>
    </section>
  );
};

export default CardSection;
