"use client";
import React, { useState } from 'react';
import History from '@/components/History';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";


export default function Home() {
    const [history, showHistory] = useState(true);
    const [diets, numberDiets] = useState(10);

    return (
        <main className='flex flex-row h-screen w-screen'>
            <div className={`${history ? "w-4/5 md:w-1/5" : "w-0"} overflow-auto bg-black`}>

                <div className='flex justify-between px-5 items-center mt-4 sticky top-0 backdrop-filter backdrop-brightness-0 backdrop-opacity-100'>
                    <div className='flex'>
                        <h1 className='text-lg font-semibold mr-2'>Diets</h1>
                        <div className='flex justify-center items-center h-8 w-8 rounded-full bg-slate-600'>
                            <p className='text-[13px]'>{diets}</p>
                        </div>
                    </div>
                    <button onClick={() => {}}>
                        {/* <BsThreeDots className='z-20' /> */}
                    </button>
                    
                    
                </div>


                <History />
            </div>

            {/* Reorder Button for Small Screens */}
            <div className={`flex w-5 flex-col justify-center items-centerml-2 ml-1`}>
                <button 
                    className='flex flex-col justify-center items-center p-2'
                    onClick={() => showHistory(!history)}
            
                >   
                    {history ? 
                        <MdOutlineKeyboardArrowLeft size={28} />
                        : 
                        <MdOutlineKeyboardArrowRight size={28}/>
                    }
                </button>
            </div>
            

            {/* Diet formation div */}
            <div className={`${history ? "w-3/5" : "w-4/5"} md:col-span-3 flex justify-center items-center`}>
                {/* Content for Diet formation */}
                <h1>Welcome Onboard!</h1>
            </div>

            {/* UserInput Section */}
            <div className={`${history ? "md:w-1/5" : "w-0 md:w-1/5"} md:col-span-1 bg-black`}>
                {/* UserInput */}
            </div>
        </main>
    )
}