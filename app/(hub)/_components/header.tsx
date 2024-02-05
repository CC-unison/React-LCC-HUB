import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import React from 'react';
import { Logo } from './logo';

interface HeaderProps {
    sections: ReadonlyArray<{
        title: string;
        url: string;
    }>;
    title: string;
}

export const Header = (props: HeaderProps) => {
    const { sections, title } = props;
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
                        {title}
                    </Typography>
                    <Button variant="contained" size="medium" sx={{ backgroundColor: "black" }}>
                        Log In
                    </Button>
                </Toolbar>
                <Toolbar
                    component="nav"
                    variant="dense"
                    sx={{ justifyContent: 'space-around', overflowX: 'auto', backgroundColor: '#112e5d', }}
                >
                    {sections.map((section) => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            sx={{ p: 1, flexShrink: 0 }}
                        >
                            {section.title}
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

/* TOOD
 * 2. Create a login component for sharing button across pages.
 */
