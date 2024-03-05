import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DashboardButton from "./DashboardButton";

export const Section1 = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Main Background */}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <Image
          src="/LCC_invitados.webp"
          alt="Edificio de LCC"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
      </Box>

      {/* Background Elements */}

      {/* Content*/}
      <Container sx={{ height: "90vh" }}>
        <Stack sx={{ height: "inherit" }} justifyContent="center">
          <Typography
            color="#FAF9F6"
            variant="h1"
            sx={{ letterSpacing: "0.01em", mb: 1 }}
          >
            LCC Hub
          </Typography>
          <Typography
            color="#FAF9F6"
            variant="h3"
            sx={{ letterSpacing: "0.03em", mb: 5 }}
          >
            un portal para la comunidad computóloga
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
          >
            <DashboardButton bgcolor="rgba(7,7,16,.7)" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
