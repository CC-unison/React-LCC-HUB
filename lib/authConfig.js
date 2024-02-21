import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";

export const msalConfig = {
    auth: {
        clientId: "37b2c61a-111d-4988-b2c7-1735452e4999",
        authority: "https://login.microsoftonline.com/67553645-0db3-4480-b127-6f819a79e367",
        redirectUri: "http://localhost:62213", // Update with your redirect URI
        postLogoutRedirectUri: "/"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
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
        return '';
    }
    const request = {
        scopes: ["User.Read"],
        account: activeAccount || accounts[0]
    };
    const authResult = await msalInstance.acquireTokenSilent(request);
    console.log(authResult);
    return authResult.accessToken
};

export default AuthProvider;
