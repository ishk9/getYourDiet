"use client";
import React, { useState } from 'react';
import History from '@/components/History';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Home() {
    const [historyOpen, setHistoryOpen] = useState(true);
    
    const toggleHistory = () => {
        setHistoryOpen(!historyOpen);
    };


    
    return (
        
        <main className='flex flex-row h-screen w-screen'>
            {/* History Section */}
            <div className={`${historyOpen ? "w-3/5 md:w-1/5" : "w-0"} overflow-auto bg-black transition-width duration-300`}>
                <div className='flex justify-between px-5 items-center mt-4 sticky top-0 backdrop-filter backdrop-brightness-0 backdrop-opacity-100'>
                    <div className='flex'>
                        <h1 className='text-lg font-semibold mr-2'>Diets</h1>
                        <div className='flex justify-center items-center h-8 w-8 rounded-full bg-slate-600'>
                            <p className='text-[13px]'>10</p>
                        </div>
                    </div>
                    <button onClick={toggleHistory}>
                        
                    </button>
                </div>
                <History />
            </div>

            {/* Show History Button */}
            <div className='flex flex-col justify-center items-center'>
                <button 
                    className='flex flex-col justify-center items-center p-2'
                    onClick={toggleHistory}
                >   
                    {historyOpen ? 
                        <MdOutlineKeyboardArrowLeft size={32} color='black' />
                        : 
                        <MdOutlineKeyboardArrowRight size={32} color='black'/>
                    }
                </button>
            </div>

            {/* Diet Formation Section */}
            <div className={`${historyOpen ? "md:w-3/5" : "w-full"} flex justify-center items-center`}>
                <h1 className='text-black'>Welcome Onboard!</h1>
            </div>

        </main>
    );
}
