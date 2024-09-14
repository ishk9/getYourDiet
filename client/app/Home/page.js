"use client";
import { useState, useEffect } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { generateDiet, verifyResponse } from '@/lib/services';
import { useRouter } from 'next/navigation';
import { Tabs } from "../../components/ui/customtabs";

const HomePage = () => {
    const router = useRouter();
    const [userInp, setUserInp] = useState('');
    const [showDiet, setShowDiet] = useState(false);
    const [showCuisines, setShowCuisines] = useState(false);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [startQues, setStartQues] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // To store answers for each question
    
    const handleCuisineSelect = (index) => {
        if (selectedCuisines.includes(index)) {
            setSelectedCuisines(selectedCuisines.filter(id => id !== index));
        } else if(selectedCuisines.length < 7) {
            setSelectedCuisines([...selectedCuisines, index]);
        }
    };
    const handleSubmitCusines = () => {
        console.log(selectedCuisines);
        setShowCuisines(false);
    };

    const handleAnswerSubmit = async() => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentWordIndex]: userInp
        }));
        console.log(words[currentWordIndex].text, userInp);
        try{
            const data = {
                question: words[currentWordIndex].text,
                answer: userInp
            };
            // const resp = await verifyResponse(data);
            // console.log("Response: ", resp.data);
            // const response = resp.data.trim();
            const response = "YES";
            if(response === "YES"){
                console.log("Yes entered");
                setCurrentWordIndex(prevIndex => prevIndex + 1);
            } else {
                setCurrentWordIndex(prevIndex => prevIndex);
            }
            setUserInp('');
        } catch(err){
            console.log("Error validating response");
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAnswerSubmit();
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            if (currentWordIndex >= words.length) {
                const mappedData = words.map((wordObj, index) => ({
                    question: wordObj.text,
                    answer: answers[index] || "No answer provided"
                }));
    
                const stringData = mappedData.map(word => 
                    `<${word.question} -> ${word.answer}>`
                ).join(' ');
    
                const data = { requirements: stringData }
                console.log("String data: ", data);
                try {
                    const resp = await generateDiet(data);
                    console.log("Response:", resp);
                    const dietPlan = resp;
                    console.log("Meals: ", dietPlan.data.meals, typeof(dietPlan.data.meals));

                    const transformedTabs = dietPlan.data.meals.map(meal => ({
                        title: meal.meal_time.split(" ")[0],
                        value: meal.meal_time.toLowerCase().replace(/\s+/g, '-'), 
                        options: meal.options
                    }));
            
                    setTabs(transformedTabs);
                    setTimeout(() => {
                        setShowDiet(true);
                    }, 2000);

                } catch (err) {
                    console.log("Error:", err);
                }
            }
        };
    
        fetchData();
    }, [currentWordIndex]);
    

    const cuisines = [
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
    ];

    const words = [
        { text: "Enter your biological sex" },
        { text: "Enter your age" },
        { text: "What are your fitness goals?" },
        // { text: "Do you have any allergies or intolerances?" },
        // { text: "Any health conditions you suffer from?" },
        { text: "Do you have any specific meal frequency?" },
        // { text: "Do you follow intermittent fasting?" },
        { text: "What is your activity level?" },
    ];
    const [tabs, setTabs] = useState([]);
    return (
        <>
            {
                showDiet ?
                    <div className='flex flex-col h-screen w-screen overflow-x-hidden'>
                        <h1 className='text-3xl leading-[0.9] flex justify-center items-center my-5 mb-24 font-semibold'>Your personalized supplement program. <i className='text-sm ml-2'> | Click to view diet</i></h1>
                        {/* <DietPage tabs={tabs}/> */}
                        <Tabs tabs={tabs} />
                    </div>
                    :
                    <div className='h-screen w-screen flex flex-col justify-center items-center overflow-y-auto'>
                        <div className='h-full w-full justify-center items-center flex flex-col'>
                            <div className='h-full flex flex-col justify-center items-center w-full md:w-[75%]'>

                                {showCuisines && !startQues &&
                                    <div className='flex flex-col w-[75%] min-h-[85%] sm:min-h-[70%] lg:min-h-[85%] justify-center items-center '>
                                        <h1 className='text-[45px] font-normal leading-[1]'>Choose your cuisines<span className='text-base font-semibold ml-2'>({selectedCuisines.length}/7)</span></h1>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-6'>
                                            {cuisines.map((cuisine, index) => (
                                                <button 
                                                    key={index} 
                                                    onClick={() => handleCuisineSelect(index)}
                                                    className={`h-24 hover:scale-105 rounded-2xl flex justify-center items-center border border-[#CCCCCC] ${selectedCuisines.includes(index) ? 'bg-[#81C784]' : 'bg-[#F5F5F5]'} ${!selectedCuisines.includes(index) && 'hover:bg-[#E0E0E0]'}`}
                                                >
                                                    <p className={`${selectedCuisines.includes(index) ? 'text-white' : 'text-[#333333]'} font-medium`}>{cuisine}</p>
                                                </button>
                                            ))}
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
                                {!showCuisines && !startQues &&
                                    <div className='flex flex-col w-full md:w-[75%] min-h-[85%] sm:min-h-[70%] lg:min-h-[85%] justify-center items-center'>
                                        <h1 className='md:text-[45px] font-normal leading-[1] text-[24px] ml-2'>Lets get started. Type in either your <span className='text-[#6EC0FF]'>health goals, issues,</span> or <span className='text-[#6EC0FF]'>both</span>.</h1>
                                        <div className='flex md:flex-row flex-col w-full justify-start items-center mt-6'>
                                            <button 
                                                onClick={() => setShowCuisines(true)}
                                                className='w-[90%] md:w-[25%] h-12 bg-[#6EC0FF] hover:bg-[#4e9ad4] rounded-2xl md:mr-3 flex justify-center items-center'>
                                                <p className='text-white font-medium'>Choose my own cuisines</p>
                                            </button>

                                            <button 
                                                onClick={() => setStartQues(true)}
                                                className='w-[90%] md:mt-0 mt-2 md:w-1/3 h-12 bg-black hover:bg-[#292929] rounded-2xl mx-3 flex justify-center items-center'
                                            >
                                                <p className='text-white font-medium'>Not sure where to start?</p>
                                            </button>
                                        </div>
                                    </div>
                                }

                                {startQues &&
                                    <div className='flex flex-col w-[75%] min-h-[85%] sm:min-h-[70%] lg:min-h-[85%] justify-center items-center '>
                                        {currentWordIndex < words.length ? (
                                            <TypewriterEffectSmooth 
                                                words={[words[currentWordIndex]]}
                                                key={currentWordIndex}
                                            />
                                        ) : (
                                            <div className='flex flex-col justify-center items-end'>
                                                <h1 className='text-[45px] font-normal leading-[1]'>Thank you for your responses!</h1>
                                            </div>
                                                
                                        )}
                                    </div>
                                }

                                {/* Chat box */}
                                {!showCuisines &&
                                    <div className='h-14 md:h-20 md:w-[85%] w-[95%] border flex justify-between items-center border-black rounded-2xl mb-4'>
                                        <input 
                                            className='h-full w-full rounded-2xl p-2 text-base md:text-3xl outline-none' 
                                            placeholder='Enter questions or answers here'
                                            value={userInp}
                                            onChange={(e) => {
                                                const input = e.target.value;
                                                const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
                                                setUserInp(capitalizedInput);
                                            }}
                                            onKeyDown={handleKeyDown}
                                        />
                                        <button 
                                            onClick={() => handleAnswerSubmit()}
                                            className='flex justify-center items-center h-12 w-12 bg-black rounded-full p-1 mr-2 hover:bg-[#292929]'
                                        >
                                            <IoMdArrowRoundUp color='white' size={22}/>
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
            }           
        </>
    );
};

export default HomePage;
