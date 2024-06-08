"use client";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { Auth0Provider } from '@auth0/auth0-react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Auth0Provider
      domain="dev-0xfo4x238tufvez0.us.auth0.com"
      clientId="naPBMxT4sR5YcCcsV5ECXFnGZ0gqHheG"
      authorizationParams={{
      }}
    >
      <html lang="en">
        <body className="min-h-screen min-w-screen">
          {children}
          <Toaster />
        </body>
      </html>
    </Auth0Provider>
  );
}
