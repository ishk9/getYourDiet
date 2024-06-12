"use client";
import Navbar from "../../components/Navbar"
import StarterPage from "../Starter/page";
import PricingPage from "../Pricing/page";
import Reviews from "../Reviews/page";

const LandingPage = () => {
    return (
        <main>
            <Navbar />
            <StarterPage />
            <PricingPage/>
            <Reviews />
        </main>
    )
}

export default LandingPage
