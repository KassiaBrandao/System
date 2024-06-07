import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

function DateTimeComponent() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 60000);  

        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{
            width: 'auto',
            position: 'fixed',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#fff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: '500',
            fontSize: '14px',
            cursor: 'default',
            userSelect: 'none'
        }}>
            <Typography variant="body1">
                {currentDateTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} {currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Typography>
        </Box>
    );
}

export default DateTimeComponent;
