import React, { useState } from "react";

const VideoPlayer = ({ src, fallback }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <>
      {error ? (
        <img src={fallback} alt="Fallback" />
      ) : (
        <video
          src={src}
          controls
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          onError={handleError}
        />
      )}
    </>
  );
};

export default VideoPlayer;
