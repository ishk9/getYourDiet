import React from 'react'

const ReviewBox = ({name, review, rating}) => {
    return (
        <div className='w-2/3 py-5 h-fit p-2 bg-white rounded-lg border border-gray-200 flex flex-col justify-center items-center'>
            <div className='p-2 w-[90%] bg-gray-100 py-4 rounded-lg'>
                <p>"{review}"</p>
            </div>

            <div className='flex w-[90%] justify-between items-center'>
                <div className='flex'>
                    {[...Array(rating)].map((_, i) => (
                        <span key={i} className='text-yellow-500 text-2xl'>★</span>
                    ))}
                </div>
                <div className='flex'>
                    <p className='text-sm'>{name}</p>
                    <p className='text-sm italic ml-1'>(Verified member)</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewBox
