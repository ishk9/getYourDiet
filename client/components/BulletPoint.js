"use client";
import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const BulletPoint = ({txt, calorie}) => {
    return (
        <div className='flex flex-row my-2 justify-start items-start'>
            <FaCircleCheck className="text-[#6EC0FF] mr-3 my-3"/>
            <div>
                <p className='text-[17px] font-medium font-sans'>{txt}</p>
                <i className=''>Calorific value: {calorie}</i>
            </div>

        </div>
    )
}

export default BulletPoint
