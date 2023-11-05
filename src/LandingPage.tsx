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
import Galeria from './Galeria';
import LoginDialog from "./loginDialog";
import Carousel from "better-react-carousel"
import Footer from "./footer";
export default function LandingPage(){

    const [anuncios, setAnuncios] = React.useState<any[]>([]);
    const [soyLCC, setSoyLCC] = React.useState<any[]>([]);
    const [galeria, setGaleria] = React.useState<any[]>([]);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);

    const handleLoginOpen = () => {
      setOpenLogin(true);
    }
  const handleLoginClose = () => {
      setOpenLogin(false);
  }

    React.useEffect(() => {
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

    React.useEffect(() => {
      const anunciosq = query(collection(db, "anuncios"), orderBy("date", "desc"));
      onSnapshot(anunciosq, (querySnapshot) => {
        setAnuncios(querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        })) as any[]); // Provide a type annotation to specify the type
      })
      const soylccq = query(collection(db, "videos"), orderBy("date", "desc"));
      onSnapshot(soylccq, (querySnapshot) => {
        setSoyLCC(querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        })) as any[]); // Provide a type annotation to specify the type
      })
      const galeria = query(collection(db, "galeria"), orderBy("date", "desc"));
      onSnapshot(galeria, (querySnapshot) => {
        setGaleria(querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        })) as any[]); // Provide a type annotation to specify the type
      })
    console.log("oopsie")});

    return(
        <div>
        <Box sx={{ flexGrow: 1, color:"white"} }>
          <AppBar position="fixed"  style={{backgroundColor: isScrolled ?  "#112e5c": "transparent", transition: 'background-color 0.3s'}} sx = {{boxShadow: "none"}}>
            
            <Toolbar>
            <img src={LCCIcon} width="40" height="40" style = {{margin: 20}}/>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                LCC HUB
              </Typography>
              <Button color = "inherit" sx = {{m: 1}}>Soy LCC</Button>
              <Button color = "inherit" sx = {{m: 1}}>Proyectos</Button>
              <Button color = "inherit" sx = {{m: 1}}>Noticias</Button>
              <Button color = "inherit" sx = {{m: 1}}>Galería</Button>
              <Button variant = "outlined" color="inherit" sx = {{m: 1}} onClick = {handleLoginOpen}>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
    <Box className="container" sx={{display: "flex",flexDirection: 'column', color:"white"}}>
      <div style={{"textAlign": "left", "marginLeft": "70px"}}>
        <h1>LCC-HUB</h1>  
        <h2>Seguimiento de trayectoria <br/> académica de alumnos de LCC</h2>
        <Button variant = "contained" sx = {{p:1, minWidth:"100%", bgcolor: "background.paper", color: "text.primary", '&:hover': {
        backgroundColor: '#f5f5f5',}}}>Iniciar sesion</Button>
      </div>
    </Box>
    <Box className = "container second" sx={{display: "flex",flexDirection: 'column'}}>
      <h2 className = "header">Soy LCC</h2>
      <Divider className="separator" sx={{ml:"40px"}}/>
      <Box sx = {{display: "flex", ml: "40px", mt:"20px"}}>
      {soyLCC.map((object) => {
        if (object.showInPage === true) {
          return (
            <SoyLCC
              foto={object.img}
              titulo={object.titulo}
              link={object.url}
            />
          );
        }
      })}
      </Box>
      <h2 className = "header">Proyectos y Artículos</h2>
      <Divider className="separator" sx={{ml:"40px"}}/>
      <h2 className = "header">Noticias</h2>
      <Divider className="separator" sx={{ml:"40px"}}/>
      <Box sx = {{display: "flex", ml: "40px", mt:"20px"}}>
      {anuncios.map((object) => {
        if (object.showInPage === true) {
          return (
            <NoticiasCard
              foto={object.imgSrc}
              titulo={object.titulo}
              descripcion={object.desc}
              link={object.link}
            />
          );
        }
      })}
      </Box>
            <h2 className = "header">Galería</h2>
      <Divider className="separator" sx={{ml:"40px"}}/>
      <Box sx = {{display: "flex", ml: "40px", mt:"20px", minWidth:"100%", justifyContent: "center"}}>
        <Carousel cols={2} rows = {1} gap={10} loop>
        {galeria.map((object) => {
        if (object.showInPage === true) {
          return (
            <Carousel.Item>
              <img width="100%" src={object.url}/>
            </Carousel.Item>
          );
        }
      })}
        </Carousel>
      </Box>
      
    </Box>
    <div className="footer">
        <Footer/>
      </div>
    </div>
    )
}