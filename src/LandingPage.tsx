import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import './landingPage.css'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { db } from "./firebase"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import LCCIcon from "./assets/logo-lcc-blanco.svg"
import { CssBaseline, Divider, Grid } from "@mui/material";
import SoyLCC from './SoyLCCcard';
import { useMsal } from "@azure/msal-react";
import {NoticiasCard} from './noticiasCard';
import { FreeMode, Mousewheel, Navigation, Scrollbar } from 'swiper/modules';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from "./footer";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
export default function LandingPage() {

  const [anuncios, setAnuncios] = React.useState<any[]>([]);
  const [loggedIn, setLogin] = React.useState<boolean>(false);
  const [soyLCC, setSoyLCC] = React.useState<any[]>([]);
  const [galeria, setGaleria] = React.useState<any[]>([]);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

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
  }, []);

  const { instance } = useMsal();

  const loginRequest = {
    scopes: ["User.Read"], // Define necessary scopes
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = async () => {
    try {
      await instance.loginPopup(loginRequest);
      setLogin(true);
      console.log(loggedIn)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, color: "white" }}>
        <AppBar position="fixed" style={{ backgroundColor: isScrolled ? "#112e5c" : "transparent", transition: 'background-color 0.3s' }} sx={{ boxShadow: "none" }}>

          <Toolbar>
            <img src={LCCIcon} width="40" height="40" style={{ margin: 20 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LCC HUB
            </Typography>
            <Button color="inherit" sx={{ m: 1 }}>Soy LCC</Button>
            <Button color="inherit" sx={{ m: 1 }}>Proyectos</Button>
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
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            ) :
              <Button variant="outlined" color="inherit" sx={{ m: 1 }} onClick={handleLogin}>Login</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
      <Box className="container" sx={{ display: "flex", flexDirection: 'column', color: "white" }}>
        <div style={{ "textAlign": "left", "marginLeft": "70px" }}>
          <h1>LCC-HUB</h1>
          <h2>Seguimiento de trayectoria <br /> académica de alumnos de LCC</h2>
          <Button variant="contained" sx={{
            p: 1, minWidth: "100%", bgcolor: "background.paper", color: "text.primary", '&:hover': {
              backgroundColor: '#f5f5f5',
            }
          }}>Iniciar sesion</Button>
        </div>
      </Box>
      <Box className="container second" sx={{ display: "flex", flexDirection: 'column' }}>
        <h2 className="header">Soy LCC</h2>
        <Divider className="separator" sx={{ ml: "40px" }} />
        <Box sx={{display:"flex", ml: "40px", mt: "20px" , width: "95%", height:"80vh", justifyContent:"center"}}>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {soyLCC.map((object)=> {
          if (object.showInPage === true) {
            return (
              <SwiperSlide style={{height: 500}}>
                <SoyLCC
                  foto={object.img}
                  titulo={object.titulo}
                  link={object.url}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
          {/* {soyLCC.map((object) => {
            if (object.showInPage === true) {
              return (
                <SoyLCC
                  foto={object.img}
                  titulo={object.titulo}
                  link={object.url}
                />
              );
            }
          })}  */}
        </Box>
        <h2 className="header">Proyectos y Artículos</h2>
        <Divider className="separator" sx={{ ml: "40px" }} />
        <h2 className="header">Noticias</h2>
        <Divider className="separator" sx={{ ml: "40px" }} />
        <Box sx={{display:"flex", ml: "40px", mt: "20px" , width: "95%", height:"80vh", justifyContent:"center"}}>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {anuncios.map((object)=> {
          if (object.showInPage === true) {
            return (
              <SwiperSlide style={{height: 500}}>
                <NoticiasCard
                foto={object.imgSrc}
                titulo={object.titulo}
                descripcion={object.desc}
                link={object.link}
              />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
        </Box>
        <h2 className="header">Galería</h2>
        <Divider className="separator" sx={{ ml: "40px" }} />
        <Box
          sx={{
            display: "flex",
            ml: "40px",
            mt: "20px",
            width: "95%",
            height: "120vh",
            overflow: "hidden",
            justifyContent: "center",
            pb: 5
          }}
        >
          <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
            {galeria.map((object) => {
              if (object.showInPage === true) {
                return (
                  <SwiperSlide>
                    <img src={object.url} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </Box>
      </Box>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}