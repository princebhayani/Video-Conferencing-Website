import React, { useContext } from 'react';
import { SocketContext } from '../../SocketContext';
import "./Notifications.css";
const Notifications = () => {
  const { answerCall, call, callAccepted,leaveCall } = useContext(SocketContext);

  return (
    <>
  {call.isReceivingCall && !callAccepted && (
    <div className="call-container">
      <h1 className="call-text">Connect with {call.name}</h1>
      <button className="answer-button" onClick={answerCall}>
        Connect
      </button>
      <button className="answer-button" onClick={leaveCall}>
        Disconnect
      </button>
    </div>
  )}
</>
  );
};

export default Notifications;
