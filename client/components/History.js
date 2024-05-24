"use client";
import React from 'react'
// Icons
import { GoSearch } from "react-icons/go";
import { BsPinAngle } from "react-icons/bs";
import { MdOutlineDataset } from "react-icons/md";

// Components
import Chat from './Chat';
import { DialogDemo } from './CreateFolder';
import useStore from '@/app/store';

const dummyDataPinned = [
    {id: 1, name: "Ishaan", date: '24 April', description: 'abcsefwdcf'},
]

function History() {
    const { list, addItem, updateItem, removeItem } = useStore();
    const [query, setQuery] = React.useState(""); 

    const filteredData = list.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase())
    }) 

    return (
        <div className="px-5 mr-3 bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
            {/* Search Bar */}
            <div className='backdrop-filter backdrop-brightness-0 backdrop-opacity-100 sticky top-8 z-10 py-5  bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30'>
                <div className='flex justify-center items-center backdrop-filter backdrop-brightness-0'>
                    <div className='flex  bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30'>
                        <input 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="h-9 rounded-l-lg w-full bg-neutral-900 p-2 outline-none text-white" 
                        />
                        <button 
                            className="flex justify-center items-center hover:bg-neutral-800 h-9 w-8 bg-neutral-900 rounded-r-lg">
                            <GoSearch color='white'/>
                        </button>
                    </div>

                    {/* Create new button */}
                    {/* className="flex justify-center items-center h-9 w-11 ml-2 bg-[#CBBCA5] rounded-lg"> */}
                    <DialogDemo />
                
                    
                </div>

    
                <div className='flex flex-col mt-5 sticky top-14  bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30'>
                    <div className='flex justify-start items-start'>
                        <BsPinAngle className='text-neutral-600'/>
                        <p className='text-neutral-600 font-semibold text-[10px] uppercase ml-1'>Pinned</p>
                    </div>


                    {/* Pinned Diets */}
                    <div className='flex flex-col mt-2  bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30'>
                        {dummyDataPinned.map((data, id) => (
                            <Chat key={id} props={data}/>
                        ))}
                    </div>

                    <div className='flex justify-start items-start sticky top-64 z-10 backdrop-filter backdrop-brightness-0 mt-2  bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30'>
                        <MdOutlineDataset className='text-neutral-600'/>
                        <p className='text-neutral-600 font-semibold text-[10px] uppercase ml-1'>All</p>
                    </div>

                </div>
            </div>


            <div className='flex flex-col '>
                {/* All Diets */}
                <div className='flex flex-col mt-2'>
                    {filteredData.map((data, id) => (
                        <Chat key={id} props={data}/>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default History
