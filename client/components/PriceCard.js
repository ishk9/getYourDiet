import React from 'react'

function PriceCard({props}) {
    return (
        <div className={`flex flex-col ${props.popular ? "h-4/5" : "h-3/5"} w-1/5 bg-white rounded-xl mx-3 p-5`}>
            <div className="h-3/4">
                <h1 className="text-md text-black font-semibold uppercase">{props.title}</h1>
                <p className="text-black font-bold text-[28px]">${props.price}</p>
                <p className='text-black's>{props.description}</p>
            </div>


            <button className="px-4 border-2 mt-12 py-2 w-full hover:bg-slate-200 rounded-lg bg-white">
                <p className="text-black font-semibold">Get Started</p>
            </button>
        </div>
    )
}

export default PriceCard
