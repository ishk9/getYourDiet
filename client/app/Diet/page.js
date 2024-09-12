"use client";
import React, { useState, useEffect } from 'react'
import { Tabs } from "../../components/ui/customtabs";
const DietPage = () => {
    const tabs = [
        {
          title: "Product",
          value: "product",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-400 to-blue-400">
              <p>Product Tab</p>
            </div>
          ),
        },
        {
          title: "Services",
          value: "services",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-400 to-blue-400">
              <p>Services tab</p>
            </div>
          ),
        },
    ];
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center overflow-y-auto'>
            <div className='h-[60%] w-[60%] flex flex-col justify-center items-center'>
                <Tabs tabs={tabs} />
            </div>

        </div>
    )
}

export default DietPage
