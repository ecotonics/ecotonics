import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Contact from '@/app/components/Contact';
import Header from '@/app/components/Header';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className='border-gray-300 py-24 px-5 md:px-24 bg-[#8e9c78]'>
                <p className='font-bold text-white'>Benefits</p>
                <h1 className='my-12 text-5xl font-bold text-white'>Projects We Accoplished</h1>
                <p className='text-white'>Area provides real insights, without the data overload.</p>
            </div>
            <Contact />
            <Footer />
        </>
    );
};

export default page;