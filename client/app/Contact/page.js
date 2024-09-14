"use client";
import { useState } from 'react'
import {sendUserFeedback} from '../../lib/services';
import { toast } from 'react-toastify';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const [error, setError] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmitDetails = async() => {
        if(!email || !name || !feedback || !emailRegex.test(email)){
            if(!name){
                setError("Name can't be empty");
            }        
            else if(!email){
                setError("Email can't be empty");
            }
            else if(!feedback){
                setError("Feedback can't be empty");
            }
            else if (!emailRegex.test(email)) {
                setError("Please enter a valid email address");
            }
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                theme: "light",
            })
        }
        else {
            const data = {
                name,
                email,
                feedback
            }
            try{
                const resp = await sendUserFeedback(data);
                console.log(resp);
            } catch(err){
                console.log("Error submitting details");
            }
        }
    }

    return (
        <div id="contact" className="h-screen w-screen flex md:flex-row flex-col justify-evenly items-center px-10 py-2 bg-black">
            <div className='w-1/2 h-full'>

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='flex flex-col md:w-[65%] w-full justify-start items-start'>
                    <h1 className="text-xl font-semibold text-white">Would love to hear from you.</h1>
                    <p className="text-xl font-semibold text-white">Get in touch!</p>
                </div>

                <div className="flex flex-col h-80 md:w-[65%] w-full justify-start items-center">
                    <div className='w-full mt-2'>
                        <p className='text-sm text-white'>Name</p>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            className='h-12 rounded-sm w-[80%] border-white border mt-1 p-1 outline-none'
                        />
                    </div>

                    <div className='w-full mt-2'>
                        <p className='text-sm text-white'>Email Address</p>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            className='h-12 rounded-sm w-[80%] border-white border mt-1 p-1 outline-none'
                        />
                    </div>

                    <div className='w-full mt-2'>
                        <p className='text-sm text-white'>Feedback</p>
                        <input
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)} 
                            className='h-12 rounded-sm w-[80%] border-white border mt-1 p-1 outline-none'
                        />
                    </div>

                    <div className='w-full mt-6'>
                        <button 
                            className='p-3 border w-[80%] border-white rounded-md hover:scale-105'
                            onClick={() => handleSubmitDetails()}
                        >
                            <p className='text-white'>Submit</p>
                        </button>
                    </div>            
                </div>
            </div>
        </div>
    )
}