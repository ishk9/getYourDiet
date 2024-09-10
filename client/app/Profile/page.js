"use client";
import react, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { changePassword } from "@/lib/services";

const ProfilePage = () => {
    const [currPass, setCurrPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confmPass, setConfmPass] = useState('');
    const [err, setErr] = useState('');

    const handleSubmitChange = async() => {
        if(newPass != confmPass){
            console.log("Passwords do not match");
            setErr("Passwords do not match");
        }
        else{
            setErr('');
            const data = {
                currentPassword: currPass,
                newPassword: newPass
            }
            const resp = await changePassword(data);
        }
    }
    return (
        <div className="h-screen w-screen flex flex-col p-4 overflow-hidden items-center">
            {/* Photo section */}
            <div className="w-[95%] border border-black h-[20%] rounded-[12px] mt-12">
                {/* Photo */}
                <div>

                </div>
                {/* Details */}
                <div className="flex flex-col justify-start items-start p-3">
                    <h1 className="text-xl font-semibold">Ishaan Khullar</h1>
                    <div className="flex mt-2">
                        <div className="flex justify-center items-center">
                            <HiOutlineMail size={24} className="text-black/80"/>
                            <p className="ml-1 text-black/80 text-sm font-semibold">test@eg.com</p>
                        </div>
                        <div className="flex justify-center items-center ml-6">
                            <FiPhoneCall size={20} className="text-black/80"/>
                            <p className="ml-1 text-black/80 text-sm font-semibold">0000000000</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[95%] mt-6 h-[80%]"> 
                <Tabs defaultValue="account" className="w-full h-full">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="account">Diet Plans</TabsTrigger>
                        <TabsTrigger value="password">Manage Password</TabsTrigger>
                        <TabsTrigger value="orderhistory">Order History</TabsTrigger>
                        <TabsTrigger value="paymentmethod">Payment methods</TabsTrigger>
                        {/* <TabsTrigger value="notifications">Notification</TabsTrigger> */}
                    </TabsList>
                    <TabsContent value="account">
                        <div className="w-screen bg-red-500">
                            <p>infoinmfies</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div className="w-screen flex flex-col mt-12">
                            <div className='w-1/4 mb-3'>
                                <input
                                    type='password' 
                                    placeholder='Current password'
                                    value={currPass}
                                    onChange={(e) => setCurrPass(e.target.value)}
                                    className='w-full border rounded-md p-2 border-gray-400 focus:border-black outline-none'

                                />
                            </div>
                            <div className='w-1/4 mb-3'>
                                <input
                                    type='password' 
                                    placeholder='New password'
                                    value={newPass}
                                    onChange={(e) => setNewPass(e.target.value)}
                                    className='w-full border rounded-md p-2 border-gray-400 focus:border-black outline-none'
                                />
                            </div>
                            <div className='w-1/4'>
                                <input
                                    type='password' 
                                    placeholder='Confirm password'
                                    value={confmPass}
                                    onChange={(e) => setConfmPass(e.target.value)}
                                    className='w-full border rounded-md p-2 border-gray-400 focus:border-black outline-none'
                                />
                            </div>
                            {
                                err &&
                                <p className='text-sm text-red-600'>{err}</p>
                            }
                            <div className='w-1/4 mt-4'>
                                <button 
                                    onClick={() => handleSubmitChange()}
                                    className='border rounded-md p-2 bg-[#6EC0FF] hover:bg-[#4ca4e8] w-[25%]'
                                >
                                    <p className='text-sm text-white font-semibold'>Update</p>
                                </button>
                            </div>
                            
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default ProfilePage
