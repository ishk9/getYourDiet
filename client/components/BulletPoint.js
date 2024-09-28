"use client";
import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const BulletPoint = ({txt, calorie}) => {
    return (
        <div className='flex flex-row my-2 justify-start items-start h-full'>
            <FaCircleCheck size={20} className="text-[#6EC0FF] mr-3 my-3"/>
            <div className='h-full'>
                <p className='text-[20px] md:text-[17px] font-medium font-sans text-black/80 mb-2 md:mb-0 leading-[1.2]'>{txt}</p>
                <i className='text-[18px] md:text-base'>Calorific value: {calorie}</i>
            </div>

        </div>
    )
}

export default BulletPoint
