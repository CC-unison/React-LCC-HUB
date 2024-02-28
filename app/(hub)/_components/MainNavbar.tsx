"use client";

import useScrollPosition from "@/lib/hooks/useScrollPosition";
import { AppBar, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "./LoginButton";

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

export const MainNavbar = () => {
  const scrollPosition = useScrollPosition();
  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: 72,
        bgcolor: "rgba(7,7,16,.7)",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-betweeen"
          flexWrap="wrap"
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Image
              src="/logo-lcc-blanco.svg"
              alt="Logo LCC"
              width={145}
              height={54}
            />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={6}
            sx={{ flex: 1 }}
            flexWrap="wrap"
          >
            <LinkButton>
              <Typography variant="body2">Soy LCC</Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </LinkButton>

            <LinkButton>
              <Typography variant="body2">Noticias</Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </LinkButton>

            <LinkButton>
              <Typography variant="body2">Galería</Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </LinkButton>

            {/*   <LinkButton> */}
            {/*     <Typography variant="body2">...</Typography> */}
            {/*     <KeyboardArrowDownIcon fontSize="small" /> */}
            {/*   </LinkButton> */}
            {/**/}
            {/*   <LinkButton spacing={0.5}> */}
            {/*     <Typography variant="body2">...</Typography> */}
            {/*     <CallMadeIcon sx={{ fontSize: 12 }} /> */}
            {/*   </LinkButton> */}
          </Stack>
          <LoginButton borderRadius={3} />
        </Stack>
      </Container>
    </AppBar>
  );
};
