"use client";
import React from 'react'
import useStore from '../store';
import SigninPage from '../Signin/page';
import SignupPage from '../Signup/page';


function OnboardingPage() {
    const {openSignInModal} = useStore();
    return (
        <div className="h-4/6 md:w-1/5 w-3/5 p-4 rounded-xl absolute z-10 flex flex-col justify-evenly items-center bg-slate-100 border-2 shadow-md">
            {
                openSignInModal ? <SigninPage /> : <SignupPage />
            }
        </div>
    )
}

export default OnboardingPage
