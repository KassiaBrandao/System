import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography, Avatar, Stack, Popover, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import './styles.css';
import userAvatar from '../../assets/img/kassiaBrandao.jpg';
import WhatsAppIcon from '../../assets/icons/whatsapp.png';
import LinkedInIcon from '../../assets/icons/linkedin.png';
import GitHubIcon from '../../assets/icons/git.png';
import PhotoIcon from '../../assets/icons/photo.png';
import Vscode from '../../assets/icons/vscode.png';
import GameIcon from '../../assets/icons/xbox.png';
import Pcharm from '../../assets/icons/pycharm.png';
import Spotify from '../../assets/icons/spotify.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


function DrawerContent({ toggleDrawer, onIconClick, isActive, isMinimized, onToggleWindow }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const iconColor = (isActive || isMinimized) ? 'orange' : 'inherit';

    return (
        <Box
            className="drawerContainer"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Stack className="drawerHeader">
                <Avatar src={userAvatar} />
                <Typography variant="h6">Kassia Moreira Brandão</Typography>
                <IconButton onClick={handlePopoverOpen}>
                    <img src={PowerSettingsNewIcon} alt="Power Icon" style={{ width: '24px', height: '24px' }} />
                </IconButton>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Typography sx={{ p: 2 }}>Desligar</Typography>
                </Popover>
            </Stack>
            <Grid container spacing={1} justifyContent="center" alignItems="center" className="drawerContent" sx={{marginLeft: '30px'}}>
                <Grid item xs={3}>
                    <IconButton>
                        <img src={WhatsAppIcon} alt="WhatsApp Icon" style={{ width: '40px', height: '40px' }} onClick={onIconClick} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton>
                        <img src={LinkedInIcon} alt="LinkedIn Icon" style={{ width: '40px', height: '40px', color: iconColor }} onClick={onToggleWindow} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton>
                        <img src={GitHubIcon} alt="GitHub Icon" style={{ width: '40px', height: '40px' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton>
                        <img src={PhotoIcon} alt="Photo Icon" style={{ width: '40px', height: '40px' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton>
                        <img src={Vscode} alt="Email Icon" style={{ width: '40px', height: '40px' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton>
                        <img src={GameIcon} alt="Game Icon" style={{ width: '40px', height: '40px' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton>
                        <img src={Pcharm} alt="Settings Icon" style={{ width: '40px', height: '40px' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton>
                        <img src={Spotify} alt="Search Icon" style={{ width: '40px', height: '40px' }} />
                    </IconButton>
                </Grid>
            </Grid>

            <List className="drawerContent">
                {[
                    { icon: <img src={WhatsAppIcon} alt="Folder Icon" style={{ width: '24px', height: '24px' }} />, text: "Files" },
                    { icon: <img src={LinkedInIcon} alt="Team Icon" style={{ width: '24px', height: '24px' }} />, text: "Team" },
                    { icon: <img src={GitHubIcon} alt="Notifications Icon" style={{ width: '24px', height: '24px' }} />, text: "Notifications" },
                    { icon: <img src={PhotoIcon} alt="Cart Icon" style={{ width: '24px', height: '24px' }} />, text: "Cart" },
                    { icon: <img src={Spotify} alt="Email Icon" style={{ width: '24px', height: '24px' }} />, text: "Email" },
                    { icon: <img src={GameIcon} alt="Reports Icon" style={{ width: '24px', height: '24px' }} />, text: "Reports" },
                    { icon: <img src={Pcharm} alt="Settings Icon" style={{ width: '24px', height: '24px' }} />, text: "Settings" },
                    { icon: <img src={GitHubIcon} alt="Search Icon" style={{ width: '24px', height: '24px' }} />, text: "Search" },
                ].map((item, index) => (
                    <ListItem key={index} className="drawerItem">
                        <ListItemIcon className="drawerItemIcon">{item.icon}</ListItemIcon>
                        <ListItemText className="drawerItemText" primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default DrawerContent;
