"use client";
import Navbar from "@/components/Navbar";
import LandingPage from "./Landing/page";
import PricingPage from "./Pricing/page";
import Reviews from "./Reviews/page";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user } = useAuth0();
  return (
    <main className="overflow-x-hidden">
      {/* {
        user ?
          <Home />
        :
        <> */}
          <Navbar />
          <LandingPage />
          <PricingPage/>
          <Reviews />
        {/* </>
       
      } */}
    </main>
  );
}
