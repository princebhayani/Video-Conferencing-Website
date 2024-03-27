import React, { useContext } from "react";
import { SocketContext } from "../../SocketContext";
import "./VideoPlayer.css";
const VideoPlayer = () => {
  const {callAccepted, myVideo, userVideo, callEnded, stream} =
    useContext(SocketContext);
    const styleForCenter = {
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

  return (
    <div style={styleForCenter}>
  {stream && (
    <div  className="video-container">
      <video  playsInline muted ref={myVideo} autoPlay className="video my-video" />
    </div>
  )}
  {callAccepted && !callEnded && (
    <div className="video-container">
      <video playsInline ref={userVideo} autoPlay className="video user-video" />
    </div>
  )}
</div>
  );
};

export default VideoPlayer;
