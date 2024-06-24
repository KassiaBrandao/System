import {
  styled,
  Drawer
} from '@mui/material';

const StyledDrawer = styled(Drawer)(({
  theme
}) => ({
  '.MuiDrawer-paper': {
    position: 'absolute',
    top: 'auto',
    bottom: '60px',
    height: 'auto',
    width: '30%',
    borderRadius: '10px 10px 0 0',
    left: '35%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffffffe2',
    backdropFilter: 'blur(50px)'

  }
}));

export default StyledDrawer;