"use client";
import React, { useState } from 'react'
import History from '@/components/History'
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";


export default function Home() {
    const [history, showHistory] = useState(false);
    const [diets, numberDiets] = useState(10);

    return (
        <main className='flex flex-row h-screen w-screen'>
            <div className={`${history ? "w-3/5" : "w-0"} lg:w-1/5 overflow-auto`}>

                <div className='flex justify-between px-5 items-center mt-4 sticky top-0 backdrop-filter backdrop-brightness-0 backdrop-opacity-100'>
                    <div className='flex'>
                        <h1 className='text-lg font-semibold mr-2'>Diets</h1>
                        <div className='flex justify-center items-center h-8 w-8 rounded-full bg-slate-600'>
                            <p className='text-[13px]'>{diets}</p>
                        </div>
                    </div>
                    <button onClick={() => {}}>
                        <BsThreeDots className='z-20' />
                    </button>
                    
                    
                </div>


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