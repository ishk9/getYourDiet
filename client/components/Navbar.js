"use client";
import Link from 'next/link'
import useStore from '@/app/store'
import { FaXTwitter } from "react-icons/fa6";


function Navbar() {
    
    const {openOnboardingModal, setOpenOnboardingModal} = useStore();
    return (
        <navbar className="flex flex-row w-full justify-between items-center px-16 py-2 bg-[#E7C25A]">
            <div className="flex w-1/2 items-center">
                <Link href="/">
                    <p className="text-black text-2xl font-extrabold uppercase">GetYourDiet</p>
                </Link>

                <div className="flex flex-row w-1/4 justify-evenly items-center ml-16">
                    <button className="hover:-translate-y-0.5" >
                        <p className="text-black text-sm font-bold uppercase">Pricing</p>
                    </button>
                    <button  className="hover:-translate-y-0.5">
                        <p className="text-black text-sm font-bold hidden sm:block uppercase">Reviews</p>
                    </button>
                </div>
            </div>


            <div className='flex justify-center items-center'>
                <Link href={"https://x.com/Ishnk9"} target="_blank">
                    <FaXTwitter 
                        size={18}
                    />
                </Link>

                <button 
                    onClick={() => {
                        console.log(openOnboardingModal);
                        setOpenOnboardingModal();
                    }}
                    className='flex ml-4 justify-center items-center border-2 border-black p-2 px-3 rounded-lg hover:-translate-y-0.5'>
                    <p className="text-black text-sm font-semibold">Sign Up</p>
                </button>
            </div>
        </navbar>
    )
}

export default Navbar
