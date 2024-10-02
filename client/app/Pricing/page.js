"use client";
import PriceCard from '@/components/PriceCard';

const prices = [
    {id: 1, name: 'Single', price: '5', description: 'Best for single users', popular: 0, points: [
        { id: 1, point: 'Single diet plan' },
        { id: 2, point: 'Shareable diet plans' },
    ]},
    {id: 2, name: 'Family', price: '12', description: 'Best for family', popular: 1, points: [
        { id: 1, point: 'Multiple diets for family' },
        { id: 2, point: 'Shareable diet plans' },
    ]},
    {id: 3, name: 'Professional', price: '25', description: 'Best for Professional', popular: 0, points: [
        { id: 1, point: 'Unlimited diet plans' },
        { id: 2, point: 'Shareable diet plans' },
    ]},
]

export default function PricingPage() {
    return (
        <div id="pricing" className="flex flex-col w-screen h-auto md:h-screen items-center px-5 py-10 md:py-2 bg-[#6EC0FF]">        
            <h1 className="text-[2em] md:text-[3em] font-semibold mt-10 md:mt-20 text-black">Pricing</h1>
            <div className="w-full md:w-[44%] flex flex-col justify-center items-center">
                <p className='mt-3 text-black font-semibold'>Choose the plan that&apos;s best for you</p>
            </div>

            <div className='flex flex-col md:flex-row h-full w-full justify-center items-center mt-8 md:mt-12'>
                {prices.map((item) => (
                    <PriceCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}