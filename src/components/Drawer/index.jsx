import React, { useState } from 'react';
import { Box, Grid, IconButton, Stack, List, ListItem, ListItemIcon, ListItemText, TextField, Typography, Popover, Avatar } from '@mui/material';
import './styles.css';
import VscodeIcon from '../../assets/icons/icons8-visual-studio-code-2019.svg';
import Xbox from '../../assets/icons/icons8-xbox.svg';
import Python from '../../assets/icons/icons8-python.svg';
import Js from '../../assets/icons/icons8-javascript.svg'
import Ts from '../../assets/icons/icons8-typescript.svg'
import Node from '../../assets/icons/icons8-node-js.svg'
import Next from '../../assets/icons/icons8-next.js.svg'
import Selenium from '../../assets/icons/icons8-selenium.svg'
import Mysql from '../../assets/icons/icons8-mysql-logo.svg'
import Sass from '../../assets/icons/icons8-sass.svg'
import Vue from '../../assets/icons/file_type_vue_icon_130078.svg'
import Postgress from '../../assets/icons/icons8-postgresql-48.png'
import Settings from '../../assets/icons/icons8-settings.svg';
import ReactLogo from '../../assets/icons/react_original_logo_icon_146374.svg'
import html from '../../assets/icons/icons8-html-5.svg';
import css from '../../assets/icons/icons8-css3.svg';
import userAvatar from '../../assets/img/kassiaBrandao.jpg';
import Figma from '../../assets/icons/icons8-figma.svg'
import AndroidStudio from '../../assets/icons/icons8-android-studio.svg';
import Pycharm from '../../assets/icons/icons8-pycharm.svg';
import Ij from '../../assets/icons/icons8-intellij-idea.svg';
import Docker from '../../assets/icons/icons8-docker.svg';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const CustomTextField = styled(TextField)({
    width: '100%',
    '& .MuiOutlinedInput-root': {
        borderRadius: '50px',
        paddingRight: '8px',
        height: '32px',
        '& .MuiInputBase-input': {
            height: '30px',
            padding: '0 14px',
            boxSizing: 'border-box',
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '50px',
    },
    '& .MuiInputAdornment-root': {
        marginRight: '8px',
    },
    '& .MuiSvgIcon-root': {
        color: '#757575',
    },
});

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

    const icons = [
        { src: html, alt: "HTML Icon", label: "HTML" },
        { src: css, alt: "CSS Icon", label: "CSS" },
        { src: Js, alt: "JavaScript Icon", label: "JavaScript" },
        { src: Ts, alt: "TypeScript Icon", label: "TypeScript" },
        { src: ReactLogo, alt: "React Icon", label: "React" },
        { src: Node, alt: "Node.js Icon", label: "Node.js" },
        { src: Next, alt: "Next.js Icon", label: "Next.js" },
        { src: Python, alt: "Python Icon", label: "Python" },
        { src: Vue, alt: "Vue.js Icon", label: "Vue.js" },
        { src: Mysql, alt: "MySQL Icon", label: "MySQL" },
        { src: Postgress, alt: "PostgreSQL Icon", label: "PostgreSQL" },
        { src: Selenium, alt: "Selenium Icon", label: "Selenium" },
    ];

    const listItems = [
        { icon: <img src={Figma} alt="Figma" style={{ width: '35px', height: '35px' }} />, text: "Figma" },
        { icon: <img src={AndroidStudio} alt="Android Studio" style={{ width: '35px', height: '35px' }} />, text: "Android Studio" },
        { icon: <img src={VscodeIcon} alt="Visual Studio Code" style={{ width: '35px', height: '35px' }} />, text: "Visual Studio Code" },
        { icon: <img src={Docker} alt="Docker" style={{ width: '35px', height: '35px' }} />, text: "Docker" },
        { icon: <img src={Pycharm} alt="PyCharm" style={{ width: '35px', height: '35px' }} />, text: "PyCharm" },
        { icon: <img src={Ij} alt="IntelliJ IDEA" style={{ width: '35px', height: '35px' }} />, text: "IntelliJ IDEA" },
        { icon: <img src={Settings} alt="Settings Icon" style={{ width: '35px', height: '35px' }} />, text: "Settings" },
        { icon: <img src={Xbox} alt="Xbox" style={{ width: '35px', height: '35px' }} />, text: "My Games" },
    ];


    return (
        <Box
            className="drawerContainer"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Stack className="drawerHeader">
                <CustomTextField
                    placeholder="Pesquisar"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
            <Stack>
                <Typography fontWeight={700} style={{ paddingLeft: '32px' }}>Skills</Typography>
                <Grid container spacing={1} justifyContent="center" alignItems="center" className="drawerContent">
                    {icons.map((icon, index) => (
                        <Grid item xs={2} key={index} className='skills-items'>
                            <Stack alignItems="center">
                                <IconButton>
                                    <img disable src={icon.src} alt={icon.alt} style={{ width: '40px', height: '40px' }} onClick={onIconClick} />
                                </IconButton>
                                <Typography variant="caption">{icon.label}</Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
            <Typography fontWeight={700} style={{ paddingLeft: '32px', marginTop: '32px', marginBottom: '24px' }}>Apps</Typography>
            <Grid container spacing={1} className="drawerContent" sx={{ padding: '0 10px' }}>
                {listItems.map((item, index) => (
                    <Grid item xs={6} key={index}>
                        <ListItem className="drawerItem">
                            <ListItemIcon className="drawerItemIcon">{item.icon}</ListItemIcon>
                            <ListItemText className="drawerItemText" primary={item.text} />
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
            <Stack className="drawerFooter" direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={userAvatar} />
                    <Typography >Kassia Moreira Brandão</Typography>
                </Stack>
                <IconButton onClick={handlePopoverOpen}>
                    <PowerSettingsNewIcon alt="Power Icon" style={{ width: '20px', height: '20px' }} />
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
                    lçaskdçlakd
                </Popover>
            </Stack>
        </Box>
    );
}

export default DrawerContent;
