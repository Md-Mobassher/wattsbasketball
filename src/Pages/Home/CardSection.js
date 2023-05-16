import React from "react";
import Cards from "../../Components/Cards";


const CardSection = () => {
  return (
    <section class="lg:py-10 py-10 lg:px-20 px-5 bg-[#B5A773]">
      <div class="hero-content text-center text-neutral-content ">
        <div class="max-w-lg">
          <h2 className="lg:text-7xl md:text-5xl text-4xl font_heading font-semibold text-white text-center">
            Get Better
          </h2>

          <div className="border-2 text-white w-3/4 lg:my-7 my-5 rounded mx-auto "></div>

          <div className="">
            <p className="lg:text-2xl text-xl font-semibold text-white text-center font_para">
              Everything you need to up your <br className="hidden lg:block" /> game.
            </p>
            <p className="lg:text-2xl text-xl font-semibold text-white text-center lg:mt-5 mt-3 font_para">
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
