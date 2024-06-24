import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import userImage from '../../assets/img/kassiaBrandao.jpg';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    const handleLogin = () => {
        setAnimate(true);
        setTimeout(() => {
            navigate('/home');
        }, 500);
    };

    return (
        <div style={{ position: 'relative', height: '100vh' }} className={animate ? 'slideUp' : ''}>
            <div
                className='bodyBlur'
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(50px)',
                    zIndex: -1,
                    backgroundImage: 'url(/mnt/data/image.png)',
                    backgroundSize: 'cover',
                    cursor: 'default',
                    userSelect: 'none'
                }}
            ></div>

            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Container
                    component="div"
                    maxWidth="xs"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '20px',
                    }}
                >
                    <Avatar
                        src={userImage}
                        alt="Kassia Brandão"
                        style={{
                            width: '150px',
                            height: '150px',
                            marginBottom: '16px',
                            borderRadius: '50%',
                        }}
                    />
                    <Typography
                        component="h1"
                        variant="h5"
                        style={{
                            fontSize: '1.5em',
                            color: 'white',
                            marginBottom: '10px',
                            cursor: 'default',
                            userSelect: 'none'
                        }}
                    >
                        Kassia Moreira Brandão
                    </Typography>
                    <Button
                        onClick={handleLogin}
                        fullWidth
                        variant="contained"
                        style={{
                            width: '200px',
                            marginTop: '20px',
                            color: '#fff',
                            borderRadius: '4px',
                            fontSize: '16px',
                            backgroundColor: 'rgba(73, 73, 73, 0.194)',
                            backdropFilter: 'blur(10px)',
                            border: 'none'
                        }}
                    >
                        {t('enter')}
                    </Button>
                </Container>
            </div>
        </div>
    );
}

export default Login;
