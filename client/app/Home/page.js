"use client";
import React, { useState } from 'react'
import History from '@/components/History'
import { IoReorderThreeOutline } from "react-icons/io5";


export default function Home() {
    const [history, showHistory] = useState(false);
    return (
        <main className='flex flex-row h-screen w-screen'>
            <div className={`${history ? "w-4/5" : "w-0"} lg:w-1/5 overflow-auto`}>
                <History />
            </div>

            <div className="block sm:hidden">
                <button 
                    onClick = {() => {
                        console.log('Clicked');
                        showHistory(!history)
                    }}
                    className='mt-2 ml-2 flex justify-center items-start'>
                    <IoReorderThreeOutline size={26} />
                </button>
            </div>

        </main>
    )
}