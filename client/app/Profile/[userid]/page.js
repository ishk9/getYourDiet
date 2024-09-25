"use client";
import react, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { changePassword, getDietDetails, getUserDetails } from "@/lib/services";
import { useRouter } from "next/navigation";

const ProfilePage = ({ params }) => {
    const { userid } = params;

    const router = useRouter();
    const [currPass, setCurrPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confmPass, setConfmPass] = useState('');
    const [err, setErr] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [diets, setDiets] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const resp = await getDietDetails({userId:userid});
                console.log("Resp: ", resp);
                setDiets(resp.data);
            } catch(err){
                console.log("Error fetching diet data: ", err);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const resp = await getUserDetails({userId:userid});
                console.log("Resp: ", resp);
                setName(resp.data.name);
                setEmail(resp.data.email);
            } catch(err){
                console.log("Error fetching user data: ", err);
            }
        }
        fetchData();
    }, []);

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
            <div className="w-[100%] border border-gray-400 h-[15%] rounded-[12px] mt-12">
                {/* Photo */}
                <div>

                </div>
                {/* Details */}
                <div className="flex flex-col justify-start items-start p-3">
                    <h1 className="text-xl font-semibold">{name}</h1>

                    <div className="flex justify-center items-center">
                        <HiOutlineMail size={24} className="text-black/80"/>
                        <p className="ml-1 text-black/80 text-sm font-semibold">{email}</p>
                    </div>
                </div>
            </div>

            <div className="w-[100%] mt-6 h-[80%]"> 
                <Tabs defaultValue="account" className="w-full h-full">
                    <TabsList className="grid w-full grid-cols-3 justify-around">
                        <TabsTrigger value="account">Diet Plans</TabsTrigger>
                        <TabsTrigger value="password">Manage Password</TabsTrigger>
                        <TabsTrigger value="paymentmethod">Payment methods</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className="w-screen flex flex-col overflow-y-scroll">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mr-6">
                                {diets.map((diet, index) => (
                                    <button 
                                        key={index} 
                                        className='border rounded-[12px] border-black/80 p-4 my-2 hover:bg-black/10'
                                        onClick={() => router.push(`/Diet/${diet._id}`)}
                                    >
                                        <div className='flex flex-col'>
                                            <p className='text-xl'>{diet.title}</p>
                                            <p className='text-sm mt-1'>{diet.goal}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div className="w-screen flex flex-col mt-12">
                            <div className='w-[90%] md:w-1/4 mb-3'>
                                <input
                                    type='password' 
                                    placeholder='Current password'
                                    value={currPass}
                                    onChange={(e) => setCurrPass(e.target.value)}
                                    className='w-full border rounded-md p-2 border-gray-400 focus:border-black outline-none hover:border-black'

                                />
                            </div>
                            <div className='w-[90%] md:w-1/4 mb-3'>
                                <input
                                    type='password' 
                                    placeholder='New password'
                                    value={newPass}
                                    onChange={(e) => setNewPass(e.target.value)}
                                    className='w-full border rounded-md p-2 border-gray-400 focus:border-black outline-none hover:border-black'
                                />
                            </div>
                            <div className='w-[90%] md:w-1/4'>
                                <input
                                    type='password' 
                                    placeholder='Confirm password'
                                    value={confmPass}
                                    onChange={(e) => setConfmPass(e.target.value)}
                                    className='w-full border rounded-md p-2 border-gray-400 focus:border-black outline-none hover:border-black'
                                />
                            </div>
                            {
                                err &&
                                <p className='text-sm text-red-600'>{err}</p>
                            }
                            <div className='w-[90%] md:w-1/4 mt-4'>
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
