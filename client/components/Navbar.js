"use client";
import Link from 'next/link'
import React from 'react'
import useStore from '@/app/store'

function Navbar() {
    const {openOnboardingModal, setOpenOnboardingModal} = useStore();
    return (
        <navbar className="flex flex-row w-full justify-between items-center px-2">
            <Link href="/">
                <p className="text-black text-lg font-bold">GetYourDiet</p>
            </Link>

            <div className="flex flex-row w-2/4 lg:w-1/4 justify-evenly items-center">
                <Link className="hover:-translate-y-0.5" href="/">
                    <p className="text-black font-semibold">Our Method</p>
                </Link>
                <Link className="hover:-translate-y-0.5" href="/Pricing">
                    <p className="text-black font-semibold">Pricing</p>
                </Link>
                <Link className="hover:-translate-y-0.5" href="/Reviews">
                    <p className="text-black font-semibold hidden sm:block">Reviews</p>
                </Link>
            </div>

            <div>
                <button 
                    onClick={() => {
                        console.log(openOnboardingModal);
                        setOpenOnboardingModal();
                    }}
                    className='flex justify-center items-center border-2 border-black p-2 px-3 rounded-lg hover:-translate-y-0.5'>
                    <p className="text-black text-sm font-semibold">Sign Up</p>
                </button>
            </div>
        </navbar>
    )
}

export default Navbar
