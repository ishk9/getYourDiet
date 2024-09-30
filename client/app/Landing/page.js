"use client";
import Navbar from "../../components/Navbar"
import StarterPage from "../Starter/page";
import Contact from "../Contact/page";
import FaqPage from "../Faq/page";
import Reviews from "../Reviews/page";
import QuotesPage from "../Quotes/page";
import PricingPage from "../Pricing/page";
import Footer from "@/components/Footer";

const LandingPage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="bg-black">
                <StarterPage />
                <Reviews />
                <PricingPage />
                <FaqPage />
                <Contact />
                <Footer />
            </div>

        </div>
    )
}

export default LandingPage
