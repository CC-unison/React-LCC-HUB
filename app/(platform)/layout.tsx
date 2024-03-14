"use client";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import Loading from "./loading";
import {
  Checkbox,
  Button,
  FormControlLabel,
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { Suspense } from "react";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import Image from "next/image";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  const { instance, accounts, inProgress } = useMsal();
  const loginRequest = {
    scopes: ["User.Read"],
  };

  if (inProgress == "login") {
    return <Loading display="iniciando sesión" />;
  } else if (inProgress == "logout") {
    return <Loading display="cerrando sesión" />;
  }
  return (
    <Suspense fallback={<Loading />}>
      {" "}
      <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {/* Login */}
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid item xs={false} sm={4} md={7}>
            <Image
              src="/rectoria.jpg"
              alt="Edificio de LCC"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }} // optional
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ mt: 1 }}>
                {/* LoginButton */}
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  onClick={async () => {
                    await instance.loginPopup(loginRequest).then((response) => {
                      instance.setActiveAccount(response.account);
                    });
                  }}
                  sx={{
                    justifyContent: "left",
                    borderRadius: 4,
                    color: "text.primary",
                    borderColor: "text.primary",
                    height: 90,
                    px: 2,
                  }}
                >
                  <MicrosoftIcon sx={{ fontSize: 36 }} />

                  <Stack sx={{ textAlign: "left", ml: 1 }}>
                    <Typography variant="h3">Ingresar</Typography>
                    <Typography variant="caption" sx={{ lineHeight: 1.3 }}>
                      con identidad unison
                    </Typography>
                  </Stack>
                </Button>
                <FormControlLabel
                  control={<Checkbox value="recordar" color="primary" />}
                  label="Recuerdame"
                  checked={true}
                  disabled={true}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </UnauthenticatedTemplate>
    </Suspense>
  );
};

export default PlatformLayout;
