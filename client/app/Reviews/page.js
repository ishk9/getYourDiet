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
        <div className="h-screen w-screen bg-red-500 px-10 py-2">
            <p>Reviews</p>
            <button onClick={scrollToTop}>
                <IoIosArrowUp  color="black" size={40}/>
            </button>

        </div>
    )
}