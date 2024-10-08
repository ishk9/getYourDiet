"use client";
import { signup } from '@/lib/services';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useStore from '@/app/store';
import { LuUser } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import StrengthMeter from './StrengthMeter';
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
    const { toast } = useToast();
    const { setSignedIn } = useStore();
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [strength, setStrength] = useState(0);

    const getStrength = (pass) => {
		let strength = 0;
		if (pass.length >= 6) strength++;
		if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
		if (pass.match(/\d/)) strength++;
		if (pass.match(/[^a-zA-Z\d]/)) strength++;
		return strength;
	};
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(strength == 3){
            const data = {
                name,
                email,
                password
            };
            console.log("Data: ", data);
            try{
                const resp = await signup(data);
                console.log("Token: ", resp.token);
                localStorage.setItem('token', resp.token);
                localStorage.setItem('userId', resp.data._id);
                setSignedIn(true);
                toast({
                    title: "Signed up successfully!",
                })
                router.push('/');
            } catch(err){
                toast({
                    variant: "destructive",
                    title: "Uh oh! Error signing up!",
                })
                console.log("Error signing up!");
            }
        }
    };

    

    const handleLoginRedirect = () => {
        router.push('/Login');
    };

    return (
        <div className='w-full max-w-sm mx-auto bg-white border shadow-md rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
            {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='mb-4 flex'>
                    <div className='p-1 border border-r-0 rounded-md rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center'>
                        <LuUser />
                    </div>
                    <input
                        type='text'
                        placeholder='Full name'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full pr-3 py-2 border border-l-0 rounded-md rounded-l-none focus:outline-none'
                        required
                    />
                </div>
                <div className='mb-4 flex'>
                    <div className='p-1 border border-r-0 rounded-md rounded-r-none focus:outline-none flex justify-center items-center'>
                        <MdOutlineMailOutline />
                    </div>
                    <input
                        type='email'
                        placeholder='Email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full pr-3 py-2 border border-l-0 rounded-md rounded-l-none focus:outline-none'
                        required
                    />
                </div>
                <div className='mb-4 flex'>
                    <div className='p-1 border border-r-0 rounded-md rounded-r-none focus:outline-none flex justify-center items-center'>
                        <RiLockPasswordLine />
                    </div>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            const currStrength = getStrength(password);
                            console.log(currStrength);
                            setStrength(currStrength);
                        }}
                        className='w-full pr-3 py-2 border border-l-0 rounded-md rounded-l-none focus:outline-none'
                        required
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        type='submit'
                        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Sign Up
                    </button>
                </div>
                {
                    password &&
                    <StrengthMeter password={password}/>
                }
            </form>
            <div className='mt-4 text-center'>
                <p className='text-gray-700 text-sm'>
                    Already have an account?{' '}
                    <button
                        onClick={handleLoginRedirect}
                        className='text-blue-500 hover:underline'
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
