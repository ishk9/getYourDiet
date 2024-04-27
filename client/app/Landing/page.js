import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="flex w-full h-full justify-center items-center overflow-hidden">
            
            <div className="flex lg:w-3/4 w-11/12 cursor-default">
                <div className="flex flex-col w-full justify-center items-start">
                    <h1 className="font-extrabold text-white lg:text-[9em] text-[3em] leading-[1] tracking-[-2px]">YOU CAN EAT ANYTHING</h1>

                    <p className="mt-6 lg:w-1/2 w-full flex lg:text-base text-[11px]">
                        Our app is designed to help you successfully create a diet based on your body and the food you like. Easily optimize your eating schedule and receive community support
                        to reach your goals.
                    </p>
                    <Link 
                    href="/Home"
                    className="flex justify-center items-center lg:p-4 lg:px-6 p-3 px-4 border-2 rounded-2xl mt-6 hover:bg-white hover:text-black border-white">
                        <p className="font-semibold lg:text-base text-[12px] mr-2">Start Your Journey</p>
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>             
        </div>
    )
}
