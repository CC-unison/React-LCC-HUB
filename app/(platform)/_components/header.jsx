import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Logo } from './logo';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "white" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href='/'
                    >
                        <Logo fontSize="large" />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h5"
                        color="black"
                        align="center"
                        noWrap
                        sx={{ flex: 1, fontWeight: "bold" }}
                    >
                        {
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
