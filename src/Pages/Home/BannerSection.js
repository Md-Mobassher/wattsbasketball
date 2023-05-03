import React from 'react';
import BannerText from './BannerText';
import useVideoBackground from '../../Hooks/useVideoBackground';

const Banner = ({ videoId }) => {
  const playerRef = useVideoBackground(videoId)


  return (
    <div className="banner min-h-screen relative">
      <div className="video-container h-full absolute inset-0 overflow-hidden ">
        <div className="video h-full" ref={playerRef}></div>
      </div>

      <div className="absolute  banner-content lg:flex flex-row justify-center items-center">
        <BannerText />
      </div>

    </div>
  );
};

export default Banner;
