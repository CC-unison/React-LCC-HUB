import { Stack, Button, Typography } from "@mui/material";
import React from "react";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import Link from "next/link";

const LoginButton = ({ ...sx }) => {
  return (
    <Link href="/dashboard">
      <Button
        variant="outlined"
        sx={{
          justifyContent: "left",
          borderRadius: 4,
          color: "text.primary",
          borderColor: "text.primary",
          height: 58,
          px: 2,
          ...sx,
        }}
      >
        <MicrosoftIcon sx={{ fontSize: 22 }} />

        <Stack sx={{ textAlign: "left", ml: 1 }}>
          <Typography>Ingresar</Typography>
          <Typography variant="caption" sx={{ lineHeight: 1.3 }}>
            con identidad unison
          </Typography>
        </Stack>
      </Button>
    </Link>
  );
};

export default LoginButton;
