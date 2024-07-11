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
        <div id="reviews" className="h-screen w-full flex flex-col justify-evenly items-center px-10 py-2 bg-[#6EC0FF] rounded-lg mb-3">
            <div className="flex flex-col">
                <h1 className="text-5xl font-semibold">Would love to hear from you.</h1>
                <p className="text-5xl font-semibold">Get in touch!</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
                <div className="flex w-screen justify-center items-center">
                    <textarea
                        id="textarea"
                        // name="textarea"
                        className="border border-gray-300 p-2 w-1/2 h-32 resize-none outline-none rounded-md font-mono"
                        // value={textareaValue}
                        // onChange={(e) => setTextareaValue(e.target.value)}
                    />

                </div>
                <div className='flex mt-3'>
                    <input 
                        type='checkbox'
                    />
                    <p className='font-mono ml-1'>Send regular updates</p>
                </div>
            </div>

            <div className='w-screen flex justify-center items-center'>
                <button className='px-2 py-4 border-2 w-1/4 border-black rounded-md hover:scale-105'>
                    <p className='font-serif'>Submit</p>
                </button>
            </div>


            <button className='hover:-translate-y-1'onClick={scrollToTop}>
                <IoIosArrowUp  color="black" size={40}/>
            </button>

        </div>
    )
}