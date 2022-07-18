import React, { useContext, useEffect } from 'react';
import FormContext from '../../context/FormContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

function Form() {
  const { auth, setAuth } = useContext(FormContext);
  const { anchorEl, setAnchorEl } = useContext(FormContext);
  const { setCurrentStep } = useContext(FormContext);

  const stepState = {
    true: 0,
    false: 1,
  };
 
  const handleChange = (event) => {
    setAuth(event.target.checked);
    console.log(auth);
    setCurrentStep(stepState[auth]);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    console.log(anchorEl);
  };

  if (!auth) {
    useEffect(() => {
      setCurrentStep(0);
    }, []);
  }

  if (auth) {
    useEffect(() => {
      setCurrentStep(1);
    }, []);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
    {auth && (<FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={auth}
            onChange={handleChange}
            aria-label="login switch"
          />
        }
        label={auth ? 'Logout' : ''}
      />
    </FormGroup>)}
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Health Wizard Form
        </Typography>
        {auth ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        ) :  <Button color="inherit">Login</Button>}
      </Toolbar>
    </AppBar>
  </Box>  
  );
}

export default Form;
