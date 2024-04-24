import React from 'react'
import { FiEdit } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { BsPinAngle } from "react-icons/bs";
import { MdOutlineDataset } from "react-icons/md";
import Chat from './Chat';

const dummyDataPinned = [
    {id: 1, name: "Ishaan", date: '24 April', description: 'abcsefwdcf'},
    {id: 2, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
]
const dummyData = [
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
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {id: 8, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
]

function History() {
    return (
        <div className="w-1/5 px-5 overflow-auto">
            {/* Search Bar */}
            <div className='backdrop-filter backdrop-brightness-0 sticky top-0 z-10 py-5'>
                <div className='flex justify-center items-center backdrop-filter backdrop-brightness-0'>
                    <div className='flex'>
                        <input className="h-9 rounded-l-lg w-full bg-neutral-900 p-2 outline-none" 
                        />
                        <button className="flex justify-center items-center hover:bg-neutral-800 h-9 w-8 bg-neutral-900 rounded-r-lg">
                            <GoSearch />
                        </button>
                    </div>

                    {/* Create new button */}
                    <button className="flex justify-center items-center h-9 w-11 ml-2 bg-[#CBBCA5] rounded-lg">
                        <FiEdit color='black' size={16}/>
                    </button>
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
                    {dummyData.map((data, id) => (
                        <Chat key={id} props={data}/>
                    ))}
                </div>

            </div>

            <div>
                {/* Clear all button */}
            </div>

        </div>
    )
}

export default History
