"use client";
import React from 'react'
import { GoSearch } from "react-icons/go";
import { BsPinAngle } from "react-icons/bs";
import { MdOutlineDataset } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import Chat from './Chat';
import { DialogDemo } from './CreateFolder';

const dummyDataPinned = [
    {id: 1, name: "Ishaan", date: '24 April', description: 'abcsefwdcf'},
    {id: 2, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
]

function History() {
    const [dummyData, setDummyData] = React.useState([
        {id: 1, name: "Ishaan", date: '24 April', description: 'abcsefwdcf'},
        {id: 2, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 3, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 4, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 5, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 6, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 7, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
        {id: 8, name: "xyz", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    ])
    const [query, setQuery] = React.useState(""); 

    const filteredData = dummyData.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase())
    }) 

    return (
        <div className="px-5 mr-3">
            {/* Search Bar */}
            <div className='backdrop-filter backdrop-brightness-0 backdrop-opacity-100 sticky top-8 z-10 py-5'>
                <div className='flex justify-center items-center backdrop-filter backdrop-brightness-0'>
                    <div className='flex'>
                        <input 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="h-9 rounded-l-lg w-full bg-neutral-900 p-2 outline-none" 
                        />
                        <button 
                            className="flex justify-center items-center hover:bg-neutral-800 h-9 w-8 bg-neutral-900 rounded-r-lg">
                            <GoSearch />
                        </button>
                    </div>

                    {/* Create new button */}
                    {/* className="flex justify-center items-center h-9 w-11 ml-2 bg-[#CBBCA5] rounded-lg"> */}
                    <DialogDemo />
                
                    
                </div>

    
                <div className='flex flex-col mt-5 sticky top-14'>
                    <div className='flex justify-start items-start'>
                        <BsPinAngle className='text-neutral-600'/>
                        <p className='text-neutral-600 font-semibold text-[10px] uppercase ml-1'>Pinned</p>
                    </div>


                    {/* Pinned Diets */}
                    <div className='flex flex-col mt-2'>
                        {dummyDataPinned.map((data, id) => (
                            <Chat key={id} props={data}/>
                        ))}
                    </div>

                    <div className='flex justify-start items-start sticky top-64 z-10 backdrop-filter backdrop-brightness-0 mt-2'>
                        <MdOutlineDataset className='text-neutral-600'/>
                        <p className='text-neutral-600 font-semibold text-[10px] uppercase ml-1'>All</p>
                    </div>

                </div>
            </div>


            <div className='flex flex-col'>
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
