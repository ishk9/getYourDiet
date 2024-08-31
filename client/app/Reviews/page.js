"use client";
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

export default function Reviews() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
    })
    };
    return (
        <div id="reviews" className="h-screen w-screen flex justify-evenly items-center px-10 py-2 bg-black mb-3">
            <div className='w-1/2 h-full'>

            </div>

            <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                <div className='flex flex-col w-[65%]  justify-start items-start'>
                    <h1 className="text-xl font-semibold text-white">Would love to hear from you.</h1>
                    <p className="text-xl font-semibold text-white">Get in touch!</p>
                </div>

                <div className="flex flex-col h-80 w-[65%] justify-start items-center">
                    <div className='w-full mt-2'>
                        <p className='text-sm text-white'>Name</p>
                        <input className='h-12 rounded-sm w-[80%] border-white border mt-1 p-1 outline-none'/>
                    </div>

                    <div className='w-full mt-2'>
                        <p className='text-sm text-white'>Email Address</p>
                        <input className='h-12 rounded-sm w-[80%] border-white border mt-1 p-1 outline-none'/>
                    </div>

                    <div className='w-full mt-2'>
                        <p className='text-sm text-white'>Feedback</p>
                        <input className='h-12 rounded-sm w-[80%] border-white border mt-1 p-1 outline-none'/>
                    </div>

                    <div className='w-full mt-6'>
                        <button className='p-3 border w-[80%] border-white rounded-md hover:scale-105'>
                            <p className='text-white'>Submit</p>
                        </button>
                    </div>
                        
                    
                </div>
            </div>
        </div>
    )
}