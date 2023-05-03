import React, { useEffect, useRef } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
// import useVideoBackground from "../../Hooks/useVideoBackground";

const ExpertCoachSection = ({ videoId }) => {
  // const playerRef = useVideoBackground(videoId);
  // console.log(playerRef);
  const playerRef = useRef(null);
  console.log(videoId);

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
    <section class="hero min-h-screen">
      <div class="hero-overlay bg-opacity-40"></div>
      <div className="video-container h-full absolute inset-0 overflow-hidden ">
        <div className="video h-full" ref={playerRef}></div>
      </div>
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
