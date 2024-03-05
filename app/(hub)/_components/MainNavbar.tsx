"use client";

import useScrollPosition from "@/lib/hooks/useScrollPosition";
import { AppBar, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DashboardButton from "./DashboardButton";

interface LinkButtonProps {
  text: string;
  href: string;
}
const LinkButton = (props: LinkButtonProps) => {
  const { text, href } = props;
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.2}
      sx={{
        cursor: "pointer",
        color: "text",
        "&:hover": { color: "gray" },
      }}
    >
      <Typography variant="body2">{text}</Typography>
    </Stack>
  );
};

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
            <LinkButton text="Soy LCC" href="soylcc" />
            <LinkButton text="Noticias" href="noticias" />
            <LinkButton text="Galería" href="galeria" />
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
          <DashboardButton borderRadius={3} />
        </Stack>
      </Container>
    </AppBar>
  );
};
