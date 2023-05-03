import React from 'react';
import BannerText from './BannerText';
import useVideoBackground from '../../Hooks/useVideoBackground';

const Banner = ({ videoId }) => {
  const playerRef = useVideoBackground(videoId)


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