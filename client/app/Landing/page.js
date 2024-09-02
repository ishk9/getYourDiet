"use client";
import Navbar from "../../components/Navbar"
import StarterPage from "../Starter/page";
import Contact from "../Contact/page";
import FaqPage from "../Faq/page";
import Reviews from "../Reviews/page";

const LandingPage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="bg-white">
                <StarterPage />
                <Reviews />
                <FaqPage />
                <Contact />
            </div>

        </div>
    )
}

export default LandingPage
