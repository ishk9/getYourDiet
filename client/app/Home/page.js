"use client";
import { useState } from 'react';
import History from '@/components/History';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import UserInputSection from '@/components/UserInputSection';
import useStore from '../store';
import Dietbox from '@/components/Dietbox';

export default function Home() {
    
    const { activeChat, list } = useStore();
    const [historyOpen, setHistoryOpen] = useState(true);
    const toggleHistory = () => {
        setHistoryOpen(!historyOpen);
    };
    return (
        <main className='flex flex-row h-screen w-screen bg-white'>
            {/* History Section */}
            <div className={`${historyOpen ? "w-3/12" : "w-0"} overflow-auto  bg-[#F5F5F5] transition-width duration-300`}>
                <div className='flex justify-between px-5 items-center mt-4 sticky top-0 backdrop-filter backdrop-brightness-0 backdrop-opacity-100  bg-[#F5F5F5]'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-lg font-semibold mr-2 text-black'>Diets</h1>
                        <div className='flex justify-center items-center h-8 w-8 rounded-full bg-[#CBBCA5]'>
                            <p className='text-[13px] font-semibold'>{list.length}</p>
                        </div>
                    </div>
                    
                </div>
                <History />

                {/* axiom sentry cloudfare for preventing attacks */}
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
            <div className={`${historyOpen ? "w-6/12" : "w-full"} flex flex-col justify-center items-center`}>
                <Dietbox title={list[activeChat].about}/>
              
            </div>
            
            <div className={`w-3/12 flex flex-col justify-evenly items-center bg-[#F5F5F5] transition-width py-2 p-4`}>
                <h1 className='text-white font-bold text-[1.4em]'>Customize your diet</h1>
                <UserInputSection />
            </div>
        </main>
    );
}
