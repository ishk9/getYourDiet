import React from 'react'

const Dietbox = ({title}) => {
    return (
        <div className="flex flex-col w-full  border-2 border-black mr-10 mx-5 rounded-lg p-5 shadow-xl">
            <div>
                <h1 className="font-bold text-xl">Breakfast</h1>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Dietbox
