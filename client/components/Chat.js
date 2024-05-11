import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

function Chat({props}) {
    return (
        <div className="flex flex-col justify-center items-start hover:bg-neutral-900  p-3 my-1 rounded-lg">
            <div className="flex w-full justify-between items-center">
                {/* Name */}
                <p className='text-[15px] text-neutral-400'>{props.name}</p>
                {/* Date */}
                <p className='text-[12px] text-neutral-400'>{props.date}</p>
            </div>

            <div className='flex w-full justify-between items-center'>
                {/* Description */}
                <p className='text-[12px] mt-1 text-neutral-400'>{props.description}</p>

                <div className='flex'>
                    <button onClick={() => {}}>
                        <MdOutlineDelete className='hover:text-white text-zinc-800' size={18} />
                    </button>
                        
                    <button onClick={() => {}}>
                        <MdOutlineEdit className='hover:text-white text-zinc-800' size={18} />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Chat
