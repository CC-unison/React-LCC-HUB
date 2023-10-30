import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PublicIcon from '@mui/icons-material/Public';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';
function Footer({
  backgroundColor = '#112e5c',
  textColor = '#fff',
  position = 'static',
  elevation = 4,
}) {
  return (
    <AppBar color="primary" position = "static" elevation={elevation} style={{ backgroundColor }} sx={{padding:2}}>
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" style={{ color: textColor }}>
            <PublicIcon/> Redes sociales
            </Typography>
            <Typography variant="body1" color="inherit" style={{ color: textColor }}>
            <FacebookIcon/> <Link href="https://www.facebook.com/LCCUNISON" color="inherit">Facebook </Link><br/>
            <InstagramIcon/> <Link href="https://instagram.com/soy_lcc?igshid=MzRlODBiNWFlZA==" color="inherit">Instagram</Link><br/>
            <LinkedInIcon/> <Link href="https://mx.linkedin.com/in/lcc-unison-460014180" color="inherit">LinkedIn </Link><br/>
            <YouTubeIcon/> <Link href="https://www.youtube.com/@soyLCCUnison" color="inherit">Youtube</Link><br/>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" style={{ color: textColor }}>
              <LocalPhoneIcon/> Contacto
            </Typography>
            <Typography variant="body2" color="inherit" style={{ color: textColor }}>
              Tel y Fax
            </Typography>
            <Typography variant="body2" color="inherit" style={{ color: textColor }}>
              (662) 259-2155
            </Typography>
            <Typography variant="body2" color="inherit" style={{ color: textColor }}>
              Ext: 2482 y 2494
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" style={{ color: textColor }}>
              <LocationOnIcon/> Direccion
            </Typography>
            <Typography variant="body2" color="inherit" style={{ color: textColor }}>
              Edificio 3K-4. Ciencias de la Computacion, Boulevard Luis Encinas y Rosales, s/n, Col. Centro, Hermosillo, Sonora. CP: 83000
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" style={{ color: textColor }}>
              <EmailIcon/> Correo
            </Typography>
            <Typography variant="body2" color="inherit" style={{ color: textColor }}>
              computacion@mat.uson.mx
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
