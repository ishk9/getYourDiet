"use client";
import React, { useState, useEffect } from 'react'
import ReviewBox from '@/components/ReviewBox'
import { motion, AnimatePresence } from "framer-motion";

const ReviewPage = () => {
    const [dummyReviews, setDummyReviews] = useState([
        { review: "This app completely transformed my fitness routine. The personalized plans are spot on!", name: "Emily Carter", rating: 5 },
        { review: "I’ve tried a few diet plans before, but this one actually works. Highly recommended.", name: "Liam O'Reilly", rating: 5 },
        { review: "Good app, but I wish there were more customization options for specific dietary needs.", name: "Sophie Leclerc", rating: 3 },
        { review: "The AI-generated plans are impressive. It feels like they are tailored just for me!", name: "Noah Fischer", rating: 4 },
        { review: "The research-backed approach is what makes this app stand out. It's not just generic advice.", name: "Olivia Taylor", rating: 5 },
        { review: "I loved how the app integrates scientific research into the plans. Really effective.", name: "Zoe Anderson", rating: 5 },
        { review: "It’s been a good experience overall, but the pricing could be a bit more competitive.", name: "Thomas Richards", rating: 4 },
        { review: "A perfect tool for busy professionals looking to stay healthy!", name: "James Thompson", rating: 5 },
        { review: "Great results so far! The meal plans are simple and easy to follow.", name: "Ethan Williams", rating: 4 },
    ]);
    
    

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => 
                (prevIndex + 1) % dummyReviews.length
            );
        }, 2500);

        return () => clearInterval(interval);
    }, [dummyReviews.length]);

    return (
        <div id="reviews" className='h-[70%] w-screen bg-white py-20 flex flex-col md:flex-row justify-center items-center'>
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className='w-full md:w-1/2 h-full flex justify-center items-center'>
                <h1 className='text-xl md:text-4xl font-bold font-sans w-[50%] uppercase'>
                    Proven Results, Personal Stories
                </h1>
            </motion.div>

            <div className='md:w-1/2 w-full md:mt-0 mt-6 h-full flex justify-center items-center'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentReviewIndex}
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full flex justify-center items-center"
                    > 
                        <ReviewBox 
                            review={dummyReviews[currentReviewIndex].review} 
                            name={dummyReviews[currentReviewIndex].name} 
                            rating={dummyReviews[currentReviewIndex].rating} 
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ReviewPage
