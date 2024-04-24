import React from 'react'

function Chat({props}) {
    return (
        <button className="container hover:bg-neutral-900  p-3 my-1 rounded-lg">
            <div className="flex justify-between items-center">
                {/* Name */}
                <p className='text-[15px]'>{props.name}</p>
                {/* Date */}
                <p className='text-[12px]'>{props.date}</p>
            </div>

            {/* Description */}
            <p className='text-[12px] mt-1'>{props.description}</p>
        </button>
    )
}

export default Chat
