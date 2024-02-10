import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'
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
                <Toolbar
                    component="nav"
                    variant="dense"
                    sx={{ justifyContent: 'space-around', overflowX: 'auto', backgroundColor: '#112e5d', }}
                >
                    {sections.map((section) => (
                        <Link
                            key={section.title}
                            href={section.url}
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
