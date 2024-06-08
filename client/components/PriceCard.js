import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function PriceCard({props}) {
    return (
        <div className={`flex flex-col ${props.popular ? "h-5/6" : "h-4/6"} w-1/5 shadow-lg shadow-slate-600 bg-slate-50 rounded-xl mx-3 p-5 transition-transform duration-300  hover:scale-105`}>
            <div className="h-3/4">
                <h1 className="text-md text-black font-semibold uppercase">{props.title}</h1>
                <p className="text-black font-bold md:text-[28px] text-[11px]">${props.price}</p>
                {/* <p className='text-black '>{props.description}</p> */}
                <p className='text-gray-500 font-medium text-sm mt-2'>What is included?</p>
                <div className="flex flex-col justify-center items-start mt-1">
                    {
                        props.points.map((point) => (
                            
                            <div key={point.id} className="flex justify-center items-center mt-2">
                                <FaCircleCheck />
                                <p className="ml-1">{point.point}</p>
                            </div>

                        ))
                    }
                </div>
            </div>


            <button className={`px-4 border-2 mt-8 py-2 w-full ${props.popular ? "bg-black": "bg-white"} hover:bg-black rounded-lg`}>
                <p className={` ${props.popular ? "hover:text-white text-white": "hover:text-white"} font-semibold md:text-base text-[12px]`}>Get Started</p>
            </button>
        </div>
    )
}

export default PriceCard
