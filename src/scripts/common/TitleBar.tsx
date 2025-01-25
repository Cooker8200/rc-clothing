import { FC, useState } from "react";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import rcSmall from '../../images/rcSmall.png';

const TitleBar: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate()

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton onClick={handleClick} style={{ marginRight: '12px'}}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
          <MenuItem onClick={() => navigate('/about')}>About Us</MenuItem>
          <MenuItem onClick={() => navigate('/contact')}>Contact Us</MenuItem>
        </Menu>
        <Typography variant='h6'>RC Clothing</Typography>
        <img src={rcSmall} alt='RC Clothing Logo' width={50} height={50} style={{ paddingBottom: '16px' }}/>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar
