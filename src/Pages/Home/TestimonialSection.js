import React, {  useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

import testimonial from "../../Assets/testimonial.jpg";
import bannerImage from '../../Assets/banner/bannerImg.png'
import bannerVideo from '../../Assets/banner/basketball.mp4'

const TestimonialSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);



  return (
    <section
      class="banner min-h-screen bg bg-cover bg-center"
      style={{ backgroundImage: `url(${testimonial})` }}
    >
      {!videoLoaded && (
        <img src={bannerImage} alt="banner" />
      )}
      <video
      className="bg-cover banner_video_full"
        autoPlay
        muted
        loop
        playsInline
        poster={bannerImage}
        onLoad={()=> setVideoLoaded(false)}
      >
        <source src={bannerVideo} type="video/mp4" />
     
      </video>

      <div class="expert-content flex justify-center items-center w-full">
        <div class="max-w-lg ">
          <h2 className="lg:text-7xl md:text-5xl text-4xl font-sans font-semibold text-white text-center">
            Proven Success
          </h2>

          <div className="border-2 text-white w-3/4  lg:mb-7 lg:mt-10 my-4 rounded mx-auto "></div>

          <div className="">
            <p className="lg:text-2xl text-xl font-semibold text-white text-center">
              Our athletes and parents tell our
            </p>
            <p className="lg:text-2xl text-xl font-semibold text-white text-center">
              story best.
            </p>
            <p className="lg:text-2xl text-xl font-semibold text-white text-center mt-4">
              Watch the video.
            </p>
          </div>

          <div className="text-white flex justify-center mt-6">
            <button onClick={() => setVideoLoaded(true)} class="btn hover:bg-transparent border-0 bg-transparent gap-2 relative group">
            
              <BsFillPlayCircleFill className="text-red-500 w-10 h-10 bg-transparent"></BsFillPlayCircleFill> 
           
            </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
