"use client";
import Navbar from "@/components/Navbar";
import LandingPage from "./Landing/page";
import PricingPage from "./Pricing/page";
import Reviews from "./Reviews/page";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <LandingPage />
      <PricingPage/>
      <Reviews />
    </main>
  );
}
