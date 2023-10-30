import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import './landingPage.css'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {db} from "./firebase"
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import LCCIcon from "./assets/logo-lcc-blanco.svg"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SvgIcon from '@mui/icons-material/Menu';
import Icon from '@mui/material/Icon';
import {CssBaseline, Divider, Grid} from "@mui/material";
import SoyLCC from './SoyLCCcard';
import NoticiasCard from './noticiasCard';
import Footer from './footer';
import Galeria from './Galeria';

export default function Header(){
  return(
<AppBar position="fixed" color="transparent" sx = {{boxShadow: "none"}}>
            
            <Toolbar>
            <img src={LCCIcon} width="40" height="40" style = {{margin: 20}}/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                LCC HUB
              </Typography>
              <Button color = "inherit" sx = {{m: 1}}>Soy LCC</Button>
              <Button color = "inherit" sx = {{m: 1}}>Proyectos</Button>
              <Button color = "inherit" sx = {{m: 1}}>Noticias</Button>
              <Button color = "inherit" sx = {{m: 1}}>Galería</Button>
              <Button variant = "outlined" color="inherit" sx = {{m: 1}}>Login</Button>
            </Toolbar>
          </AppBar>
)}