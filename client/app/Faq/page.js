import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
const FaqPage = () => {
    return (
        <div className='h-[70%] w-screen bg-[#6EC0FF] flex py-20'>
            <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                <div className='flex justify-start items-start w-1/2'>
                    <h1 className='text-white text-[45px] font-bold uppercase'>Faq.</h1>
                </div>
                    
                <div className='w-full flex flex-col justify-center items-center mt-5'>
                    <Accordion type="single" collapsible className="w-1/2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-white'>How does the AI create the diet?</AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='text-white'>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='text-white'>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className='text-white'>Is it accessible?</AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>

            <div className='w-1/2 h-full'>

            </div>

        </div>
    )
}

export default FaqPage
