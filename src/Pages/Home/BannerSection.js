import React, { useEffect, useState } from "react";
import bannerLeftImage from "../../Assets/banner/bannerLeftImg.png";
import bannerRightImage from "../../Assets/banner/bannerRightImg.png";
import bannerVideoBoy from "../../Assets/banner/bannerboy.mp4";
import bannerVideoGirl from "../../Assets/banner/bannergirl.mp4";
import logo from "../../Assets/logo.png";
import { ParallaxBanner } from "react-scroll-parallax";

const Banner = () => {
  const [videoloaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const logo = document.querySelector(".logo");
    const distance = window.pageYOffset;
    logo.style.opacity = 1 - distance / 5000;
  };

  const gradientOverlay = {
    opacity: [0, 0.5],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[gradientOverlay]}
      className="banner relative min-h-screen overflow-hidden"
    >
      <div className="banner-background ">
        {!videoloaded && <img src='' alt=''/>}
        <video
          className=" banner_video_left "
          autoPlay
          muted
          loop
          playsInline
          poster={bannerLeftImage}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={bannerVideoBoy} type="video/mp4" />
        </video>
        <video
          className=" banner_video_right"
          autoPlay
          muted
          loop
          playsInline
          poster={bannerRightImage}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={bannerVideoGirl} type="video/mp4" />
        </video>
      </div>

      <div className="banner-background lg:flex flex-col items-center justify-between ">
        <div className="fixed inset-0 lg:top-16 top-2 left-2 right-2 ">
          <h1 className="lg:text-9xl md:text-8xl text-7xl tracking-widest font-sans arial font-black text-white ">
            WATTS
          </h1>
          <h1 className="lg:text-8xl md:text-6xl text-6xl tracking-wide font-sans font-bold  text-white ">
            BASKETBALL
          </h1>
          <h3 className="lg:text-5xl md:text-4xl text-3xl mt-4 font-sans tracking-wider text-white">
            TRAINING ACADEMY
          </h3>
          <h2 className="lg:text-6xl md:text-5xl text-4xl mt-5 font-sans italic font-bold text-[#FEBA11] ">
            Success Is A Habit
          </h2>
        </div>
      </div>

      <div className="logo top-96 left-60 lg:translate-x-96 lg:-translate-y-64 md:translate-x-36  md:-translate-y-52 ">
        <img src={logo} alt="Logo" />
      </div>
    </ParallaxBanner>
  );
};

export default Banner;
