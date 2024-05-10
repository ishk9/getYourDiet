"use client";
import Link from 'next/link'
import React from 'react'
import useStore from '@/app/store'

function Navbar() {
    const {openOnboardingModal, setOpenOnboardingModal} = useStore();
    return (
        <navbar className="flex flex-row w-full justify-between items-center">
            <Link href="/">
                <p className="text-white font-semibold">GetYourDiet</p>
            </Link>

            <div className="flex flex-row w-2/4 lg:w-1/4 justify-evenly items-center">
                <Link href="/">
                    <p className="text-white font-semibold">Our Method</p>
                </Link>
                <Link href="/Pricing">
                    <p className="text-white font-semibold">Pricing</p>
                </Link>
                <Link href="/Reviews">
                    <p className="text-white font-semibold hidden sm:block">Reviews</p>
                </Link>
            </div>

            <div>
                <button 
                    onClick={() => {
                        console.log(openOnboardingModal);
                        setOpenOnboardingModal();
                    }}
                    className='flex justify-center items-center border p-2 px-3 rounded-lg hover:bg-neutral-800'>
                    <p className="text-white text-sm font-semibold">Sign Up</p>
                </button>
            </div>
        </navbar>
    )
}

export default Navbar
