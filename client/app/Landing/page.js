"use client";
import Navbar from "../../components/Navbar"
import StarterPage from "../Starter/page";
import PricingPage from "../Pricing/page";
import Reviews from "../Reviews/page";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <StarterPage />
            <PricingPage/>
            <Reviews />
        </div>
    )
}

export default LandingPage
