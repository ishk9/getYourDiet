"use client";
import React from 'react'
import useStore from '@/app/store'

function Navbar() {
    const {openOnboardingModal, setOpenOnboardingModal} = useStore();
    return (
        <div className="flex flex-row w-full justify-between items-center px-10 py-2 bg-[#DE3B3C]">
            <button>
                <p className="text-black text-lg font-bold uppercase">GetYourDiet</p>
            </button>

            <div className="flex flex-row w-2/4 lg:w-1/4 justify-evenly items-center">
                <button className="hover:-translate-y-0.5">
                    <p className="text-black text-sm font-bold">Our Method</p>
    
                </button>
                <button className="hover:-translate-y-0.5">
                    <p className="text-black text-sm font-bold uppercase">Pricing</p>
                </button>
                <button  className="hover:-translate-y-0.5">
                    <p className="text-black text-sm font-bold hidden sm:block uppercase">Reviews</p>
                </button>
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
        </div>
    )
}

export default Navbar
