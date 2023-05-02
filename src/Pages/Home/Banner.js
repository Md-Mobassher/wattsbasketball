import React, { useEffect, useRef } from 'react';
import BannerText from './BannerText';

const Banner = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
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
    <div className="banner h-screen relative">
      <div className="video-container h-full absolute inset-0 overflow-hidden ">
        <div className="video h-full" ref={playerRef}></div>
      </div>

      <div className=" banner-content flex justify-center items-center">
        <BannerText />
      </div>

    </div>
  );
};

export default Banner;
