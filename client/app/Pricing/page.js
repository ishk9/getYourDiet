"use client";
import PriceCard from '@/components/PriceCard'
import React from 'react'

const prices = [
    {id: 1, title: 'Single', price: '3', description: 'Best for single users', popular: 0},
    {id: 2, title: 'Family', price: '15', description: 'Best for family', popular: 1},
    {id: 3, title: 'Professional', price: '30', description: 'Best for Professional', popular: 0},
]

export default function PricingPage() {
    return (
        <div className="flex flex-col w-screen h-screen items-center px-10 py-2 overflow-x-hidden bg-[#E17888]">        
            <h1 className="text-[3em] font-semibold mt-20 text-black">Simple, straightforward pricing.</h1>
            <p className='mt-3 text-black'>Choose the plan that&apos;s right for you. Whether you want a plan for yourself or your family, We got your back.</p>
            
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
