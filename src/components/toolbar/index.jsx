import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsIcon from '@mui/icons-material/Settings';

function MainToolbar({ toggleDrawer, onOpenWindow, onToggleWindow, isActive, isMinimized  }) {
    const iconColor = (isActive || isMinimized) ? 'orange' : 'inherit';

  return (
    <AppBar position="static" sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(50px)',
        width: '30%',
        borderRadius: '10px',
        margin: '0 auto',
        marginBottom: '10px',
      }}>
      <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" startIcon={<AppsIcon />} onClick={toggleDrawer(true)}></Button>
          <Button color="inherit" startIcon={<BrandingWatermarkIcon />}></Button>
          <Button color="inherit" startIcon={<GitHubIcon onClick={onToggleWindow}  style={{ color: iconColor }} />}></Button>
          <Button color="inherit" startIcon={<SettingsIcon color='secondary' />}></Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MainToolbar;
