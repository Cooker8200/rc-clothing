import { FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const TitleBar: FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>RC Clothing</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar