import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";

export default function Loading() {
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
          loading
        </Typography>
      </Stack>
    </Box>
  );
}
