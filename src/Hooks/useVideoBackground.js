import { useEffect, useRef } from 'react';

const useVideoBackground = (videoId) => {
    const playerRef = useRef(null);
    console.log(videoId);

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

  return playerRef;
};

export default useVideoBackground;
