import React from 'react'

export default function LandingPage() {
    return (
        <div className="flex w-full h-full justify-center items-center">

            <div className="flex flex-col w-1/2 justify-center items-center">
            <h1 className="font-extrabold text-white text-[6em] leading-[1.2] tracking-[-2px]">YOU CAN EAT ANYTHING</h1>

            <p className="mt-10">
                Our app is designed to help you successfully create a diet based on your body and the food you like. Easily optimize your eating schedule and receive community support
                to reach your goals.
            </p>


            <div className="flex flex-col w-full py-12">
                <hr className="h-[1px] w-full bg-white"/>
                
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col w-1/2 justify-center items-center">
                        <p>Recipes for all tastes</p>
                    </div>


                    <div className="flex flex-col w-1/2 justify-center items-center">
                        <p>Nutrition Programs for all purposes</p>
                    </div>
                       
                </div>

                
            </div>

            </div>
            
            <div className="flex w-1/2 ">

            </div>

        </div>
    )
}
