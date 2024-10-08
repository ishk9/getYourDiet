"use client";
import { login } from '@/lib/services';
import  { useState } from 'react';
import { useRouter } from 'next/navigation';
import useStore from '@/app/store';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
    const { toast } = useToast();
    const { setSignedIn } = useStore();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        const data = {
            email,
            password
        };
        try{
            const resp = await login(data);
            console.log("Token: ", resp.token);
            
            localStorage.setItem('token', resp.token);
            localStorage.setItem('userId', resp.data._id);

            setSignedIn(true);
            toast({
                title: "Logged in successfully!",
            })
            router.back();

        } catch(err){
            toast({
                variant: "destructive",
                title: "Uh oh! Error logging in",
                description: "Invalid email or password",
            })
                
            console.log("Error logging up!");
        }
    };

    const handleSignupRedirect = () => {
        router.push('/Signup');
    };

    return (
        <div className='w-full max-w-sm mx-auto bg-white shadow-md border rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4 flex'>
                    <div className='p-1 border border-r-0 rounded-md rounded-r-none focus:outline-none flex justify-center items-center'>
                        <MdOutlineMailOutline />
                    </div>
                    <input
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full pr-3 py-2 border border-l-0 rounded-md rounded-l-none focus:outline-none'
                        required
                    />
                </div>
                <div className='mb-6 flex'>
                    <div className='p-1 border border-r-0 rounded-md rounded-r-none focus:outline-none flex justify-center items-center'>
                        <RiLockPasswordLine />
                    </div>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full pr-3 py-2 border border-l-0 rounded-md rounded-l-none focus:outline-none'
                        required
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        type='submit'
                        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className='mt-4 text-center'>
                <p className='text-gray-700 text-sm'>
                    Don&apos;t have an account?{' '}
                    <button
                        onClick={handleSignupRedirect}
                        className='text-blue-500 hover:underline'
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginForm
