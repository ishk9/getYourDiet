"use client";
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    console.log(user);
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    };
    return (
        <nav className="flex flex-row w-full justify-between items-center px-16 py-2 bg-transparent fixed  top-0 z-50">
            <div className="flex w-1/2 items-center">
                <Link href="/">
                    <p className="text-black text-2xl font-extrabold uppercase">GetYourDiet</p>
                </Link>

                <div className="flex flex-row w-1/4 justify-evenly items-center ml-16">
                    <button 
                        onClick={() => scrollToSection('pricing')}
                        className="hover:-translate-y-0.5" >
                        <p className="text-black text-sm font-bold uppercase">Pricing</p>
                    </button>
                    <button  
                        onClick={() => scrollToSection('reviews')}
                        className="hover:-translate-y-0.5">
                        <p className="text-black text-sm font-bold hidden sm:block uppercase">Reviews</p>
                    </button>
                </div>
            </div>


            <div className='flex justify-center items-center'>
                <Link href={"https://x.com/Ishnk9"} target="_blank">
                    <FaXTwitter 
                        size={18}
                    />
                </Link>

                {
                    isAuthenticated ? 
                        <button 
                            onClick={() => logout()}
                            className='flex ml-4 justify-center items-center border-2 border-black p-2 px-3 rounded-lg hover:-translate-y-0.5'>
                            <p className="text-black text-sm font-semibold">Logout</p>
                        </button>
                        :
                        <button 
                            onClick={() => loginWithRedirect()}
                            className='flex ml-4 justify-center items-center border-2 border-black p-2 px-3 rounded-lg hover:-translate-y-0.5'>
                            <p className="text-black text-sm font-semibold">Login</p>
                        </button>
                }
            </div>
        </nav>
    )
}

export default Navbar
