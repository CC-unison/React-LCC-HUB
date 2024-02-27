import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import LoginButton from "./LoginButton";

export const Section1 = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Main Background */}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <Image
          src="/main-bg-0_1.webp"
          alt="Edificio de LCC"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
      </Box>

      {/* Background Elements */}

      {/* Content*/}
      <Container sx={{ height: "80vh" }}>
        <Stack sx={{ height: "inherit" }} justifyContent="center">
          <Typography variant="h1" sx={{ letterSpacing: "0.01em", mb: 1 }}>
            LCC Hub
          </Typography>
          <Typography variant="h3" sx={{ letterSpacing: "0.03em", mb: 5 }}>
            un portal para la comunidad computóloga
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
          >
            <LoginButton />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
