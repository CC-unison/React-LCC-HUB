"use client";
import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  const { instance, accounts, inProgress } = useMsal();

  const loginRequest = {
    scopes: ["User.Read"], // Define necessary scopes
  };

  useEffect(() => {
    const popup = async () => {
      await instance.loginPopup(loginRequest).then((response) => {
        instance.setActiveAccount(response.account);
      });
    };
    popup();
  }, []);

  return !(accounts.length > 0) ? (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={150} sx={{ heigh: "100%" }} />
    </Container>
  ) : (
    <div>{children}</div>
  );
  // if (accounts.length > 0) {
  //   return <div>{children}</div>;
  // } else if (inProgress === "login") {
  //   return <div>Login is currently in progress!</div>;
  // } else {
  //   return (
  //     <div>
  //       <div>There are currently no users signed in!</div>
  //       <button
  //         onClick={async () => {
  //           await instance.loginPopup(loginRequest).then((response) => {
  //             instance.setActiveAccount(response.account);
  //           });
  //         }}
  //       >
  //         Login
  //       </button>
  //     </div>
  //   );
  // }
};

export default PlatformLayout;
