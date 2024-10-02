"use client";
import { makePayment } from "@/lib/services";
import { FaCircleCheck } from "react-icons/fa6";

function PriceCard({ id, name, price, popular, points }) {
    console.log(id, name, price, popular, points );
    const handleCheckout = async () => {
        console.log("Name is :", name);
        const resp = await makePayment({ plan: name });
        const url = resp.url;

        if (url) {
            window.location.href = url;
        } else {
            console.log("No url found");
        }
    };

    return (
        <button
            onClick={handleCheckout}
            className={`flex flex-col ${price ? "h-[40%] md:h-5/6" : "h-[40%] md:h-4/6"} w-full md:w-[25%] mb-8 md:mb-0 shadow-lg shadow-slate-600 bg-slate-50 rounded-xl mx-3 p-5 transition-transform duration-300 hover:scale-105`}
        >
            <div className="h-full flex flex-col justify-center items-start">
                <h1 className="text-base md:text-lg text-black font-semibold uppercase">{name}</h1>
                <p className="text-black font-bold md:text-[28px] text-[14px] mt-1">{price === "free" ? price : `$${price}`}</p>
                <p className="text-gray-500 font-medium text-xs md:text-sm mt-2">What is included?</p>
                <div className="flex flex-col justify-center items-start mt-2">
                    {points && points.map((point) => (
                        <div key={point.id} className="flex justify-start items-center mt-2">
                            <FaCircleCheck className="text-green-500" />
                            <p className="ml-2 text-sm md:text-base">{point.point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`border-2 mt-4 md:mt-8 w-full bg-white rounded-lg`}>
                <p className={`py-2 px-4 font-semibold text-black md:text-base text-[12px]`}>
                    Get Started
                </p>
            </div>
        </button>
    );
}

export default PriceCard;
