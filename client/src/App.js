import React from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';
import Notifications from './components/Notifications/Notifications.jsx';
import Options from './components/Options/Options.jsx';
const App = () => {
  const styleOfInnerDiv = {
    backgroundColor: 'rgb(240,240,240,0.7)',
    height: '70px',
    fontSize:'40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:'18px'
  }
  return (
    <div style={{padding: '20px'}} >
      <div style={styleOfInnerDiv}> Video Connection</div>
      <VideoPlayer />
      <Options >
          <Notifications />
      </Options>
    </div>
  );
};
export default App;
