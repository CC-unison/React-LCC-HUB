import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Header from './header';
import LCCIcon from "./assets/logo-lcc-blanco.svg"
import { useIsAuthenticated } from "@azure/msal-react";
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const Dashboard: React.FC = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const loginRequest = {
        scopes: ["User.Read"], // Define necessary scopes
      };
    const [loggedIn, setLogin] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClose = () => {
        setAnchorEl(null);
      };
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleLogOut = async () => {
        instance.logoutPopup();
        setLogin(false);
      }
      const handleLogin = async () => {
        if(loggedIn){
    
        }else {
        try {
          await instance.loginPopup(loginRequest);
          setLogin(true);
          console.log(loggedIn)
        } catch (error) {
          console.log(error);
        }}
      };
    React.useEffect(() => {
        console.log(isAuthenticated)
        console.log(instance.getActiveAccount());
        function handleScroll() {
          // Check the scroll position to determine if the user has scrolled
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        // Remove the scroll event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      
  return (
    <Box sx={{ height:"100vh", width:"100%", backgroundColor: "white" }}>
        <AppBar position="fixed" style={{ backgroundColor: isScrolled ? "#112e5c" : "transparent", transition: 'background-color 0.3s' }} sx={{ boxShadow: "none" }}>

<Toolbar>
  <img src={LCCIcon} width="40" height="40" style={{ margin: 20 }} />
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    LCC HUB
  </Typography>
  <Button color="inherit" sx={{ m: 1 }}>Soy LCC</Button>
  <Button color="inherit" sx={{ m: 1 }}>Noticias</Button>
  <Button color="inherit" sx={{ m: 1 }}>Galería</Button>
  {loggedIn ? (
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
        <Link to={"dashboard"}><MenuItem>Dashboard</MenuItem></Link>
        <MenuItem onClick={handleLogOut}>Cerrar sesión</MenuItem>
      </Menu>
    </div>
  ) :
    <Button variant="outlined" color="inherit" sx={{ m: 1 }} onClick={handleLogin}>Login</Button>
  }
</Toolbar>
</AppBar>
        <Typography variant="h5" component="h2" color="black" gutterBottom>
            Resumen
        </Typography>
    </Box>
  );
};

export default Dashboard;
