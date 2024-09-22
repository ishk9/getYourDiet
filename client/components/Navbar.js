"use client";
import useStore from '@/app/store';
import Link from 'next/link';
import { verifyUser } from '@/lib/services';
import { useState, useEffect } from "react";
import Image from 'next/image';

function Navbar() {
    // const { signedIn, setSignedIn } = useStore();
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    };
    const [isUserPresent, setIsUserPresent] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            const resp = await verifyUser();
            console.log("Resp: ", resp);
            setIsUserPresent(resp);
        };
        fetchData();
    }, []);
    return (
        <nav className="flex flex-row w-full justify-between items-center px-4 py-2 md:px-16">
            {/* GetYourDiet Logo */}
            <div className="md:hidden">
                <Image 
                    src="/logo.png"
                    alt="GetYourDiet Logo"
                    height={60}
                    width={60}
                />
            </div>
            <div className='hidden md:flex p-2 bg-black rounded-md w-auto justify-center items-center'>
                <Link href="/">
                    <p className="text-white text-2xl font-extrabold uppercase">GetYourDiet</p>
                </Link>
            </div>

            {/* Navigation Links (hidden on small screens) */}
            <div className="hidden md:flex w-[60%] items-center justify-start bg-black rounded-md p-2">
                <div className="flex flex-row w-full items-center">
                    <button  
                        onClick={() => scrollToSection('reviews')}
                        className="ml-4">
                        <p className="text-white text-base font-bold hidden sm:block uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Reviews</p>
                    </button>
                    <button 
                        onClick={() => scrollToSection('pricing')}
                        className="ml-4">
                        <p className="text-white text-base font-bold uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Pricing</p>
                    </button>
                    <button  
                        onClick={() => scrollToSection('faq')}
                        className="ml-4">
                        <p className="text-white text-base font-bold hidden sm:block uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Faq</p>
                    </button>
                    <Link  
                        href={isUserPresent ? "/Profile" : "/Login"}
                        className="ml-4">
                        <p className="text-white text-base font-bold hidden sm:block uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Profile</p>
                    </Link>
                </div>
            </div>

            {/* Login/Logout Button */}
            <div className='p-2 rounded-md flex justify-center items-center'>
                {
                    isUserPresent ? 
                    <button 
                        onClick={() => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('userId');
                            // setSignedIn(false);
                            setIsUserPresent(false);
                        }}
                        className='h-full'>
                        <p className="text-white bg-black text-base font-bold uppercase hover:bg-black/80 hover:text-white px-7 py-[10px] rounded-md font-mono">Logout</p>
                    </button>
                    :
                    <Link href={"/Login"} className='h-full'>
                        <p className="text-white bg-black text-base font-bold uppercase hover:bg-black/80 hover:text-white px-7 py-[10px] rounded-md font-mono">Login</p>
                    </Link>
                }
            </div>
        </nav>
    );
}

export default Navbar;
