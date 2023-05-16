import React, { useEffect, useRef } from "react";
import { GrStar } from "react-icons/gr";
import logo from "../../Assets/logo.png";

const AgeSection = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const stars = starsRef.current.children;
    const numStars = stars.length;
    const angleIncrement = (2 * Math.PI) / numStars;
    const radius = 140;
    const circleCenterX = 0;
    const circleCenterY = 0;

    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 2;
      const isVisible = (starbottom) => starbottom < triggerBottom;

      Array.from(stars).forEach((star, index) => {
        const angle = index * angleIncrement;
        const starTop = star.getBoundingClientRect().bottom;
        const starX = circleCenterX + radius * Math.cos(angle);
        const starY = circleCenterY + radius * Math.sin(angle);

        star.style.transform = `translate(${starX}px, ${starY}px)`;
        star.style.transitionDelay = `${index * 0.2}s`;
        star.style.opacity = isVisible(starTop) ? 1 : 0;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-black lg:px-20 lg:pt-16 pt-8 text-white">
      <div className="lg:flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="lg:text-8xl md:text-7xl text-6xl tracking-widest font_arial font-black text-white ">
            WATTS
          </h1>
          <h1 className="lg:text-7xl md:text-6xl text-5xl tracking-wide font_arial font-bold  text-white lg:mt-5 mt-2">
            BASKETBALL
          </h1>
        </div>
        <div className="border-2  w-3/4 lg:my-8 my-3 rounded mx-auto "></div>

        <div className="lg:px-20 md:px-10">
          <p className="lg:text-3xl md:text-2xl text-xl  text-center font_para">
            Gamechangers. For Life. Come run with us!
          </p>

          <div className="circle-container">
            <div className="circle">
              <div className="stars" ref={starsRef}>
                <GrStar className="star">9</GrStar>
                <GrStar className="star">10</GrStar>
                <GrStar className="star">11</GrStar>
               <img className=" star w-20 h-20" src={logo} alt="Logo" />
                <GrStar className="star">1</GrStar>
                <GrStar className="star">2</GrStar>
                <GrStar className="star">3</GrStar>
                <GrStar className="star">4</GrStar>
                <GrStar className="star">5</GrStar>
                <GrStar className="star">6</GrStar>
                <GrStar className="star">7</GrStar>
                <GrStar className="star">8</GrStar>
              </div>
              <div className="year ease-in transition-all delay-500">
                <h1 className=" text-9xl font-semibold ">10</h1>
              </div>
            </div>
          </div>

          <p className="lg:text-5xl text-3xl font-bold text-center italic lg:mt-10 mt-3 font_year">
            10 Years Strong
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgeSection;
