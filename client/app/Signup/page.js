"use client";
import React from 'react'
import useStore from '../store'

function SignupPage() {
    const {setOpenSignInModal} = useStore();
    return (
        <div className="h-4/6 w-1/5 p-4 rounded-xl absolute z-10 flex flex-col justify-evenly items-center bg-slate-100 border-2 shadow-md">
            <h1 className='text-black text-[24px] font-semibold'>Signup</h1>
            <div className='flex flex-col'>
                <input className='my-1 p-2 rounded-md text-black' placeholder='John'/>
                <input className='my-1 p-2 rounded-md text-black' placeholder='Doe' />
                <div className='flex w-full justify-center items-center'>
                    <input className='my-1 w-1/4 p-2 rounded-md text-black mr-2' placeholder='+91' />
                    <input className='my-1 w-2/4 p-2 rounded-md text-black' placeholder='985762XXXX' />

                </div>
            </div>

            
            <button className='w-3/4 rounded-md py-3 mt-2 bg-slate-700'>
                <p>Submit</p>
            </button>
            <button 
                onClick={setOpenSignInModal}
                className='w-3/4 rounded-md py-3 mt-2 bg-slate-700'>
                <p>Signin</p>
            </button>
        </div>
    )
}

export default SignupPage
