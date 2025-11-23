'use client'

import React, { useState } from "react";


const Heighlights = () => {

    return (
        <div className='p-3 lg:p-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='h-100 border-8 border-gray-300 rounded-3xl'></div>
                <div className='h-100 border-8 border-gray-300 rounded-3xl'></div>
                <div className='h-100 border-8 border-gray-300 rounded-3xl'></div>
            </div>
            <div className='grid grid-cols-1 mt-5'>
                <div className='h-100 border-8 border-gray-300 rounded-3xl'></div>
            </div>
        </div>
    )
}

export default Heighlights