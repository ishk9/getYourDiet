"use client";
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

export default function StarterPage() {
    return (
        <div className="flex w-screen h-screen justify-center items-center px-10 py-2 bg-[#E7C25A]">
            <div className="flex lg:w-3/4 w-11/12 cursor-default">
                <div className="flex flex-col w-full justify-center items-start">
                    <h1 className="font-extrabold text-black lg:text-[7em] text-[3em] leading-[1] tracking-[-2px] uppercase">
                       Eat food that is Healthy
                    </h1>

                    <p className="mt-6 lg:w-1/2 w-full flex lg:text-base font-semibold text-[11px] text-black">
                        Our app is designed to help you successfully create a diet based on your body and the food you like. Easily optimize your eating schedule.
                    </p>
                    <Link 
                    href="/Home"
                    className="flex justify-center items-center lg:p-4 lg:px-6 p-3 
                        px-4 border-2 border-black rounded-2xl mt-6
                        hover:text-black  hover:scale-105"
                    >
                        <p className="font-semibold lg:text-base text-[12px] mr-2 text-black">Start Your Journey</p>
                        <FaArrowRightLong color='black'/>
                    </Link>
                </div>
            </div>      
            
            <div className="lg:w-1/4 w-1/12"></div>       
        </div>
    )
}
