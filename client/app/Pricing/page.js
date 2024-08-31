"use client";
import PriceCard from '@/components/PriceCard'
import React, { useEffect } from 'react'

const prices = [
    {id: 1, title: 'Single', price: 'free', description: 'Best for single users', popular: 0, points: [
        { id: 1, point: 'Single diet plan' },
        { id: 2, point: 'Custom diet generation' },
        { id: 3, point: 'Shareable diet plans' },
    ]},
    {id: 2, title: 'Family', price: '15', description: 'Best for family', popular: 1, points: [
        { id: 1, point: 'Multiple diets for family' },
        { id: 2, point: 'Custom diet generation' },
        // { id: 3, point: 'Task tracking' },
        { id: 4, point: 'Shareable diet plans' },
]},
    {id: 3, title: 'Professional', price: '30', description: 'Best for Professional', popular: 0, points: [
        { id: 1, point: 'Unlimited diet plans' },
        { id: 2, point: 'Custom diet generation' },
        // { id: 3, point: 'Advanced tracking features' },
        { id: 4, point: 'Shareable diet plans' },
    ]},
]

export default function PricingPage() {

    return (
        <div id="pricing" className="flex flex-col w-full h-screen items-center px-10 py-2 overflow-x-hidden bg-[#F7B0F2] mb-3">        
            <h1 className="text-[3em] font-semibold mt-20 text-black">Pricing</h1>
            <div className="w-[44%] flex flex-col justify-center items-center">
                <p className='mt-3 text-black font-mono'>Choose the plan that&apos;s right for you. Whether you want a plan</p>
                <p className='text-black font-mono'>for yourself or your family, We got your back.</p>
            </div>

            
            <div className='flex h-full w-full justify-center items-center'>
                {
                    prices.map((item, id) => (
                        <PriceCard key={id} props={item}/>
                    ))
                }
            </div>
        </div>
    )
}

