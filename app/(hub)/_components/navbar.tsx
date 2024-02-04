import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Logo } from './logo';


export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" sx={{ backgroundColor: "#112e5c" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href='/'
                    >
                        <Logo fontSize="large" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LCC Hub - Alpha v0
                    </Typography>
                    <Button color="inherit">Soy LCC</Button>
                    <Button color="inherit">Noticias</Button>
                    <Button color="inherit">Galeria</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

/* TOOD
 * 1. Create a react component for each button such that on click it goes to the section.
 * 2. Create a login component for sharing button across pages.
 */
