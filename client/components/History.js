import React from 'react'
import { FiEdit } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { BsPinAngle } from "react-icons/bs";

function History() {
    return (
        <div className="w-1/5 p-5">
            <div className='flex justify-center items-center'>
                {/* Search Bar */}
                <div className='flex'>
                    <input className="h-9 rounded-l-lg w-full bg-neutral-900 p-2 outline-none" 
                    />
                    <button className="flex justify-center items-center hover:bg-neutral-800 h-9 w-8 bg-neutral-900 rounded-r-lg">
                        <GoSearch />
                    </button>
                </div>

                {/* Create new button */}
                <div className="flex justify-center items-center h-9 w-11 ml-2 bg-[#CBBCA5] rounded-lg">
                    <FiEdit color='black' size={16}/>
                </div>

            </div>

                

            <div className='flex justify-start items-start mt-5'>
                <BsPinAngle className='text-neutral-600'/>
                <p className='text-neutral-600 font-semibold text-[10px] uppercase'>Pinned</p>
                {/* Pinned Diets */}
            </div>

            <div>
                {/* All Diets */}
            </div>


            <div>
                {/* Clear all button */}
            </div>

        </div>
    )
}

export default History
