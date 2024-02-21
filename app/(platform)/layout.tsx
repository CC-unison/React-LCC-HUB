"use client"
import React from "react";
import { useMsal } from "@azure/msal-react";

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode,
}) => {
    const { instance, accounts, inProgress } = useMsal();
    const loginRequest = {
        scopes: ["User.Read"], // Define necessary scopes
    };


    if (accounts.length > 0) {
        return <div>{children}</div>
    } else if (inProgress === "login") {
        return <div>Login is currently in progress!</div>
    } else {
        return (
            <div>
                <div>There are currently no users signed in!</div>
                <button onClick={async () => {
                    await instance.loginPopup(loginRequest).then((response) => {
                        instance.setActiveAccount(response.account);
                    });
                }}>Login</button>
            </div>
        );
    }
}

export default PlatformLayout;
