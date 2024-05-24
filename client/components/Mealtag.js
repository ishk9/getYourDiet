import React from 'react'
import { MdOutlineCancel } from "react-icons/md";

function Mealtag({ item, tags, func }) {
   
    return (
        <div className="relative flex justify-center items-center px-8 h-9 rounded-md border border-zinc-600 mx-2">
            <button 
                onClick={() => {
                    console.log("Deleted");
                    func(item);
                }}
                className="absolute top-0 right-0 mt-1 mr-1">
                <MdOutlineCancel color="white"/>
            </button>
            <p className="text-white text-sm">{item}</p>
        </div>
    )
}

export default Mealtag
