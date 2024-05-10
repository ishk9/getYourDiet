"use client";
import React from 'react'
import useStore from '../store';
import SigninPage from '../Signin/page';
import SignupPage from '../Signup/page';


function OnboardingPage() {
    const {openSignInModal} = useStore();
    return (
        <div className="h-4/6 sm:w-2/5 lg:w-1/5 w-3/6 p-2 rounded-lg absolute z-10 flex flex-col justify-evenly items-center bg-slate-100 border-2 shadow-md">
            {
                openSignInModal ? <SigninPage /> : <SignupPage />
            }
        </div>
    )
}

export default OnboardingPage
