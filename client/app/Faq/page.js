"use client";
import React from 'react';
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';
  
const FaqPage = () => {
    return (
        <div id="faq" className='h-screen w-screen bg-black flex py-20 flex-col md:flex-row justify-center items-center'>
            <div className='w-full md:w-1/2 lg:w-[70%] h-full flex flex-col justify-center items-center px-4 md:px-0 '>
                <div className='flex justify-start items-start w-full md:w-1/2 lg:w-[70%] ml-2 md:ml-0'>
                    <h1 className='text-white text-[45px] font-bold uppercase'>Faq.</h1>
                </div>
                    
                <div className='w-full flex flex-col justify-center items-center mt-5 ml-2 md:ml-0'>
                    <Accordion type="single" collapsible className="md:w-1/2 lg:w-[70%] w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-white">How does it work?</AccordionTrigger>
                                <AccordionContent className="text-white">
                                    Our service provides personalized diet plans tailored to your unique needs and goals. Based on your input, we generate a customized meal plan designed to optimize your nutrition and support your health or fitness objectives.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-white">What are the billing options?</AccordionTrigger>
                                <AccordionContent className="text-white">
                                    We offer three billing options: a single diet plan for individual use, a family plan that accommodates up to four members, and a professional plan designed for dietitians and nutritionists who manage multiple clients.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-white">Can I get a refund?</AccordionTrigger>
                                <AccordionContent className="text-white">
                                    Unfortunately, we do not offer refunds once a plan has been purchased. Please review our services carefully before making a commitment.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-white">How can I contact support?</AccordionTrigger>
                                <AccordionContent className="text-white">
                                    You can reach our support team by emailing us at contact.getyourdiet@gmail.com. We strive to respond to all inquiries within 24 hours.
                                </AccordionContent>
                            </AccordionItem>
                    </Accordion>

                </div>

            </div>

            <div className="w-1/2 h-full flex justify-center items-center mt-20 md:mt-0 relative">
                {/* Image */}
                <Image
                    src="/logo2.png"
                    alt="A description of the image"
                    height={200}
                    width={200}
                    className="relative z-10 rounded-full"
                />

                {/* Sparkle animation */}
                <div
                    className="absolute w-[220px] h-[220px] border-2 border-transparent rounded-full"
                    style={{
                    border: "2px solid transparent",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                    }}
                >
                </div>
            </div>

        </div>
    )
}

export default FaqPage
