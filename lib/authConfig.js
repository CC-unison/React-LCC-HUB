import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";

export const msalConfig = {
  auth: {
    clientId: process.env.MSAL_CLIENTID,
    authority: process.env.MSAL_AUTHID,
    redirectUri: process.env.MSAL_RURI, // Update with your redirect URI
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

const pca = new PublicClientApplication(msalConfig);

const AuthProvider = ({ children }) => {
  return <MsalProvider instance={pca}>{children}</MsalProvider>;
};

export const acquireAccessToken = async () => {
  const msalInstance = pca;
  const activeAccount = msalInstance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API
  const accounts = msalInstance.getAllAccounts();
  if (!activeAccount && accounts.length === 0) {
    return "";
  }
  const request = {
    scopes: ["User.Read"],
    account: activeAccount || accounts[0],
  };
  const authResult = await msalInstance.acquireTokenSilent(request);
  console.log(authResult);
  return authResult.accessToken;
};

export default AuthProvider;
