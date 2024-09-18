"use client";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-standard";

const DietPage = () => {
    return (
        <div className='flex flex-col h-auto w-screen overflow-x-hidden '>
            <div className='flex lg:flex-row flex-col mb-24 p-5  lg:justify-center lg:items-center'>
                <h1 className='text-3xl leading-[0.9] flex justify-center items-center font-semibold'>Your personalized supplement program.</h1>
                <i className='text-sm lg:ml-2 mt-4 lg:mt-0'> | Click to view diet</i>
            </div>
            <ExpandableCardDemo />
        </div>
    );
}

export default DietPage;
