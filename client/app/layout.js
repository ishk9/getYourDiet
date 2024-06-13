"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { Auth0Provider } from '@auth0/auth0-react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [redirectUrl, setRedirectUrl] = useState("");
  useEffect(() => {
      setRedirectUrl(window.location.origin);
      console.log(`Origin is ${redirectUrl}`);
  }, []);

  return (
    // <Auth0Provider
    //   domain="dev-0xfo4x238tufvez0.us.auth0.com"
    //   clientId="zBSnnTSMRoROMP3a8tU7V2CA0KUopuSK"
    //   authorizationParams={{
    //     redirect_uri: redirectUrl
    //   }}
    // >
      <html lang="en">
        <body className="min-h-screen min-w-screen">
          {children}
          <Toaster />
        </body>
      </html>
    // </Auth0Provider>
  );
}
