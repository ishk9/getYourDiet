"use client";
import React  from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";

const HomePage = () => {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <div className='h-full w-full justify-center items-center flex flex-col'>
                <div className='h-full flex flex-col justify-between items-center'>
                    <div className='flex flex-col w-[75%] h-[85%]  justify-center items-center'>
                        <h1 className='text-[45px] font-normal leading-[1]'>Lets get started.Type in either your <span className='text-[#6EC0FF]'>health goals, issues,</span>  or <span className='text-[#6EC0FF]'>both</span>.</h1>
                        <div className='flex  w-full justify-start items-center mt-6'>
                            <button className='w-[25%] h-12 bg-[#6EC0FF] hover:bg-[#4e9ad4] rounded-2xl mr-3 flex justify-center items-center'>
                                <p className='text-white font-medium'>Choose my own cuisines</p>
                            </button>

                            <button className='w-1/3 h-12 bg-black hover:bg-[#292929] rounded-2xl mx-3 flex justify-center items-center'>
                                <p className='text-white font-medium'>Not sure where to start?</p>
                            </button>
                        </div>
                    </div>
                    {/* Chat box */}
                    <div className='h-20 w-[85%] border flex justify-between items-center border-black rounded-2xl mb-4'>
                        <input className='h-full w-full rounded-2xl p-2 text-3xl outline-none capitalize' placeholder='Enter questions or answers here'/>
                        <div className='flex justify-center items-center h-12 w-12 bg-black rounded-full p-1 mr-2 hover:bg-[#292929]'>
                            <IoMdArrowRoundUp color='white' size={22}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
