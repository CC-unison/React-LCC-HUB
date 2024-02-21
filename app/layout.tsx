"use client"
import type { Metadata } from "next";
import { Toolbar, IconButton, Typography, CssBaseline } from "@mui/material";
import { Logo } from "./(hub)/_components/logo";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/lib/authConfig";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
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
                        LCC Hub
                    </Typography>
                </Toolbar>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
