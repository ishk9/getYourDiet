"use client";
import React from 'react'
import useStore from '../store'

function SignupPage() {
    const {setOpenSignInModal} = useStore();
    return (
        <div className="h-full w-full p-4 flex flex-col justify-evenly items-center bg-white">
            <h1 className='text-black text-[24px] font-semibold'>Get Started Now</h1>
            <div className='flex flex-col'>
                <input className='my-1 p-2 rounded-md text-black border-2 border-black hover:-translate-y-0.5' placeholder='John'/>
                <input className='my-1 p-2 rounded-md text-black border-2 border-black hover:-translate-y-0.5' placeholder='Doe' />

                <div className='flex w-full justify-center items-center'>
                    <input className='my-1 w-1/4 p-2 rounded-md text-black mr-2 border-2 border-black hover:-translate-y-0.5' placeholder='+91' />
                    <input className='my-1 w-3/4 p-2 rounded-md text-black border-2 border-black hover:-translate-y-0.5' placeholder='985762XXXX' />
                </div>

            </div>

            <div className='flex flex-col w-3/4 justify-center items-center'>
                <button className='w-full rounded-md py-3 mt-2 bg-slate-700 hover:bg-slate-600'>
                    <p>Sign up</p>
                </button>

                <button className='mt-2' onClick={setOpenSignInModal}>
                    <p className='text-black text-[12px]'>
                        Already have an account? <span className='font-semibold text-[15px]'>Sign in</span>
                    </p>
                </button>
            </div>

        </div>
    )
}

export default SignupPage
