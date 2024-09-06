"use client";
import { login } from '@/lib/services';
import  { useState } from 'react';
import { useRouter } from 'next/navigation';
import useStore from '@/app/store';

const LoginForm = () => {
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
            setSignedIn(true);
            router.push('/');

        } catch(err){
            console.log("Error signing up!");
        }
    };

    const handleSignupRedirect = () => {
        router.push('/Signup');
    };

    return (
        <div className='w-full max-w-sm mx-auto bg-white shadow-md border rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
