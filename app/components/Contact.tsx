import Link from 'next/link';
import React from 'react';

const Contact = () => {
    return (
        <div className="overflow-hidden px-5 md:px-24">
            <div className='border-t-1 border-b-1 border-gray-300 my-24 py-24 text-center'>
                <h1 className='text-5xl font-bold'>Connect with us</h1>
                <p className='text-[#485c11] my-12'>Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
                <div className='mt-10 flex justify-center md:block'>
                    <Link href="/contact" >
                        <button className='bg-[#485c11] text-white px-5 py-2 rounded-3xl w-full md:w-120'> Get Connect </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
