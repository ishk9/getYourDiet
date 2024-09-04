"use client";
import React, { useState, useEffect } from 'react'

const QuotesPage = () => {
    const [dietQuotes, setDietQuotes] = useState([
        { author: "Hippocrates", quote: "Let food be thy medicine and medicine be thy food." },
        { author: "Ann Wigmore", quote: "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison." },
        { author: "Michael Pollan", quote: "Eat food. Not too much. Mostly plants." },
        { author: "Virginia Woolf", quote: "One cannot think well, love well, sleep well, if one has not dined well." },
        { author: "Thomas Edison", quote: "The doctor of the future will no longer treat the human frame with drugs, but rather will cure and prevent disease with nutrition." },
        { author: "Unknown", quote: "A healthy outside starts from the inside." },
        { author: "Albert Einstein", quote: "Nothing will benefit human health and increase chances for survival on Earth as much as the evolution to a vegetarian diet." },
        { author: "Jim Rohn", quote: "Take care of your body. It's the only place you have to live." },
        { author: "Lao Tzu", quote: "He who takes medicine and neglects to diet wastes the skill of his doctors." }
    ]);
    const [currInd, setCurrInd] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrInd((prevInd) => 
                (prevInd+1) % dietQuotes.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [dietQuotes.length]);
    return (
        <div className='h-[70%] w-screen py-16 bg-blue-50 flex flex-col justify-center items-center'>
      
            <div className='flex flex-col justify-center items-center  h-full w-1/2'>
                <h1 className='text-4xl font-bold text-center'>{dietQuotes[currInd].quote}</h1>
                <p className='text-2xl font-bold mt-2'>-{dietQuotes[currInd].author}-</p>
            </div>

        </div>
    )
}

export default QuotesPage
