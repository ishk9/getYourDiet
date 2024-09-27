"use client";
import { useState, useEffect } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { generateDiet, verifyResponse, verifyUser, addSessionId, getDiet, getDietDetails, getDietLimit } from '@/lib/services';
import { useRouter } from 'next/navigation';
import  DietPage  from '../Diet/[userid]/page.js';
import { useToast } from "@/hooks/use-toast";

const HomePage = () => {
    const router = useRouter();
    const { toast } = useToast();
    const [userInp, setUserInp] = useState('');
    const [showDiet, setShowDiet] = useState(false);
    const [showCuisines, setShowCuisines] = useState(false);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [startQues, setStartQues] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    
    const [isUserPresent, setIsUserPresent] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            const resp = await verifyUser();
            console.log("Resp: ", resp);
            setIsUserPresent(resp);
        };
        fetchData();
    }, []);

    const [dietLimit, setDietLimit] = useState(false);
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const fetchData = async() => {
            if(isUserPresent){
                const resp = await getDietLimit({userId:userId});
                if(resp){
                    console.log("Limit: ", resp.data);
                    setDietLimit(resp.data);
                }

            }
        };
        fetchData();
    }, [isUserPresent]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sessionId = params.get('session_id');
        console.log("Session id: ", sessionId);
        const userId = localStorage.getItem('userId');
        const fetchData = async() => {
            const data = {
                userId,
                sessionId
            }
            const resp = await addSessionId(data);
            console.log("Resp: ", resp);
            setIsUserPresent(resp);
        };
        if (sessionId) {
            fetchData();
        }
    }, []);

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
            const resp = await verifyResponse(data);
            console.log("Response: ", resp.data);
            const response = resp.data.trim();
            // const response = "YES";
            if(response === "YES"){
                console.log("Yes entered");
                setCurrentWordIndex(prevIndex => prevIndex + 1);
            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Invalid response ",
                    description: "Please enter a valid response to the question and submit again",
                    
                })
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
                    console.log("Response of diet:", resp);
                    const dietPlan = resp;
                    // console.log("Meals: ", dietPlan.data.meals, typeof(dietPlan.data.meals));
                    console.log("Id is: ", dietPlan.data._id);
                    toast({
                        title: "Diet generated successfully!",                        
                    })
                    setTimeout(() => {
                        router.push(`/Diet/${dietPlan.data._id}`);
                    }, 1000);

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
        { text: "Do you have any allergies or intolerances?" },
        { text: "Any health conditions you suffer from?" },
        { text: "Do you have any specific meal frequency?" },
        { text: "Do you follow intermittent fasting?" },
        { text: "What is your activity level?" },
    ];
    const [tabs, setTabs] = useState([]);
    return (
        <>
            {
                showDiet ?
                    <div className='flex flex-col h-screen w-screen overflow-x-hidden'>
                        <div className='flex lg:flex-row flex-col mb-24 p-5  lg:justify-center lg:items-center'>
                            <h1 className='text-3xl leading-[0.9] flex justify-center items-center font-semibold'>Your personalized supplement program.</h1>
                            <i className='text-sm lg:ml-2 mt-4 lg:mt-0'> | Click to view diet</i>
                        </div>
                        <DietPage />
                        {/* <Tabs tabs={tabs} /> */}
                    </div>
                    :
                    <div className={`${showCuisines ? 'h-auto' : 'h-screen'} md:h-screen w-screen flex flex-col justify-center items-center overflow-y-auto`}>
                        <div className='h-full w-full justify-center items-center flex flex-col'>
                            <div className='h-full flex flex-col justify-center items-center w-full md:w-[75%]'>

                                {
                                    showCuisines && !startQues &&
                                    <div className='flex flex-col w-[90%] sm:w-[75%] h-auto justify-center items-center'>
                                        <h1 className='text-[30px] sm:text-[45px] font-normal leading-[1] text-center mt-4 md:mt-0'>Choose your cuisines<span className='text-base font-semibold ml-2'>({selectedCuisines.length}/7)</span></h1>
                                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4'>
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
                                        <div className='w-full my-4 flex justify-end items-end'>
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
                                        <h1 className='md:text-[45px] font-normal leading-[1] text-[24px] ml-5 md:ml-0'>Lets get started. Type in either your <span className='text-[#6EC0FF]'>health goals, issues,</span> or <span className='text-[#6EC0FF]'>both</span>.</h1>
                                        <div className='flex md:flex-row flex-col w-full justify-start items-center mt-6'>
                                            <button 
                                                onClick={() => {
                                                    if(isUserPresent && dietLimit){
                                                        setShowCuisines(true)
                                                    } else if(!dietLimit) {
                                                        toast({
                                                            title: "Uh oh! Looks like you have exceeded the limit",
                                                            description: "Please upgrade your subscription plan",
                                                            
                                                        })
                                                    } else {
                                                        router.push('/Login');
                                                    }
                                                }}
                                                className='w-[90%] md:w-[25%] h-12 bg-[#6EC0FF] hover:bg-[#4e9ad4] rounded-2xl md:mr-3 flex justify-center items-center'>
                                                <p className='text-white font-medium'>Choose my own cuisines</p>
                                            </button>

                                            <button 
                                                onClick={() => {
                                                    if(isUserPresent && dietLimit){
                                                        setStartQues(true)
                                                    } else if(!dietLimit) {
                                                        toast({
                                                            title: "Uh oh! Looks like you have exceeded the limit",
                                                            description: "Please upgrade your subscription plan",
                                                            
                                                        })
                                                    } else {
                                                        router.push('/Login');
                                                    }
                                                        
                                                }}
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
                                            className='flex justify-center items-center h-12 md:w-12 w-14 bg-black rounded-full p-0 md:p-1 mr-2 hover:bg-[#292929]'
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
