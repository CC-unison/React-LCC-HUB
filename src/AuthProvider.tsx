import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";

const msalConfig = {
  auth: {
    clientId: "37b2c61a-111d-4988-b2c7-1735452e4999",
    authority: "https://login.microsoftonline.com/67553645-0db3-4480-b127-6f819a79e367",
    redirectUri: "http://localhost:62213", // Update with your redirect URI
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
};

const pca = new PublicClientApplication(msalConfig);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <MsalProvider instance={pca}>{children}</MsalProvider>;
  };
  

export default AuthProvider;
