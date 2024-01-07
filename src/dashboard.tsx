import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import Header from './header';
import './landingPage.css'
import { useLocation, Navigate } from "react-router-dom"
import LCCIcon from "./assets/logo-lcc-blanco.svg"
import { useIsAuthenticated } from "@azure/msal-react";
import { AccountCircle } from '@mui/icons-material';
import { db } from "./firebase"
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { red, green } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';
import { Divider } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
const Dashboard: React.FC = () => {

    const servicio = true;

    const { instance } = useMsal();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const loginRequest = {
        scopes: ["User.Read"], // Define necessary scopes
    };
    const [userID, setID]=React.useState<string>("");
    const [userInfo, setUserinfo] = React.useState<any[]>([]);
    const [loggedIn, setLogin] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogOut = async () => {
        instance.logoutPopup().then(() => {
            setLogin(false);
            navigate('/', { replace: true });
        });
    }
    const handleLogin = async () => {
        if (loggedIn) {

        } else {
            try {
                await instance.loginPopup(loginRequest);
                setLogin(true);
                console.log(loggedIn)
            } catch (error) {
                console.log(error);
            }
        }
    };

    React.useEffect(() => {
        /**/
        console.log(instance.getActiveAccount()?.username!);
        const match = instance.getActiveAccount()?.username!.match(/a(\d+)@unison\.mx/);
        setID(match![1]);
        const q = query(collection(db, "students"), where("studentID", "==", Number(match![1])));
        console.log(match![1])
        onSnapshot(q, (querySnapshot) => {
          setUserinfo(querySnapshot.docs.map((doc) => ({
            ...doc.data(),
          })) as any[]); // Provide a type annotation to specify the type
        })
        console.log(userInfo);
    }, []);
    const test = () => {
        console.log(userInfo);
        console.log(Math.round(Number(userInfo[0]?.approvedCredits)/Number(userInfo[0]?.requiredCredits) * 100))
    }
    const redBorder = {
        borderColor: red[500],
        borderWidth: 2,
        borderStyle: 'solid',
        display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, width: 200 
      };
      
      const greenBorder = {
        borderColor: green[500],
        borderWidth: 2,
        borderStyle: 'solid',
        display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, width: 200 
      };
      
      const blackBorder = {
        borderColor: "black",
        borderWidth: 2,
        borderStyle: 'solid',
        display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, width: 200 
      };
      

    return (
        <Box sx={{ flexGrow: 1, width: "100%", backgroundColor: "white" }}>
            <Box sx={{ flexGrow: 1, color: "black" }}>
                <AppBar position="fixed" style={{ backgroundColor: "#112e5c", transition: 'background-color 0.3s' }} sx={{ boxShadow: "none" }}>

                    <Toolbar>
                        <img src={LCCIcon} width="40" height="40" style={{ margin: 20 }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            DASHBOARD
                        </Typography>
                        {isAuthenticated ? (
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
                                    <MenuItem>{instance.getActiveAccount()?.name!}</MenuItem>
                                    <Link to={"dashboard"} style={{ textDecoration: 'none' }} ><MenuItem>Dashboard</MenuItem></Link>
                                    <MenuItem onClick={handleLogOut}>Cerrar sesión</MenuItem>
                                </Menu>
                            </div>
                        ) :
                            <Button variant="outlined" color="inherit" sx={{ m: 1 }} onClick={handleLogin}>Login</Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
            
            <Box sx={{ display: "flex", flexDirection: 'column', color: "black" }}>
                <div style={{ "textAlign": "left", "marginLeft": "30px", "marginTop": "80px", "marginBottom": "0px" }}>
                    <h2>Resumen</h2>
                </div>
                <Divider className="separator" sx={{ ml: "30px", width: "95%", "marginBottom": "25px" }} />
                <Button color="primary" sx={{ m: 1 }} onClick={test}>test</Button>
                <Grid container spacing={2} justifyContent="space-evenly">
                    {/* Card 1 */}
                    <Grid item>
                        <Card style={{ width: 300 }}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Your card content */}
                                <h2>Porcentaje de avance</h2>
                                <h1>{Math.round(Number(userInfo[0]?.approvedCredits)/Number(userInfo[0]?.requiredCredits) * 100)}%</h1>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item>
                        <Card style={{ width: 300 }}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Your card content */}
                                <h2>Créditos culturest</h2>
                                <h1>{userInfo[0]?.cultCredits}</h1>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Card 3 */}
                    <Grid item>
                        <Card style={{ width: 300 }}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Your card content */}
                                <h2>Nivel de inglés</h2>
                                <h1>4</h1>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
            <div style={{ "textAlign": "left", "marginLeft": "30px", "marginTop": "30px", "color": "black" }}>
                <h2>Servicio social</h2>

            </div>
            <Divider className="separator" sx={{ ml: "30px", width: "95%", "marginBottom": "20px" }} />
            {servicio ?
                (<div style={{ "textAlign": "left", "marginLeft": "30px", "marginTop": "30px", "color": "black" }}>
                    <p> Cumples con suficientes créditos para comenzar tu servicio social, aquí se encuentran algunos proyectos recomendados:</p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Proyecto</TableCell>
                                    <TableCell>Responsable</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Proyecto 1
                                    </TableCell>
                                    <TableCell>
                                        Responsable 1
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Proyecto 2
                                    </TableCell>
                                    <TableCell>
                                        Responsable 2
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>


                )
                :
                (<p>No cumples con la cantidad de créditos necesarios para comenzar tu servicio social.</p>)}
            <Divider className="separator" sx={{ ml: "30px", width: "95%", "marginBottom": "25px", "marginTop": "25px" }} />
            <div style={{ "textAlign": "left", "marginLeft": "30px", "marginTop": "30px", "color": "black" }}>
                <h2>Mi trayectoria</h2>
                <h3>Materias inscritas:</h3>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    00287 Seminario de Inteligencia Artificial
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    09465 Procesos paralelos y distribuidos
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <h3>Progreso:</h3>
                <Grid container spacing={2}>
                    <Grid container item justifyContent="center" spacing={2}>
                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Calculo diferencial e Integral</Typography>
                        </CardContent>
                        </Card>
                        </Grid>
                        
                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Calculo diferencial e Integral II</Typography>
                        </CardContent>
                        </Card>
                        </Grid>
                        
                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Calculo diferencial e Integral III</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Probabilidad</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Estadistica</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Optativa</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Optativa</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={blackBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Optativa</Typography>
                        </CardContent>
                        </Card>
                        </Grid>
                    </Grid>
                    {/* cluster*/}
                    <Grid container item justifyContent="center" spacing={2}>
                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Geometría Analítica</Typography>
                        </CardContent>
                        </Card>
                        </Grid>
                        
                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Álgebra Lineal I</Typography>
                        </CardContent>
                        </Card>
                        </Grid>
                        
                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Ecuaciones Diferenciales I</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Optativa Humanidades</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Analisis Lógico</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Inteligencia Artificial</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={greenBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Optativa</Typography>
                        </CardContent>
                        </Card>
                        </Grid>

                        <Grid item>
                        <Card style={redBorder}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant = "h9" align="center">Optativa</Typography>
                        </CardContent>
                        </Card>
                        </Grid>


                    
                    </Grid>
                </Grid>
            </div>
        <br/><br/><br/><br/><br/>
        </Box>

    );

};

export default Dashboard;
