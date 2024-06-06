"use client";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { Auth0Provider } from '@auth0/auth0-react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Auth0Provider>
      <body className="min-h-screen min-w-screen">
        {children}
        <Toaster />
      </body>
      </Auth0Provider>
      
    </html>
  );
}
