"use client";
import { useState } from 'react';
import History from '@/components/History';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import UserInputSection from '@/components/UserInputSection';
import { useAuth0 } from "@auth0/auth0-react";
import useStore from '../store';

export default function Home() {
    
    const { activeChat, list } = useStore();
    const [historyOpen, setHistoryOpen] = useState(true);
    const { user } = useAuth0();
    const toggleHistory = () => {
        setHistoryOpen(!historyOpen);
    };
    console.log(user);
    return (
        <main className='flex flex-row h-screen w-screen bg-[#E7C25A]'>
            {/* History Section */}
            <div className={`${historyOpen ? "w-3/5 md:w-4/12" : "w-0"} overflow-auto  bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30 transition-width duration-300`}>
                <div className='flex justify-between px-5 items-center mt-4 sticky top-0 backdrop-filter backdrop-brightness-0 backdrop-opacity-100  bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30'>
                    <div className='flex'>
                        <h1 className='text-lg font-semibold mr-2 text-white'>Diets</h1>
                        <div className='flex justify-center items-center h-8 w-8 rounded-full bg-slate-600'>
                            <p className='text-[13px]'>10</p>
                        </div>
                    </div>
                    <button onClick={toggleHistory}>
                        
                    </button>
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
            <div className={`${historyOpen ? "md:w-3/5" : "w-full"} flex justify-center items-center`}>
                <h1 className='text-black'>Welcome Onboard!</h1>
                <p>{list[activeChat].about}</p>
            </div>
            
            <div className={`md:w-3/6 flex flex-col justify-evenly items-center bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30 transition-width w-3/5 py-2 p-4`}>
                <h1 className='text-white font-bold text-[1.4em]'>Customize your diet</h1>
                <UserInputSection />
            </div>
        </main>
    );
}
