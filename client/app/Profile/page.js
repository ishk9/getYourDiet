"use client";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

const ProfilePage = () => {
    return (
        <div className="h-screen w-screen flex flex-col p-4 overflow-hidden items-center">
            {/* Photo section */}
            <div className="w-[95%] border border-black h-[20%] rounded-[12px]">
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
                        <TabsTrigger value="account">Account Settings</TabsTrigger>
                        <TabsTrigger value="password">Manage Password</TabsTrigger>
                        <TabsTrigger value="orderhistory">Order History</TabsTrigger>
                        <TabsTrigger value="paymentmethod">Payment methods</TabsTrigger>
                        <TabsTrigger value="notifications">Notification</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className="w-screen bg-red-500">
                            <p>infoinmfies</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default ProfilePage
