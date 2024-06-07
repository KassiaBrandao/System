import React, { useState } from 'react';
import { Box } from '@mui/material';
import MainToolbar from '../toolbar';
import DrawerContent from '../Drawer';
import StyledDrawer from '../Drawer/styledDrawer';


function KinuxTaskbar({onToggleWindow, isActive, isMinimized, onOpenWindow }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'fixed', bottom: 0 }}>
      <MainToolbar  onToggleWindow={onToggleWindow} isActive={isActive} isMinimized={isMinimized} onOpenWindow={onOpenWindow} toggleDrawer={() => toggleDrawer(!drawerOpen)} />
      <StyledDrawer
        anchor="bottom"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onBackdropClick={toggleDrawer(false)}
      >
        
        <DrawerContent  onToggleWindow={onToggleWindow} isActive={isActive} isMinimized={isMinimized} onOpenWindow={onOpenWindow} toggleDrawer={toggleDrawer} />
      </StyledDrawer>
    </Box>
  );
}

export default KinuxTaskbar;
