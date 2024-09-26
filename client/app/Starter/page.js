"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function StarterPage() {
    const router = useRouter();
    return (
        <div className="flex w-screen h-screen justify-center items-center px-4 md:px-10 bg-[#E7C25A]">
            <div className="flex lg:w-3/4 w-full md:w-3/4 cursor-default">
                <div className="flex flex-col w-full justify-center items-start">
                    <motion.h1 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-extrabold text-black lg:text-[7em] text-[2.5em] md:text-[4em] leading-[1.1] md:leading-[1] tracking-[-1px] md:tracking-[-2px] uppercase">
                       Eat food that is Healthy
                    </motion.h1>

                    <motion.p 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mt-6 lg:w-1/2 w-full flex lg:text-lg font-semibold text-[11px] text-black">
                        Our app is designed to help you successfully create a diet based on your body and the food you like. Easily optimize your eating schedule.
                    </motion.p>
                    <motion.button 
                        initial={{ y: 100, opacity: 0 }} // Start from below and transparent
                        animate={{ y: 0, opacity: 1 }}   // Move to desired position and fully visible
                        exit={{ y: 100, opacity: 0 }}     // Move down and fade out when exiting
                        transition={{ duration: 0.2 }}
                        onClick={() => router.push("/Home")}
                        className="flex justify-center items-center lg:p-4 lg:px-6 p-3 md:w-fit w-[85%]
                        px-4 border-2 border-black rounded-2xl mt-6
                        hover:text-black hover:scale-105"
                    >
                        <p className="font-semibold lg:text-base text-[12px] mr-2 text-black">Start Your Journey</p>
                        <FaArrowRightLong color='black'/>
                    </motion.button>
                </div>
            </div>      

            <div className="lg:w-1/4 w-1/12"></div>       
        </div>
    )
}
