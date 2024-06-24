import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import CustomIcon from '../CustomIcons';

import GitIcon from '../../assets/icons/icons8-github.svg';
import ChromeIcon from '../../assets/icons/icons8-chrome.svg';
import SpotifyIcon from '../../assets/icons/icons8-spotify.svg';
import VscodeIcon from '../../assets/icons/icons8-visual-studio-code-2019.svg';
import WhatsappIcon from '../../assets/icons/icons8-whatsapp-50.png';
import Settings from '../../assets/icons/icons8-settings.svg';
import Menu from '../../assets/icons/icons8-windows-11.svg';
import Text from '../../assets/icons/icons8-file.svg';

const buttonHoverStyle = {
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    transform: 'scale(1.1)',
  },
};

function MainToolbar({ toggleDrawer, onOpenWindow, onToggleWindow, isActive, isMinimized }) {
  return (
    <AppBar position="static" sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      margin: '0 auto',
      marginBottom: '10px',
    }}>
      <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button sx={buttonHoverStyle} color="inherit" startIcon={<CustomIcon src={Menu} alt="Menu" />} onClick={toggleDrawer(true)}></Button>
          <Button sx={buttonHoverStyle} color="inherit" startIcon={<CustomIcon src={GitIcon} alt="Git" />} href="https://github.com/KassiaBrandao?tab=repositories" target="_blank" rel="noopener noreferrer"></Button>
          <Button sx={buttonHoverStyle} color="inherit" startIcon={<CustomIcon src={ChromeIcon} alt="Linkedin" />} href="https://www.linkedin.com/in/kassiabrandao/" target="_blank" rel="noopener noreferrer" onClick={onOpenWindow}></Button>
          <Button sx={buttonHoverStyle} color="inherit" disabled startIcon={<CustomIcon src={VscodeIcon} alt="VsCode" />}></Button>
          <Button sx={buttonHoverStyle} color="inherit" startIcon={<CustomIcon src={SpotifyIcon} alt="SpotifyIcon" />} href='https://open.spotify.com/playlist/2GlDJQjudJv7vMIPmEqM9s?si=25a4b2ff5ae7490f' target="_blank" rel="noopener noreferrer"></Button>
          <Button sx={buttonHoverStyle} color="inherit" title='Me chama ai, vamos trabalhar juntos :)' target="_blank" rel="noopener noreferrer" startIcon={<CustomIcon src={WhatsappIcon} alt="WhatsappIcon" />} href='https://wa.me/5551993125499'></Button>
          <Button sx={buttonHoverStyle} color="inherit" startIcon={<CustomIcon src={Text} alt="Text" />} onClick={onToggleWindow}></Button>
          <Button sx={buttonHoverStyle} color="inherit" startIcon={<CustomIcon src={Settings} alt="Settings" />}></Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MainToolbar;
