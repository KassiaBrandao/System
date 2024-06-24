import React, { useState } from 'react';
import './styles.css'; 
import KinuxTaskbar from '../../components/navbar';
import DateTimeComponent from '../../components/DateTime';
import WindowComponent from '../../components/window';
import KassiaProfile from '../../components/Curriculum';

function Home() {
  const [windowState, setWindowState] = useState({
    isOpen: false,
    isMaximized: false
  });

  const toggleWindow = () => {
    setWindowState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };

  const closeWindow = () => {
    setWindowState({ isOpen: false, isMaximized: false });
  };

  const handleMaximize = (isMaximized) => {
    setWindowState(prev => ({ ...prev, isMaximized }));
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <DateTimeComponent/>
      <KinuxTaskbar onToggleWindow={toggleWindow} isActive={windowState.isOpen} />
      <WindowComponent 
        isOpen={windowState.isOpen}
        onClose={closeWindow}
        onMaximize={handleMaximize}
        title="My Resume"
      >
        <KassiaProfile/>
      </WindowComponent>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      </div>
    </div>
  );
}

export default Home;
