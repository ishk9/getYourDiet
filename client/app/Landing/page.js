"use client";
import Navbar from "../../components/Navbar"
import StarterPage from "../Starter/page";
import PricingPage from "../Pricing/page";
import Reviews from "../Reviews/page";

const LandingPage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="bg-white">
                <StarterPage />
                <PricingPage/>
                <Reviews />
            </div>

        </div>
    )
}

export default LandingPage
