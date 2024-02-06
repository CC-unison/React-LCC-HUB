'use client'
import React, { useState, useEffect } from 'react';
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
import Box from '@mui/material/Box';

export const Footer = ({
    backgroundColor = '#112e5c',
    textColor = '#fff',
    elevation = 4,
}) => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])
    return mounted &&
        <AppBar color="primary" position="static" elevation={elevation} style={{ backgroundColor }} sx={{ padding: 2 }}>
            <Toolbar>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box display="flex" alignItems="center" justifyContent="center" margin={0} >
                            <Typography variant="h6" color="inherit" style={{ color: textColor }}>
                                <PublicIcon /> Redes sociales
                            </Typography>
                        </Box>

                        <Typography variant="body1" color="inherit" style={{ color: textColor }}>
                            <Box display="flex" alignItems="center" justifyContent="center" margin={1}>
                                <FacebookIcon />
                                <Link style={{ paddingLeft: 2 }} href="https://www.facebook.com/LCCUNISON" color="inherit" underline="none"
                                >
                                    Facebook
                                </Link>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center" margin={1} >
                                <InstagramIcon />
                                <Link style={{ paddingLeft: 2 }} href="https://instagram.com/soy_lcc?igshid=MzRlODBiNWFlZA==" color="inherit" underline="none"
                                >Instagram</Link><br />
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center" margin={1}>
                                <LinkedInIcon />
                                <Link style={{ paddingLeft: 2 }} href="https://mx.linkedin.com/in/lcc-unison-460014180" color="inherit" underline="none"
                                >LinkedIn </Link><br />
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center" margin={1} >
                                <YouTubeIcon />
                                <Link style={{ paddingLeft: 2 }} href="https://www.youtube.com/@soyLCCUnison" color="inherit" underline="none"
                                >Youtube</Link><br />
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" style={{ color: textColor }}>
                            <Box display="flex" alignItems="center" justifyContent="center" margin={0} >
                                <LocalPhoneIcon style={{ paddingRight: 3 }} /> Contacto
                            </Box>
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
                        <Box display="flex" alignItems="center" justifyContent="center" margin={0} >
                            <LocationOnIcon /> <Typography variant="h6" color="inherit" style={{ color: textColor, paddingBottom: 0 }}>
                                Dirección
                            </Typography>
                        </Box>

                        <Typography variant="body2" color="inherit" style={{ color: textColor }}>
                            Edificio 3K-4. Ciencias de la Computación, Boulevard Luis Encinas y Rosales, s/n, Col. Centro, Hermosillo, Sonora. CP: 83000
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" style={{ color: textColor }}>
                            <Box display="flex" alignItems="center" justifyContent="center" margin={0} >
                                <EmailIcon /> <Typography variant="h6" color="inherit" style={{ color: textColor, paddingLeft: 3 }}>
                                    Correo
                                </Typography>
                            </Box>

                        </Typography>
                        <Typography variant="body2" color="inherit" style={{ color: textColor }}>
                            computacion@uson.mx
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
};



