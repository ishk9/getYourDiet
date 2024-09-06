"use client";
import useStore from '@/app/store';
import Link from 'next/link'

function Navbar() {
    const { signedIn, setSignedIn } = useStore();
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    };
    return (
        <nav className="flex flex-row w-full justify-between items-center px-16 py-2">
            <div className='p-2 bg-black rounded-md w-[15%] flex justify-center items-center'>
                <Link href="/">
                    <p className="text-white text-2xl font-extrabold uppercase">GetYourDiet</p>
                </Link>
            </div>


            <div className="flex w-[60%] items-center justify-start bg-black rounded-md p-2">
                <div className="flex flex-row w-full  items-center">
                    <Link 
                        href={"/Pricing"}
                        className="ml-4" >
                        <p className="text-white text-base font-bold uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Pricing</p>
                    </Link>
                    <button  
                        onClick={() => scrollToSection('reviews')}
                        className="ml-4">
                        <p className="text-white text-base font-bold  hidden sm:block uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Reviews</p>
                    </button>
                    <button  
                        onClick={() => scrollToSection('faq')}
                        className="ml-4">
                        <p className="text-white text-base font-bold uppercase hidden sm:block  hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Faq</p>
                    </button>
                    <button  
                        onClick={() => scrollToSection('contact')}
                        className="ml-4">
                        <p className="text-white text-base font-bold hidden sm:block uppercase hover:bg-white hover:text-black px-3 py-1 rounded-md font-mono">Contact</p>
                    </button>
                </div>
            </div>


            <div className='p-2 rounded-md flex justify-center items-center'>
                {
                    signedIn ? 
                    <button 
                        onClick={() => {
                            setSignedIn(false);
                        }}
                        className='ml-4 h-full'>
                        <p className="text-white bg-black text-base font-bold hidden sm:block uppercase hover:bg-black/80 hover:text-white px-7 py-[10px] rounded-md font-mono">Logout</p>
                    </button>
                    :
                    <Link 
                        href={"/Login"}
                        className='ml-4 h-full'>
                        <p className="text-white bg-black text-base font-bold hidden sm:block uppercase hover:bg-black/80 hover:text-white px-7 py-[10px] rounded-md font-mono">Login</p>
                    </Link>
                }   
            </div>
        </nav>
    )
}

export default Navbar
