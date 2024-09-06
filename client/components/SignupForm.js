"use client";
import React, { useState } from 'react';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (!/^\d{10}$/.test(phoneNumber)) {
            setError('Phone number must be 10 digits');
            return;
        }
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
        // Add your signup logic here
    };

    const handleLoginRedirect = () => {
        window.location.href = '/Login';
    };

    return (
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
            {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                        Full Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>
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
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phoneNumber'>
                        Phone Number
                    </label>
                    <input
                        type='text'
                        id='phoneNumber'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>
                <div className='mb-4'>
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
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmPassword'>
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        id='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
