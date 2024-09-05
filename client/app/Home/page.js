"use client";
import React, { useState }  from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";

const HomePage = () => {
    const [userInp, setUserInp] = useState('');
    const [showCuisines, setShowCuisines] = useState(false);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [startQues, setStartQues] = useState(false);

    const handleCuisineSelect = (index) => {
        if (selectedCuisines.includes(index)) {
            setSelectedCuisines(selectedCuisines.filter(id => id !== index));
        } else {
            setSelectedCuisines([...selectedCuisines, index]);
        }
    };

    const handleSubmit = () => {
        console.log(userInp);
    }
    const handleSubmitCusines = () => {
        console.log(selectedCuisines);
        setShowCuisines(false);
    }
    const [cuisines, setCuisines] = useState([
        'Italian',
        'Mexican',
        'Indian',
        'Chinese',
        'Japanese',
        'Thai',
        'Greek',
        'French',
        'Spanish',
        'Korean',
        'Vietnamese',
        'Moroccan',
        'Lebanese',
        'Turkish',
        'Ethiopian'
    ]);
    const words = [
        {
          text: "Enter",
        },
        {
          text: "your",
        },
        {
          text: "gender",
        },
        // {
        //   text: "Aceternity.",
        // //   className: "text-blue-500 dark:text-blue-500",
        // },
      ];
    const words2 = [
        {
          text: "Enter",
        },
        {
          text: "your",
        },
        {
          text: "age",
        },
        // {
        //   text: "Aceternity.",
        // //   className: "text-blue-500 dark:text-blue-500",
        // },
      ];
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center overflow-y-auto'>
            <div className='h-full w-full justify-center items-center flex flex-col'>
                <div className='h-full flex flex-col justify-center items-center w-[75%]'>

                    {
                        showCuisines && !startQues &&
                        
                        
                        <div className='flex flex-col w-[75%] min-h-[85%] sm:min-h-[70%] lg:min-h-[85%] justify-center items-center '>
                            <h1 className='text-[45px] font-normal leading-[1]'>Choose your cuisines</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-6'>
                                {
                                    cuisines.map((cuisine, index) => (
                                        <button 
                                            key={index} 
                                            onClick={() => handleCuisineSelect(index)}
                                            className={`h-24 hover:scale-105 rounded-2xl flex justify-center items-center border border-[#CCCCCC] ${selectedCuisines.includes(index) ? 'bg-[#81C784]' : 'bg-[#F5F5F5]'} ${!selectedCuisines.includes(index) && 'hover:bg-[#E0E0E0]'}`}
                                        >
                                            <p className={`${selectedCuisines.includes(index) ? 'text-white' : 'text-[#333333]'} font-medium`}>{cuisine}</p>
                                        </button>
                                    ))
                                }
                            </div>
                            <div className='w-full mt-4 flex justify-end items-end'>
                                <button 
                                    className='bg-[#6EC0FF] hover:bg-[#4e9ad4] h-10 w-20 rounded-full'
                                    onClick={() => handleSubmitCusines()}
                                >
                                    <p className='text-white'>Next</p>
                                </button>
                            </div>
                        </div>
                    }
                    {
                        !showCuisines && !startQues &&
                            <div className='flex flex-col w-[75%] min-h-[85%] sm:min-h-[70%] lg:min-h-[85%] justify-center items-center '>
                                <h1 className='text-[45px] font-normal leading-[1]'>Lets get started.Type in either your <span className='text-[#6EC0FF]'>health goals, issues,</span>  or <span className='text-[#6EC0FF]'>both</span>.</h1>
                                <div className='flex  w-full justify-start items-center mt-6'>
                                    <button 
                                        onClick={() => setShowCuisines(true)}
                                        className='w-[25%] h-12 bg-[#6EC0FF] hover:bg-[#4e9ad4] rounded-2xl mr-3 flex justify-center items-center'>
                                        <p className='text-white font-medium'>Choose my own cuisines</p>
                                    </button>

                                    <button 
                                        onClick={() => setStartQues(true)}
                                        className='w-1/3 h-12 bg-black hover:bg-[#292929] rounded-2xl mx-3 flex justify-center items-center'
                                    >
                                        <p className='text-white font-medium'>Not sure where to start?</p>
                                    </button>
                                </div>
                            </div>
                    }

                    {
                        startQues && 
                        <div className='flex flex-col w-[75%] min-h-[85%] sm:min-h-[70%] lg:min-h-[85%] justify-center items-center '>
                            <TypewriterEffectSmooth words={words}/>
                        </div>
                    }

                    {/* Chat box */}
                    {
                        !showCuisines &&
                        <div className='h-20 w-[85%] border flex justify-between items-center border-black rounded-2xl mb-4'>
                            <input 
                                className='h-full w-full rounded-2xl p-2 text-3xl outline-none capitalize' 
                                placeholder='Enter questions or answers here'
                                value={userInp}
                                onChange={(e) => setUserInp(e.target.value)}
                            />
                            <button 
                                className='flex justify-center items-center h-12 w-12 bg-black rounded-full p-1 mr-2 hover:bg-[#292929]'
                            >
                                <IoMdArrowRoundUp color='white' size={22}/>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
