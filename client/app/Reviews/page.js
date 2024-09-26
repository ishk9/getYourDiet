"use client";
import React, { useState, useEffect } from 'react'
import ReviewBox from '@/components/ReviewBox'
import { motion, AnimatePresence } from "framer-motion";

const ReviewPage = () => {
    const [dummyReviews, setDummyReviews] = useState([
        { review: "The service was excellent and the food was delicious. Highly recommended!", name: "Alice Smith", rating: 5 },
        { review: "A decent experience, but the food could have been better. Service was slow.", name: "Bob Johnson", rating: 3 },
        { review: "Amazing atmosphere and the dishes were full of flavor. Will visit again.", name: "Catherine Brown", rating: 4 },
        { review: "Not satisfied. The food was cold and the staff were not attentive.", name: "David Wilson", rating: 2 },
        { review: "Loved the desserts! They were the highlight of the meal. A sweet surprise!", name: "Ella Davis", rating: 5 },
        { review: "The menu is a bit overpriced, but the quality justifies it. Great experience overall.", name: "Franklin Thomas", rating: 4 },
        { review: "Average experience. Nothing stood out, but nothing was particularly bad either.", name: "Grace Lee", rating: 3 },
    ]);
    

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => 
                (prevIndex + 1) % dummyReviews.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [dummyReviews.length]);

    return (
        <div id="reviews" className='h-[70%] w-screen bg-white py-20 flex flex-col md:flex-row justify-center items-center'>
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className='w-full md:w-1/2 h-full flex justify-center items-center'>
                <h1 className='text-xl md:text-4xl font-bold font-sans w-2/3 uppercase'>
                    Making your fitness journey easier
                </h1>
            </motion.div>

            <div className='md:w-1/2 w-full md:mt-0 mt-6 h-full flex justify-center items-center'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentReviewIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full"
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
