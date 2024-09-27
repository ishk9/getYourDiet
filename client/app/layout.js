"use client";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css'; 
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className="min-h-screen min-w-screen">
          {children}
          <Toaster />
          <Analytics/>
        </body>
      </html>
  );
}
