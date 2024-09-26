"use client";
import useStore from '@/app/store';
import Link from 'next/link';
import { verifyUser } from '@/lib/services';
import { useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { HiOutlineBars3 } from "react-icons/hi2";

function Navbar() {
    const router = useRouter();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    };

    const [isUserPresent, setIsUserPresent] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const resp = await verifyUser();
            setIsUserPresent(resp);
        };
        fetchData();
    }, []);

    const [userId, setUserId] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const id = localStorage.getItem('userId');
            setUserId(id);
        };
        fetchData();
    }, []);

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.3 }
        })
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className="flex flex-row w-full justify-between items-center px-4 py-2 md:px-16"
        >
            {/* GetYourDiet Logo visible on all screens */}
            <motion.div
                className="md:hidden flex justify-center items-center"
                variants={linkVariants}
                custom={0}
            >
                <Image
                    src="/logo.png"
                    alt="GetYourDiet Logo"
                    height={60}
                    width={60}
                />
            </motion.div>
            <motion.div
                variants={linkVariants}
                custom={1}
                className='hidden md:flex p-2 bg-black rounded-md w-auto justify-center items-center'
            >
                <Link href="/">
                    <p className="text-white text-2xl font-extrabold uppercase">GetYourDiet</p>
                </Link>
            </motion.div>

            {/* Navigation Links visible on larger screens */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="hidden md:flex w-[60%] items-center justify-start bg-black rounded-md p-2"
            >
                <motion.div className="flex flex-row w-full items-center">
                    <motion.button
                        variants={linkVariants}
                        custom={2}
                        onClick={() => scrollToSection('reviews')}
                        className="ml-4"
                    >
                        <p className="text-white text-base font-bold hidden sm:block uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Reviews</p>
                    </motion.button>
                    <motion.button
                        variants={linkVariants}
                        custom={3}
                        onClick={() => scrollToSection('pricing')}
                        className="ml-4"
                    >
                        <p className="text-white text-base font-bold uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Pricing</p>
                    </motion.button>
                    <motion.button
                        variants={linkVariants}
                        custom={4}
                        onClick={() => scrollToSection('faq')}
                        className="ml-4"
                    >
                        <p className="text-white text-base font-bold hidden sm:block uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Faq</p>
                    </motion.button>
                    <motion.button
                        variants={linkVariants}
                        custom={5}
                        onClick={() => {
                            if (isUserPresent) {
                                router.push(`/Profile/${userId}`);
                            } else {
                                router.push("/Login");
                            }
                        }}
                        className="ml-4"
                    >
                        <p className="text-white text-base font-bold hidden sm:block uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Profile</p>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Login/Logout Button */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                custom={6}
                className='p-2 rounded-md justify-center items-center hidden md:flex'
            >
                {
                    isUserPresent ?
                        <button
                            onClick={() => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('userId');
                                setIsUserPresent(false);
                            }}
                            className='h-full'
                        >
                            <p className="text-white bg-black text-base font-bold uppercase hover:bg-black/80 hover:text-white px-7 py-[10px] rounded-md font-mono">Logout</p>
                        </button>
                        :
                        <Link href={"/Login"} className='h-full'>
                            <p className="text-white bg-black text-base font-bold uppercase hover:bg-black/80 hover:text-white px-7 py-[10px] rounded-md font-mono">Login</p>
                        </Link>
                }
            </motion.div>

            {/* Hamburger Menu and Logo on mobile screens */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                custom={6}
                className="flex md:hidden justify-end items-center space-x-4"
            >
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <HiOutlineBars3 size={26} />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <Link href={isUserPresent ? `/Profile/${userId}` : '/Login'} className='h-full'>
                                    <p>Profile</p>
                                </Link>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                {isUserPresent ?
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem('token');
                                            localStorage.removeItem('userId');
                                            setIsUserPresent(false);
                                        }}
                                        className='h-full'
                                    >
                                        <p>Logout</p>
                                    </button>
                                    :
                                    <Link href={"/Login"} className='h-full'>
                                        <p>Login</p>
                                    </Link>
                                }
                            </MenubarItem>
                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;
