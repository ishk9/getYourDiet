import Navbar from "../../components/Navbar"
import StarterPage from "../Starter/page";
import PricingPage from "../Pricing/page";
import Reviews from "../Reviews/page";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <StarterPage />
            <PricingPage/>
            <Reviews />
        </>
    )
}

export default LandingPage
