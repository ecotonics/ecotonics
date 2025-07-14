import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="w-full hidden lg:flex items-center justify-between p-5 px-48">
            <Link href="/">
                <p className="text-2xl font-bold">Ecotonics</p>
            </Link>
            <Link href="/contact">
                <button className="px-5 py-2 bg-[#485c11] text-white rounded-3xl">
                    <p className='text-sm font-bold'>Contact us</p>
                </button>
            </Link>
        </div>
    )
}

export default Header