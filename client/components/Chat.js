import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import useStore from '@/app/store';

function Chat({props, index}) {
    const { removeItem, setActiveChat } = useStore();
    return (
        <button 
            onClick={() => setActiveChat(index)}
            className="flex flex-col justify-center items-start hover:bg-white border p-3 my-1 rounded-lg">
            <div className="flex w-full justify-between items-center">
                {/* Name */}
                <p className='text-[15px] font-medium text-black'>{props.name}</p>
                {/* Date */}
                <p className='text-[12px] font-medium text-black'>{props.date}</p>
            </div>

            <div className='flex w-full justify-between items-center'>
                {/* Description */}
                <p className='text-[12px] mt-1 text-black'>{props.description}</p>

                <div className='flex'>
                    <button onClick={() => {
                        console.log("Delete Chat");
                        removeItem(index);
                    }}>
                        <MdOutlineDelete className='text-zinc-600' size={18} />
                    </button>
                        
                    <button onClick={() => {}}>
                        <MdOutlineEdit className='text-zinc-600' size={18} />
                    </button>

                </div>
            </div>
        </button>
    )
}

export default Chat
