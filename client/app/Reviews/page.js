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
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-red-500 px-10 py-2">
            <h1 className="">Reviews</h1>

            <p>Share your thoughts with us</p>
            <button 
                onClick={scrollToTop}
                className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
            >
                <IoIosArrowUp  color="black" size={40}/>
            </button>

        </div>
    )
}