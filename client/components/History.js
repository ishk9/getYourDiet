import React from 'react'
import { FiEdit } from "react-icons/fi";
import { GoSearch } from "react-icons/go";

function History() {
    return (
        <div className="w-1/5 p-5">
            <div className='flex justify-center items-center'>
                {/* Search Bar */}
                <div className='flex'>
                    <input className="h-8 rounded-l-lg w-full bg-neutral-900 p-2 outline-none" 
                    />
                    <button className="flex justify-center items-center hover:bg-neutral-800 h-8 w-8 bg-neutral-900 rounded-r-lg">
                        <GoSearch />
                    </button>
                </div>

                {/* Create new button */}
                <div className="flex justify-center items-center h-8 w-10 ml-2 bg-[#CBBCA5] rounded-lg">
                    <FiEdit color='black' size={16}/>
                </div>

            </div>

                

            <div>
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
