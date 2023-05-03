import React, { useEffect, useRef } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

import testimonial from "../../Assets/testimonial.jpg";

const TestimonialSection = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          autohide: 1,
          modestbranding: 1,
          mute: 1,
          playlist: videoId,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
          },
        },
      });
    };
  }, [videoId]);

  return (
    <section
      class="hero min-h-screen bg bg-cover bg-center"
      style={{ backgroundImage: `url(${testimonial})` }}
    >

      <div className="video-container h-full absolute inset-0 overflow-hidden ">
        <div className="video h-full" ref={playerRef}></div>
      </div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-lg">
          <h2 className="lg:text-7xl text-4xl font-sans font-semibold text-white text-center">
            Proven Success
          </h2>

          <div className="border-2 text-white w-3/4 lg:mb-7 mt-10 rounded mx-auto "></div>

          <div className="">
            <p className="text-2xl font-semibold text-white text-center">
              Our athletes and parents tell our
            </p>
            <p className="text-2xl font-semibold text-white text-center">
              story best.
            </p>
            <p className="text-2xl font-semibold text-white text-center mt-4">
              Watch the video.
            </p>
          </div>

          <div className="text-white flex justify-center mt-6">
            <button class="btn hover:bg-transparent border-0 bg-transparent gap-2 relative group">
              <BsFillPlayCircleFill className="text-red-500 w-10 h-10 bg-transparent"></BsFillPlayCircleFill> 
              {/* <span className="text absolute right-0 hidden group-hover:block">
                  PLAY
                </span> */}
            </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
