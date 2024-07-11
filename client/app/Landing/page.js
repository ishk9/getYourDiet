"use client";
import Navbar from "../../components/Navbar"
import StarterPage from "../Starter/page";
import PricingPage from "../Pricing/page";
import Reviews from "../Reviews/page";

const LandingPage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="p-4 px-12 bg-white">
                <StarterPage />
                <PricingPage/>
                <Reviews />
            </div>

        </div>
    )
}

export default LandingPage
