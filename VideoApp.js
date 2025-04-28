import React from "react";
import { useLocation } from "react-router-dom";

const VideoApp = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const roomID = params.get("roomID"); // Extracts roomID from URL

  return (
    <div>
      <h1>Welcome to Video Room</h1>
      {roomID ? (
        <p>You're in room: <strong>{roomID}</strong></p>
      ) : (
        <p>No Room ID provided!</p>
      )}
      {/* Placeholder for further features */}
    </div>
  );
};

export default VideoApp;
