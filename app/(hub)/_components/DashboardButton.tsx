import { Stack, Button, Typography } from "@mui/material";
import React from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Link from "next/link";

const DashboardButton = ({ ...sx }) => {
  return (
    <Link href="/dashboard">
      <Button
        variant="outlined"
        sx={{
          justifyContent: "left",
          borderRadius: 4,
          color: "#FAF9F6",
          borderColor: "#FAF9F6",
          height: 58,
          px: 2,
          ...sx,
        }}
      >
        <InsertEmoticonIcon sx={{ fontSize: 22 }} />

        <Stack sx={{ textAlign: "left", ml: 1 }}>
          <Typography>Mi portal</Typography>
          <Typography variant="caption" sx={{ lineHeight: 1.3 }}>
            avance académico
          </Typography>
        </Stack>
      </Button>
    </Link>
  );
};

export default DashboardButton;
