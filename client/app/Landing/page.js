import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="flex w-full h-full justify-center items-center">
            
            <div className="flex w-3/4 cursor-default">
                <div className="flex flex-col w-full justify-center items-start">
                    <h1 className="font-extrabold text-white text-[9em] leading-[1] tracking-[-2px]">YOU CAN EAT ANYTHING</h1>

                    <p className="mt-6 w-1/2 flex">
                        Our app is designed to help you successfully create a diet based on your body and the food you like. Easily optimize your eating schedule and receive community support
                        to reach your goals.
                    </p>
                    <Link 
                    href="/Home"
                    className="flex justify-center items-center p-4 px-6 border-2 rounded-2xl mt-6 hover:bg-white hover:text-black border-white">
                        <p className="font-semibold mr-2">Start Your Journey</p>
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>


            <div className="flex w-1/4 justify-center items-center">       
                {/* <p>&quot;Get Healthy for yourself. It&apos;s about you, not others.&quot;</p> */}
            </div>
             
        </div>
    )
}
