import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <navbar className="flex flex-row w-full justify-between items-center">
            <div>
                <p className="text-white font-semibold">GetYourDiet</p>
            </div>

            <div className="flex flex-row w-1/4 justify-around items-center">
                <Link href="/">
                    <p className="text-white font-semibold">Our Method</p>
                </Link>
                <Link href="/">
                    <p className="text-white font-semibold">Pricing</p>
                </Link>
                <Link href="/">
                    <p className="text-white font-semibold">Reviews</p>
                </Link>
            </div>

            <div>
                <button>
                    <p className="text-white font-semibold">Sign Up</p>
                </button>
            </div>
        </navbar>
    )
}

export default Navbar
