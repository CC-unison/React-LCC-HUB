import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";

interface LoadingProps {
  display?: string | null;
}

export default function Loading(props: LoadingProps) {
  const { display } = props;
  return (
    <Box
      height="100vh"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <CircularProgress size={100} />
        <Typography
          fontSize={22}
          fontWeight="bold"
          fontStyle="oblique"
          sx={{ pt: 3 }}
        >
          {display || "cargando"}
        </Typography>
      </Stack>
    </Box>
  );
}
